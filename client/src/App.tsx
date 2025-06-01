import { BrowserRouter, Route, Routes } from "react-router";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import About from "src/pages/About";
import ApiTest from "src/pages/ApiTest";
import Home from "src/pages/Home";
import Now from "src/pages/Now";
import NotFound from "src/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now/" element={<Now />} />
        <Route path="/about/" element={<About />} />
        <Route path="/api-test/" element={<ApiTest />} />
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Alert />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
