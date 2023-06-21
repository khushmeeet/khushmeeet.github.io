module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('tailwind.config.js')
  eleventyConfig.addWatchTarget("src/css")
  eleventyConfig.addWatchTarget("src/js")
  eleventyConfig.addPassthroughCopy("src/css")
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.setBrowserSyncConfig({ open: true })
  eleventyConfig.setDataDeepMerge(true);

  let now = new Date();
  let formattedDate = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
  eleventyConfig.addGlobalData("lastUpdated", `${formattedDate}`);

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
