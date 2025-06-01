import type { ArticleConfig } from "src/types";

const articlebody = `# CHANGE ME 
TODO`;

 // @ts-ignore
const article: ArticleConfig = {
  id: -1,
  slug: "change-me",
  title: "Change Me",
  content: articlebody,
  created: new Date("YYYY-MM-DD"),
  modified: new Date("YYYY-MM-DD"),
  tags: ["tag1", "tag2"],
  relatedArticleIds: [0, 1],
};
