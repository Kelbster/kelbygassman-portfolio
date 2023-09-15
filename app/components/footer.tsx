const linkCss =
  "text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

const Footer = () => (
  <footer className="container max-w-full p-8 sm:pl-16">
    <ul className="text-sm flex align-middle justify-center sm:justify-start gap-x-4 font-helvetica">
      <li className="hidden sm:block">
        © Kelby Gassman {new Date().getFullYear()}
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kelby-gassman/"
          rel="noopener noreferrer"
          target="_blank"
          className={linkCss}
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/u/Kelbster"
          rel="noopener noreferrer"
          target="_blank"
          className={linkCss}
        >
          CodeSandbox
        </a>
      </li>
      <li>
        <a href="mailto:kelby.gassman@gmail.com" className="linkCss">
          Contact
        </a>
      </li>
      <li>
        <a
          href="/Kelby%20Gassman%20Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className={linkCss}
        >
          Resume
        </a>
      </li>
    </ul>
    <p className="text-sm text-center font-helvetica block sm:hidden">
      © Kelby Gassman {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
