import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ImageCard from "./ImageCard";

function Cybersecurity() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="overflow-x-hidden pt-14" style={{ position: "relative" }}>
      <ImageCard
        className="flex flex-1 flex-col snap-x "
        src="/assets/Medflow Mid Section Background.png"
      >
        <div
          style={{ position: "relative" }}
          className={
            isSmallDevice
              ? "h-3/5 absolute bottom-10 left-0 flex flex-col justify-end p-3  py-20"
              : "h-2/5 absolute mt-4 left-0 flex flex-col justify-center  xl:mb-16"
          }
        >
          <div className="w-full  lg:py-6 mt-6 lg:mt-0">
            <h2
              style={{ color: "#bb2b92" }}
              className="text-center text-lg font-medium title-font  tracking-widest"
            >
              Cybersecurity
            </h2>
            <Image
              width={100}
              height={100}
              style={{
                position: "absolute",
                right: "27%",
                width: "2%  ",
              }}
              src="/ellipse/Ellipse 64.png"
            />
            <h1
              //   style={{ color: "#222a4c" }}
              className={
                isSmallDevice
                  ? "text-center pt-6 text-4xl title-font text-white font-bold mb-1"
                  : "text-center text-4xl title-font text-white py-4 font-bold mb-1"
              }
            >
              Zero-Trust Data Architecture
            </h1>

            {isSmallDevice ? (
              <p
                style={{ textAlignLast: "center" }}
                className="text-center text-gray-400  "
              >
                We provide HIPAA compliant,zero-trust data security vault and
                tokenized encrypted data handoff
              </p>
            ) : (
              <p
                style={{ textAlignLast: "center" }}
                className="text-gray-400  pr-6 pb-10 leading-relaxed"
              >
                We provide HIPAA compliant,zero-trust data security vault and
                tokenized <br /> encrypted data handoff
              </p>
            )}
            <Image
              width={100}
              height={100}
              style={{
                position: "absolute",
                left: "20%",
                width: "1%",
              }}
              src="/ellipse/Ellipse 60.png"
            />
            <Image
              width={100}
              height={100}
              style={{
                position: "absolute",
                left: "42%",
                width: "1%",
                bottom: "2%",
              }}
              src="/ellipse/Ellipse 60.png"
            />
          </div>
        </div>
      </ImageCard>
      {isSmallDevice ? (
        <Image
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            top: "393px",
            width: "80%",
            left: "43px",
          }}
          src="/assets/Group 548.png"
        />
      ) : (
        <Image
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            top: "273px",
            width: "60%",
            left: "263px",
          }}
          src="/assets/Group 548.png"
        />
      )}
      <Image
        width={100}
        height={100}
        style={{
          position: "absolute",
          left: "18%",
          width: "3%",
          bottom: "22%",
        }}
        src="/ellipse/Ellipse 56.png"
      />
      <Image
        width={100}
        height={100}
        style={{
          position: "absolute",
          left: "27%",
          width: "1%",
          bottom: "11%",
        }}
        src="/ellipse/Ellipse 60.png"
      />
      <Image
        width={100}
        height={100}
        style={{
          position: "absolute",
          right: "34%",
          width: "1%",
          bottom: "15%",
        }}
        src="/ellipse/Ellipse 60.png"
      />
      <Image
        width={100}
        height={100}
        style={{
          position: "absolute",
          right: "20%",
          width: "2%",
          bottom: "2%",
        }}
        src="/ellipse/Ellipse 64.png"
      />
      <Image
        width={100}
        height={100}
        style={{
          position: "absolute",
          right: "15%",
          width: "3%",
          bottom: "33%",
        }}
        src="/ellipse/Ellipse 56.png"
      />
    </div>
  );
}

export default Cybersecurity;
