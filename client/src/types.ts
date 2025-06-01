/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

export type Children = React.ReactNode | React.ReactNode[];

export type ArticleConfig = {
  id: number;
  slug: string;
  title: string;
  content: string;
  created: Date;
  modified: Date;
  tags: string[];
  relatedArticleIds: number[];
};
