/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import pluginSpeculationRules from "eleventy-plugin-speculation-rules";
import pluginSVGContents from "eleventy-plugin-svg-contents";
import pluginPhosphorIcons from "eleventy-plugin-phosphoricons";

export default {
  // Official plugins
  EleventyHtmlBase: (eleventyConfig) => {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  },

  PhosphorIcons: (eleventyConfig) => {
    eleventyConfig.addPlugin(pluginPhosphorIcons, {
      class: "phicon",
      size: 32,
      fill: "currentColor",
    });
  },

  SpeculationRules: (eleventyConfig) => {
    eleventyConfig.addPlugin(pluginSpeculationRules);
  },

  // Easily grab an svg image and render the raw svg contents with the ability to add classes
  // Ex: {{ '/src/assets/images/logo.svg' | svgContents("h-8 w-8 text-red-500") | safe }}
  svgContents: function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginSVGContents);
  },
};
