import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const notify = () => toast("Message Sent!");
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { name, email, message } = values;

  return (
    <div id="contact" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "-140px",
          background: "#f9eaf3",
          width: "65%",
          height: "77%",
          left: "17%",
          borderRadius: "7px",
          border: "5px solid white",
        }}
      >
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
            <div
              class={isSmallDevice ? "lg:w-1/2 px-6 " : "lg:w-1/2 px-6 py-16"}
            >
              <h2
                style={{ color: "#bb2b92" }}
                class="title-font text-end pr-10 font-semibold  tracking-wide text-lg"
              >
                medflow
              </h2>
              {isSmallDevice ? (
                " "
              ) : (
                <p
                  style={{ color: "#222a4c" }}
                  class="text-center mt-2  text-4xl title-font font-bold"
                >
                  Stay in the know!
                </p>
              )}
              {isSmallDevice ? (
                " "
              ) : (
                <p className="text-center mt-5">
                  Want to stay up to date with the latest <br /> updates?
                  Subscribe to our newsletter!
                </p>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              class="lg:w-1/2 md:w-1/2   md:ml-auto   md:mt-0"
            >
              <div class="relative mb-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  value={name}
                  onChange={handleChange}
                  class="border-none	w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={handleChange}
                  class="border-none	w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  value={message}
                  onChange={handleChange}
                  class="border-none	w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                onClick={notify}
                style={{
                  backgroundImage: "linear-gradient(#d62543, #b524bb)",
                  borderRadius: "6px",
                }}
                class={
                  isSmallDevice
                    ? "text-white w-full  border-0 py-2 px-6 focus:outline-none rounded text-lg"
                    : "text-white   border-0 py-2 px-6 focus:outline-none rounded text-lg"
                }
              >
                Subscribe
              </button>
              <ToastContainer />
            </form>
          </div>
        </section>
      </div>

      <footer
        style={{
          height: "70vh",
          backgroundImage: "linear-gradient( #552788, #1e1e2d)",
        }}
        class="text-gray-600 pt-32 body-font"
      >
        {isSmallDevice ? (
          " "
        ) : (
          <div class="container px-48 my-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <Image width={170} height={170} src="/assets/logo.png" />
              </a>
              <p class="my-8 text-base text-white">
                30 N Gloud St Ste R <br /> Sheridan, WY 82801
              </p>

              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2   justify-center sm:justify-start">
                <a class="text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/3 md:w-1/2 w-full px-4 pt-6">
                <nav class="list-none ">
                  <li className="py-1">
                    <a class="text-white hover:text-[#d7253f] cursor-pointer">
                      Our Services
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#about"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#keyfeature"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                    >
                      Key Feature
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#team"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#contact"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                    >
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/3 md:w-1/2 w-full px-4 pt-6">
                <nav class="list-none">
                  <li className="py-1">
                    <a
                      href="#about"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                    >
                      About
                    </a>
                  </li>
                  <li className="py-1">
                    <a class="text-white hover:text-[#d7253f] cursor-pointer">
                      FAQ
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/PRIVACY POLICY.pdf"
                      class="text-white hover:text-[#d7253f] cursor-pointer"
                      target={"_blank"}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="py-1">
                    <a class="text-white hover:text-[#d7253f] cursor-pointer">
                      T&C
                    </a>
                  </li>
                  <li className="py-1">
                    <a class="text-white hover:text-[#d7253f] cursor-pointer">
                      NDA Special
                    </a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/3 md:w-1/2 w-full px-4 pt-6">
                <nav class="list-none ">
                  <li className="py-1">
                    <a class="text-white hover:text-[#d7253f] cursor-pointer">
                      Newsletter
                    </a>
                  </li>
                  <li className="py-4">
                    <a class="text-white  hover:text-[#d7253f] cursor-pointer">
                      Sign up to our newsletter
                    </a>
                  </li>
                  <li className="py-1">
                    <a class=" flex flex-row text-white hover:text-[#d7253f] cursor-pointer">
                      <input
                        placeholder="hq@medflow.ai"
                        style={{
                          border: "hidden",
                          backgroundColor: "transparent",
                          borderBottom: "2px solid white",
                          height: "35px",
                        }}
                      />
                      <img
                        style={{ filter: "opacity(0.5)" }}
                        src="/ellipse/Ellipse 59.png"
                      />
                      {/* <AiOutlineArrowRight
                        style={{ color: "white", backgroundColor: "white" }}
                      /> */}
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        )}
        {isSmallDevice ? (
          <>
            <div className="text-white text-center text-xl py-16 font-semibold pt-32">
              30N Gould St Ste R <br /> Sheridan,WY 82801
            </div>
            <hr />
            <p className="text-center text-xl text-white pt-4">
              Medflow,Inc. All Rights Reserved.
            </p>
          </>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
}

export default Footer;