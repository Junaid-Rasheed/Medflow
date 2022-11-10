import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ImageCard from "./ImageCard";
function TopCard() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
    <div
      id="home"
      className="overflow-x-hidden "
      style={{ position: "relative" }}
    >
      <ImageCard
        className="flex flex-1 flex-col snap-x "
        src="/assets/Medflow Header Background.png"
      >
        <div
          className={
            isSmallDevice
              ? "h-3/5 absolute bottom-10 left-0 flex flex-col justify-end p-3 mb-10 py-28"
              : "h-2/5 absolute mt-16  left-0 flex flex-col justify-center lg:pl-28  xl:mb-16 ml-64"
          }
        >
          {isSmallDevice ? (
            <p className=" w-full font-bold md:w-1 text-xl pt-3 text-white ">
              {data
                ? data.map((obj) => obj.attributes.text1)
                : "Build your future of telemedicine security with Medflow"}{" "}
            </p>
          ) : (
            <p
              style={{ textAlignLast: "center" }}
              className="font-bold lg:text-4xl  w-3/5  pt-3 text-white"
            >
              {data
                ? data.map((obj) => obj.attributes.text1)
                : "Build your future of telemedicine security with Medflow"}
            </p>
          )}
          <button
            style={{
              width: isSmallDevice ? "75%" : "25%",
              backgroundImage: "linear-gradient(#d62543, #b524bb)",
            }}
            class="flex flex-row hover:bg-blue-700 mt-4 lg:ml-32 text-white font-bold py-2 px-4 rounded"
          >
            {data
              ? data.map((obj) => obj.attributes.buttonText)
              : " Contact us for early access"}
          </button>
          <Image
            width={100}
            alt="image"
            height={100}
            style={{
              position: "absolute",
              width: "2%",
              top: "73%",
              right: "97%",
              // right: "33%",
            }}
            src="/ellipse/Ellipse 60.png"
          />
          <Image
            width={100}
            alt="image"
            height={100}
            style={{
              position: "absolute",
              width: "2%",
              top: "60%",
              left: "57%",
              // right: "33%",
            }}
            src="/ellipse/Ellipse 64.png"
          />
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
        </div>
      </ImageCard>

      {isSmallDevice ? (
        <Image
          width={900}
          alt="image"
          height={900}
          style={{
            position: "absolute",
            top: "120px",
            width: "80%",
            left: "36px",
            borderRadius: "6%",
            border: "6px solid white",
          }}
          src="/assets/Medflow UI (1) 1.png"
        />
      ) : (
        <Image
          width={1000}
          alt="image"
          height={1000}
          style={{
            position: "absolute",
            top: "253px",
            width: "37%",
            left: "373px",
          }}
          src="/assets/topcard.png"
        />
      )}
    </div>
  );
}

export default TopCard;
