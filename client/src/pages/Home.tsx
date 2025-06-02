import { useTitle } from "src/hooks";
import PageWrapper from "src/components/PageWrapper";

const Home = () => {
  useTitle("Eastern Sea");

  return (
    <PageWrapper title="">
      <h1 className="f2-l fw1">Eastern Sea</h1>
      <article>
        <header className="fn fl-ns w-30-ns pr4-ns">
          <time className="f6 ttu tracked gray">A Chinese parable.</time>
        </header>
        <div className="fn fl-ns w-70-ns">
          <p className="f5 lh-copy measure mt0-ns">
            THE TURTLE of the Eastern Sea tried to get in the well, but before
            his left leg could even enter, his right knee was already stuck. So,
            it circled around and went back, and told the frog, "A thousand
            miles cannot describe its vastness; a thousand fathoms cannot
            measure its depth. In the time of Yu, there were floods nine out of
            ten years, yet the sea did not increase; in the time of Tang, there
            were droughts seven out of eight years, yet the cliffs did not
            decrease. The sea does not change with the passing of time or the
            amount of water it contains, this is the great joy of the Eastern
            Sea." 
            </p>
          <p className="f5 lh-copy measure mt0-ns">
            When the frog in the well heard this, it was astonished and
            could not find words to reply.
          </p>
        </div>
      </article>
    </PageWrapper>
  );
};

export default Home;
