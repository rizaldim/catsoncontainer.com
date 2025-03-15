import { DateTime } from "luxon";

export default async function(config) {
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("style");
  config.addPassthroughCopy("fonts");

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site",
      htmlTemplateEngine: "njk",
    }
  }
};
