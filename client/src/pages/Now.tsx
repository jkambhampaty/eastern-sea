// import PageWrapper from "src/components/PageWrapper";
import ReactMarkdown from "react-markdown";

const articleMarkdown = `
# My First Blog Post

Welcome to my blog! This is where I'll share my thoughts on various topics.

This post is an example of how to render **Markdown** in React.

Here's a list:
- Item 1
- Item 2
- Item 3

You can also include code blocks:

\`\`\`javascript
const greeting = "Hello, Markdown!";
console.log(greeting);
\`\`\`

Or even images:
![Alt text for image](link-to-your-image.jpg)
`;
const Now = () => (
  <>
    <h1 className="tl small-caps"> Now. </h1>
    <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
  </>
);

export default Now;
