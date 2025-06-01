import type { ArticleConfig } from "src/types";

const articleContent = `Second Article starting with text 
## Subheading 1  
some more text
`;

const article: ArticleConfig = {
  id: 2,
  slug: "second-article",
  title: "Second Article",
  content: articleContent,
  created: new Date("2024-06-01"),
  modified: new Date("2024-06-01"),
  tags: ["blog"],
  relatedArticleIds: [1],
};

export default article;
