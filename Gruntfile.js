"use strict";

var fs = require("fs"),
  path = require("path");

module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON("package.json"),
    concat: {
      options : {
        banner : "/**\n" +
        " * <%= pkg.name %>\n" +
        " *\n" +
        " * @copyright <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n" +
        " * @license <%= pkg.license %>\n" +
        " * @version <%= pkg.version %>\n" +
        " */\n"
      },
      dist: {
        src : [
          "<banner>",
          "src/intro.js",
          "src/adjectives.js",
          "src/adverbs.js",
          "src/compound.js",
          "src/international.js",
          "src/nouns.js",
          "src/operations.js",
          "src/prepositions.js",
          "src/pronouns.js",
          "src/verbs.js",
          "src/filter.js",
          "src/ogden.js",
          "src/outro.js"
        ],
        dest : "lib/<%= pkg.name %>.es6.js"
      }
    },
    "babel": {
      options: {
        sourceMap: false,
        presets: ["babel-preset-env"]
      },
      dist: {
        files: {
          "lib/<%= pkg.name %>.js": "lib/<%= pkg.name %>.es6.js"
        }
      }
    },
    eslint: {
      target: [
        "index.js",
        "lib/<%= pkg.name %>.es6.js"
      ]
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /{{VERSION}}/,
              replacement: '<%= pkg.version %>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              "lib/<%= pkg.name %>.es6.js"
            ],
            dest: 'lib/'
          }
        ]
      }
    },
    uglify: {
      options: {
        banner: "/*\n <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n @version <%= pkg.version %>\n*/",
        sourceMap: true,
        sourceMapIncludeSources: true,
        mangle: {
          reserved: [
            "Map",
            "Set",
            "Ogden"
          ]
        }
      },
      target: {
        files: {
          "lib/<%= pkg.name %>.min.js" : ["lib/<%= pkg.name %>.js"]
        }
      }
    },
    watch : {
      js : {
        files : "<%= concat.dist.src %>",
        tasks : "build"
      },
      pkg: {
        files : "package.json",
        tasks : "build"
      }
    }
  });

  // tasks
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-replace");

  grunt.task.registerTask("babili", "Minifies ES2016+ code", function () {
    var data = fs.readFileSync(path.join(__dirname, "lib", "ogden.es6.js"), "utf8"),
      minified = require("babel-core").transform(data, {sourceFileName: "ogden.es6.js", sourceMaps: true, presets: ["minify"]}),
      pkg = require(path.join(__dirname, "package.json")),
      banner = "/*\n " + new Date().getFullYear() + " " + pkg.author + "\n @version " + pkg.version + "\n*/\n\"use strict\";";

    fs.writeFileSync(path.join(__dirname, "lib", "ogden.es6.min.js"), banner + minified.code + "\n//# sourceMappingURL=ogden.es6.min.js.map", "utf8");
    grunt.log.ok("1 file created.");
    fs.writeFileSync(path.join(__dirname, "lib", "ogden.es6.min.js.map"), JSON.stringify(minified.map), "utf8");
    grunt.log.ok("1 sourcemap created.");
  });

  // aliases
  grunt.registerTask("compress", ["babili", "uglify"]);
  grunt.registerTask("test", ["eslint"]);
  grunt.registerTask("build", ["concat", "replace", "babel"]);
  grunt.registerTask("default", ["build", "test", "compress"]);
};
