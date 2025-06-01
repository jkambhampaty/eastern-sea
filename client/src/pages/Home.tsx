import { useTitle } from "src/hooks";

const Home = () => {
  useTitle("Eastern Sea");

  return <h1 className="tc home-title">JAYA</h1>;
};

export default Home;
