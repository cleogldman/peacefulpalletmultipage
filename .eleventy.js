const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {
  let p = {}
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    p={ pathPrefix: "/peacefulpalletmultipage/"}
  }
  
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("./src/");
  
    
    // Return your Object options:
    return {
     ...p,
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
      }
    }
  };