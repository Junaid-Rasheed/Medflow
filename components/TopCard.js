import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ImageCard from "./ImageCard";
import { MdArrowForward } from "react-icons/md";
function TopCard() {
  const isSmallDevice = useMediaQuery({
    maxWidth: 470,
  });
  const Tablet = useMediaQuery({ minWidth: 471, maxWidth: 820 });
  const BigScreen = useMediaQuery({ minWidth: 821 });

  const [data, setData] = useState();

  async function getData() {
    const res = await fetch("http://localhost:1337/api/top-cards");
    const result = await res.json();
    setData(result.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="home" className="overflow-x-hidden ">
      <ImageCard
        className="flex flex-1 flex-col snap-x "
        src="/assets/Medflow Header Background.png"
      >
        <div
          style={{ position: "relative" }}
          className={
            isSmallDevice &&
            "h-3/5 absolute bottom-10 left-0 flex flex-col justify-center p-3   py-28"
          }
          class={
            Tablet
              ? "h-2/5  absolute mt-16  left-0 flex  flex-col justify-center lg:pl-28  xl:mb-16 mx-20 "
              : "h-2/5 2xl:pt-20 absolute mt-16  left-0 flex  flex-col justify-center lg:pl-28  xl:mb-16 ml-64"
          }
        >
          {isSmallDevice && (
            <p
              style={{ textAlignLast: "center", textAlign: "center" }}
              className="font-PoppinBold  font-bold md:w-1 text-3xl w  pt-3 text-white "
            >
              {data
                ? data.map((obj) => obj.attributes.text1)
                : "Build your future of telemedicine security with Medflow"}{" "}
            </p>
          )}
          {Tablet && (
            <p
              style={{ textAlignLast: "center" }}
              className="font-bold font-PoppinBold text-3xl    w-full  pt-3 text-white"
            >
              {data
                ? data.map((obj) => obj.attributes.text1)
                : "Build your future of telemedicine security with Medflow"}
            </p>
          )}

          {BigScreen && (
            <p
              style={{ textAlignLast: "center" }}
              className="font-bold 2xl:font-PoppinBold lg:text-4xl 2xl:text-6xl 2xl:ml-24  w-3/5 2xl:w-2/3 pt-3 text-white"
            >
              {data
                ? data.map((obj) => obj.attributes.text1)
                : "Build your future of telemedicine security with Medflow"}
            </p>
          )}

          <button
            style={{
              // width: isSmallDevice ? "65%" : "23%",
              width: (isSmallDevice && "65%") || Tablet ? "60%" : "23%",
              textAlign: "center",
              backgroundImage: "linear-gradient(#d62543, #b524bb)",
              // marginLeft: isSmallDevice ? "60px " : "420px",
            }}
            class={`2xl:mt-20  ${
              isSmallDevice && "ml-20"
            }  2xl:text-xl  2xl:tracking-wide 2xl:font-semibold 2xl:font-PoppinRegular text-xs text-center cursore-pointer mt-4  lg:ml-32 2xl:ml-96 text-white py-2 2xl:py-4 px-4 rounded`}
          >
            <Link href={"#contact"} className="flex flex-row">
              {data
                ? data.map((obj) => obj.attributes.buttonText)
                : " Contact us for early access"}
              <MdArrowForward className="mt-1 ml-3 2xl:mt-1 " />
            </Link>
          </button>
          {isSmallDevice ? (
            " "
          ) : (
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: isSmallDevice ? "3%" : "2%",
                top: isSmallDevice ? "93%" : "63%",
                right: "97%",
                // right: "33%",
              }}
              src="/ellipse/Ellipse 60.png"
            />
          )}
          {isSmallDevice ? (
            " "
          ) : (
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: isSmallDevice ? "3%" : "2%",
                top: isSmallDevice ? "50%" : "98%",
                left: "57%",
                // right: "33%",
              }}
              src="/ellipse/Ellipse 64.png"
            />
          )}

          {isSmallDevice ? (
            " "
          ) : (
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "3%",
                bottom: "-78%",
                right: "99%",
              }}
              src="/ellipse/Ellipse 58.png"
            />
          )}
        </div>
      </ImageCard>

      {isSmallDevice && (
        <iframe
          style={{
            position: "absolute",
            top: "420px",
            width: "80%",
            left: "36px",
            borderRadius: "6%",
          }}
          width="360"
          className="2xl:mt-48   2xl:ml-48 "
          height="200"
          src="https://www.youtube-nocookie.com/embed/jBZzEERWvFw?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
      {Tablet && (
        <iframe
          style={{
            position: "absolute",
            top: "420px",
            width: "60%",
            left: "17%",
            borderRadius: "6%",
          }}
          width="360"
          className="2xl:mt-48   2xl:ml-48 "
          height="200"
          src="https://www.youtube-nocookie.com/embed/jBZzEERWvFw?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}

      {!Tablet && !isSmallDevice && (
        <iframe
          style={{
            position: "absolute",
            top: "303px",
            width: "37%",
            left: "397px",
            borderRadius: "15px",
            border: "5px solid white",
          }}
          width="560"
          className="2xl:mt-72   2xl:ml-52 "
          height="350"
          src="https://www.youtube-nocookie.com/embed/jBZzEERWvFw?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}

export default TopCard;
