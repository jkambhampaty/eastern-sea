import { BrowserRouter, Route, Routes } from "react-router";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";
import Article from "src/pages/Article";
import ArticleList from "./pages/ArticleList";
import articles from "src/articles";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<ArticleList />} />
        {articles.map((article, i) => (
          <Route
            key={i}
            path={`/articles/${article.slug}`}
            element={<Article article={article} />}
          />
        ))}
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Alert />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
