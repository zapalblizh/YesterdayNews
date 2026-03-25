/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */
import path from "node:path";
import fs from "node:fs";
import {EleventyHtmlBasePlugin} from "@11ty/eleventy";
import pluginSpeculationRules from "eleventy-plugin-speculation-rules";
import { eleventyImageTransformPlugin as pluginImageTransform } from "@11ty/eleventy-img";

export default {

    ImageTransform: (eleventyConfig) => {
        // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
        eleventyConfig.addPlugin(pluginImageTransform, {
            // Build speed boost @link https://www.zachleat.com/web/faster-builds-with-eleventy-img/
            urlPath: "/img/",
            outputDir: ".cache/@11ty/img/",
            failOnError: false,

            // File extensions to process in _site folder
            extensions: "html",

            // Output formats for each image.
            formats: ["avif", "webp", "auto"],

            // outputDir: './_site/img/',
            // urlPath: '/img/',

            // optional, output image widths
            widths: ["320", "640", "960", "1200"], //["auto"],

            defaultAttributes: {
                // e.g. <img loading decoding> assigned on the HTML tag will override these values.
                loading: "lazy",
                decoding: "async",
                class: "img",
                sizes: "100vw",
            },
        });

        eleventyConfig.on("eleventy.after", () => {
            fs.cpSync(
                ".cache/@11ty/img/",
                path.join(eleventyConfig.directories.output, "/img/"),
                {
                    recursive: true,
                },
            );
        });
    },

    // Official plugins
    EleventyHtmlBase: (eleventyConfig) => {
        eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    },

    SpeculationRules: (eleventyConfig) => {
        eleventyConfig.addPlugin(pluginSpeculationRules);
    },
};
