import type { ArticleConfig } from "src/types";
import ReactMarkdown from "react-markdown";
import PageWrapper from "src/components/PageWrapper";
import Link from "src/components/Link";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type Props = {
  article: ArticleConfig;
};

type GenericElementProps = {
  [key: string]: any;
};

const DEFAULT_TEXT_STYLE = {
  overflowWrap: "break-word",
  lineHeight: 1.6,
};

// https://mdocs.adamjanicki.xyz/tutorial

export default function Article({ article }: Props) {
  return (
    <PageWrapper title={article.title}>
      <div className="flex flex-column blog-width" style={{ margin: "0 auto" }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeSanitize]}
          components={{
            a: ({ href, children }: GenericElementProps) => (
              <Link to={href}>{children}</Link>
            ),
            p: ({ style, ...props }: GenericElementProps) => (
              <p {...props} style={{ ...style, ...DEFAULT_TEXT_STYLE }} />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </PageWrapper>
  );
}
