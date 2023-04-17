module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('tailwind.config.js')
  eleventyConfig.addWatchTarget("src/css")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.setBrowserSyncConfig({ open: true })
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  }
}
