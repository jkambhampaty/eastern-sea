import type { ArticleConfig } from "src/types";

const articleContent = `
> The turtle of the Eastern Sea tried to get in the well, but before his left leg could even enter, his right knee was already stuck. So, it circled around and went back, and told the frog, "A thousand miles cannot describe its vastness; a thousand fathoms cannot measure its depth. In the time of Yu, there were floods nine out of ten years, yet the sea did not increase; in the time of Tang, there were droughts seven out of eight years, yet the cliffs did not decrease. The sea does not change with the passing of time or the amount of water it contains, this is the great joy of the Eastern Sea." When the frog in the well heard this, it was astonished and could not find words to reply."
- Chinese parable

[At wikipedia](https://en.wikibooks.org/wiki/Chinese_Stories/The_frog_of_the_well)`;

const article: ArticleConfig = {
  id: 2,
  slug: "eastern-sea",
  title: "The Frog in the Well",
  content: articleContent,
  created: new Date("2024-06-01"),
  modified: new Date("2024-06-01"),
  tags: ["blog"],
  relatedArticleIds: [1],
};

export default article;
