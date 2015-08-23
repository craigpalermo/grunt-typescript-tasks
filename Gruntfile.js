module.exports = function(grunt) {
    grunt.initConfig({
        // run build tasks when watched files change
        watch: {
            ts: {
                files: ["src/**/*.ts"],
                tasks: ["build"]
            }
        },

        // combine JS files into minified output file
        uglify: {
            options: {
                mangle: false,
                compress: true,
            },

            // combine all .js files in js/ into one file
            dest: {
                files: [{
                    "output.min.js": ["js/**/*.js"]
                }]
            }
        },

        // compile TypeScript to JavaScript
        typescript: {
            base: {
                src: ["src/**/*.ts"],
                dest: "js/",
                options: {
                    target: "es5"
                }
            }
        }
    });

    // load vendor tasks
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // my tasks
    grunt.registerTask("build", ["typescript", "uglify:dest"]);
};
