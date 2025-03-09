export default async function(config) {
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("style");
  config.addPassthroughCopy("fonts");

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site",
      htmlTemplateEngine: "njk",
    }
  }
};
