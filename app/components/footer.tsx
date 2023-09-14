const Footer = () => (
  <footer className="container max-w-full p-8 pl-16">
    <ul className="text-sm flex align-middle justify-start gap-x-4 font-helvetica">
      <li>© Kelby Gassman {new Date().getFullYear()}</li>
      <li>
        <a
          href="https://www.linkedin.com/in/kelby-gassman/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/u/Kelbster"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
        >
          CodeSandbox
        </a>
      </li>
      <li>
        <a
          href="mailto:kelby.gassman@gmail.com"
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
        >
          kelby.gassman@gmail.com
        </a>
      </li>
      <li>
        <a
          href="/Kelby%20Gassman%20Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm pb-3 border-b border-opacity-0 border-b-gray-900 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
        >
          Resume
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
