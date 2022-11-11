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

  return (
    <nav
      // style={{ background: "transparent" }}
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
            className="mr-3  h-10 lg:h-8 sm:h-9"
            alt="Medflow Logo"
          />
        </Link>
        {/* <div className="flex lg:flex-[0.2] md:order-2">Hello</div> */}
        <div
          className="lg:flex-[0.5] hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
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
      </div>
    </nav>
  );
}
export default Header;
