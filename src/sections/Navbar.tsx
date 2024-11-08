import { useEffect, useState } from "react";
import NavItems from "../components/NavItems";
import { Typewriter } from "react-simple-typewriter";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            {showTypewriter && (
              <Typewriter
                words={["Software Engineer", "Frontend Developer"]}
                loop={Infinity}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            )}
          </a>
          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
