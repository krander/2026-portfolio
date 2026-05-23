const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addFilter("date", function (dateVal, format) {
    return DateTime.fromJSDate(new Date(dateVal), { zone: "utc" }).toFormat(format);
  });

  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("writing/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
