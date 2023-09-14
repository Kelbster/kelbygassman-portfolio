const Nav = () => (
  <nav className="container max-w-full p-4 pt-8 pr-16">
    <ul className="flex align-middle justify-end gap-x-4 font-helvetica">
      <li>
        <a
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
          href="https://www.linkedin.com/in/kelby-gassman/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
          href="https://codesandbox.io/u/Kelbster"
          rel="noopener noreferrer"
          target="_blank"
        >
          CodeSandbox
        </a>
      </li>
      <li>
        <a
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
          href="mailto:kelby.gassman@gmail.com"
        >
          kelby.gassman@gmail.com
        </a>
      </li>
      <li>
        <a
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
          href="/Kelby%20Gassman%20Resume.pdf"
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
