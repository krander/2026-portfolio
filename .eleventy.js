// .eleventy.js
// ─────────────────────────────────────────────────────────────
// Eleventy configuration for the portfolio.
// Docs: https://www.11ty.dev/docs/
// ─────────────────────────────────────────────────────────────

module.exports = function (eleventyConfig) {

  // ── Pass-through copies ──────────────────────────────────
  // These files are copied to _site as-is without processing.
  eleventyConfig.addPassthroughCopy("css");

  // ── Collections ──────────────────────────────────────────
  // Case studies — sorted by date, newest first
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("work/*.njk")
      .sort((a, b) => b.date - a.date);
  });

  // Writing posts — sorted by date, newest first
  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("writing/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // ── Shortcodes ───────────────────────────────────────────
  // Decision box callout
  // Usage: {% decisionbox %}Content here{% enddecisionbox %}
  eleventyConfig.addPairedShortcode("decisionbox", function (content) {
    return `<div class="decision-box">
  <div class="decision-label">Key trade-off</div>
  <p>${content.trim()}</p>
</div>`;
  });

  // Pull quote
  // Usage: {% pullquote %}Quote here{% endpullquote %}
  eleventyConfig.addPairedShortcode("pullquote", function (content) {
    return `<div class="pull-quote">
  <p>${content.trim()}</p>
</div>`;
  });

  // Artifact placeholder
  // Usage: {% artifact "Label text", "Caption text" %}
  eleventyConfig.addShortcode("artifact", function (label, caption) {
    return `<div class="artifact">
  <div class="artifact-frame">
    <span class="artifact-label">${label}</span>
  </div>
  <p class="artifact-caption">${caption}</p>
</div>`;
  });

  // ── Filters ──────────────────────────────────────────────
  // Format a date as "Jan 2025"
  eleventyConfig.addFilter("dateDisplay", function (date) {
    return new Date(date).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  });

  // ── Config ───────────────────────────────────────────────
  return {
    // Use Nunjucks for HTML and Nunjucks template files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  };
};
