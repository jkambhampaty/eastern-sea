import Link from "src/components/Link";
import "src/components/footer.css";

const Footer = () => (
  <footer className="pv5 ph2 flex items-center justify-center w-100 bt b--moon-gray">
    <p className="fw5 f5 tc">
      Built with Adam Janicki's {" "}
      <Link
        to="https://github.com/adamjanicki2/vercel-mern-skeleton"
        target="_blank"
        rel="noreferrer"
      >
        Vercel MERN Skeleton
      </Link>
    </p>
  </footer>
);

export default Footer;
