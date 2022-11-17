import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#271a3e") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: isSmallDevice ? "" : navColor,
        height: isSmallDevice ? "" : navSize,
        transition: isSmallDevice ? "" : "all 1s",
        background: isSmallDevice ? "transparent" : "",
      }}
      className="  border-none	 bg-transparent bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex lg:flex-[0.2] items-center">
          <Image
            width={150}
            height={270}
            quality={100}
            src="/assets/logo.png"
            className="mr-3  h-10 2xl:h-16 2xl:w-60 sm:h-9"
            alt="Medflow Logo"
          />
        </Link>
        {isSmallDevice ? (
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li>
                    <Link
                      href="#home"
                      className=" block py-2 pr-4 pl-3  rounded font-normal text-base 2xl:text-lg md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className=" block py-2 pr-4 pl-3 rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                      aria-current="page"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#keyfeature"
                      className=" block py-2 pr-4 pl-3  rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                    >
                      Key Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#team"
                      className=" block py-2 pr-4 pl-3  rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className=" block py-2 pr-4 pl-3  rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        ) : (
          <div
            className="relative lg:flex-[0.5] hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              style={{ background: "transparent" }}
              className=" flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <Link
                  href="#home"
                  className=" block py-2 pr-4 pl-3 text-white rounded font-normal text-base 2xl:text-lg md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className=" block py-2 pr-4 pl-3 text-white rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#keyfeature"
                  className=" block py-2 pr-4 pl-3 text-white rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                >
                  Key Features
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className=" block py-2 pr-4 pl-3 text-white rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className=" block py-2 pr-4 pl-3 text-white rounded font-normal 2xl:text-lg text-base md:bg-transparent md:text-white md:p-0 dark:text-white hover:text-red-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Header;
