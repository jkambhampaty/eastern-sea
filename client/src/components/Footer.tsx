import Link from "src/components/Link";

const Footer = () => (
  <footer className="pv2 ph4 flex footer justify-right ">
    <p className="f6 i dib v-btm">
      Built from a {" "}
      <Link
        to="https://github.com/adamjanicki2/vercel-mern-skeleton"
        target="_blank"
        rel="noreferrer"
      >
        skeleton
      </Link>
      {" "}by Adam Janicki.
    </p>
  </footer>
);

export default Footer;
