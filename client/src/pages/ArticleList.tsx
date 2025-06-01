import PageWrapper from "src/components/PageWrapper";
import articles from "src/articles";
import Link from "src/components/Link";

export default function ArticleList() {
  return (
    <PageWrapper title="Article List">
      <ol>
        {articles.map((article, i) => (
          <li key={i}>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ol>
    </PageWrapper>
  );
}
