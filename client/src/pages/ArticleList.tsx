import PageWrapper from "src/components/PageWrapper";
import articles from "src/articles";
import Link from "src/components/Link";

export default function ArticleList() {
  return (
    <PageWrapper title="">
      <h1 className="f2-l fw1">Articles</h1>
      <ul>
        {articles
          .slice(0)
          .reverse()
          .map((article, i) => (
            <li key={i}>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
      </ul>
    </PageWrapper>
  );
}
