import type { ArticleConfig } from "src/types";

// https://mdocs.adamjanicki.xyz/sandbox/edit

const articlebody = `# A poem 
> Nets are for catching fish;  
> Once you catch a fish you can discard the net.  
> Words are for catching meaning;  
> Once you catch the meaning you can discard the words. 
- Zhuangzi  

[Source](https://en.wikipedia.org/wiki/Zhuang_Zhou)
`;
const article: ArticleConfig = {
  id: 1,
  slug: "fish-words",
  title: "Welcome",
  content: articlebody,
  created: new Date("2024-06-01"),
  modified: new Date("2024-06-01"),
  tags: ["poems", "language", "philosophy"],
  relatedArticleIds: [2, 3],
};

export default article;
