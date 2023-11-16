const linkCss =
  "text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

const Nav = () => (
  <nav className="container max-w-full p-4 pt-8 pr-12 sm:pr-16">
    <ul className="flex flex-wrap align-middle justify-end gap-x-4 font-helvetica">
      <li>
        <a
          className={linkCss}
          href="https://www.linkedin.com/in/kelby-gassman/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          className={linkCss}
          href="https://codesandbox.io/u/Kelbster"
          rel="noopener noreferrer"
          target="_blank"
        >
          CodeSandbox
        </a>
      </li>
      <li>
        <a className={linkCss} href="mailto:kelby.gassman@gmail.com">
          Contact
        </a>
      </li>
      <li>
        <a
          className={linkCss}
          href="/Kelby-Gassman-Resume-min.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
