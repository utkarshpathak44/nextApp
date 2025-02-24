const Footer = () => {
  return (
    <footer className="w-full bg-black text-stone-400 py-5 px-60">
      <div className="max-w-7xl ">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* <div className="text-lg font-semibold text-stone-200"></div> */}

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-stone-100">
              Home
            </a>
            <a href="#" className="hover:text-stone-100">
              About
            </a>
            <a href="#" className="hover:text-stone-100">
              Services
            </a>
            <a href="#" className="hover:text-stone-100">
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-stone-100">
              🐦
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-stone-100">
              📘
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-stone-100">
              📷
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
