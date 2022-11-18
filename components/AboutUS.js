import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function AboutUS() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [data, setData] = useState();
  async function getData() {
    const res = await fetch(
      "http://localhost:1337/api/about-us-pages?populate=*"
    );
    const result = await res.json();
    setData(result.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="about">
      <section className="text-gray-600 body-font overflow-hidden">
        <Image
          alt="image"
          width={100}
          height={100}
          style={{
            position: "absolute",
          }}
          src="/ellipse/Ellipse 37.png"
        />
        <div
          className={
            isSmallDevice
              ? "container px-5  py-20 mx-auto"
              : "container px-5 py-24 2xl:py-10 mx-auto"
          }
        >
          <p
            style={{ color: "#222a4c" }}
            className="text-center 2xl:font-PoppinBold  2xl:text-6xl 2xl:mt-24 pb-20 text-4xl title-font font-black mb-1"
          >
            What We Do
          </p>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {isSmallDevice ? (
              ""
            ) : (
              <Image
                alt="image"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center"
                src="/assets/rounds/Patient intake step 2 (4).png"
                width={500}
                height={400}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-20  lg:py-6 mt-6 lg:mt-0">
              {isSmallDevice ? (
                ""
              ) : (
                <Image
                  alt="image"
                  width={100}
                  height={100}
                  style={{
                    position: "absolute",
                    width: isSmallDevice ? "3%" : "1%",
                    bottom: isSmallDevice ? "-13%" : "-33%",
                    left: "14%",
                  }}
                  src="/ellipse/Ellipse 53.png"
                />
              )}

              <h2
                style={{ color: "#bb2b92" }}
                className="text-sm  2xl:text-xl font-medium title-font 2xl:font-PoppinRegular"
              >
                {" "}
                {data ? data.map((obj) => obj.attributes.tag)[0] : "  Security"}
              </h2>
              <h1
                style={{ color: "#2e3657" }}
                className={
                  isSmallDevice
                    ? "text-3xl title-font font-bold mt-5 mb-1"
                    : "text-4xl  2xl:font-PoppinBold tracking-wide  2xl:my-3 title-font font-black mb-1"
                }
              >
                {data
                  ? data.map((obj) => obj.attributes.title)[0]
                  : "  Future of Telemedicine Security"}
              </h1>

              <p className=" text-gray-500 2xl:font-PoppinLight 2xl:text-md  tracking-wide  leading-relaxed pt-6">
                {data
                  ? data.map((obj) => obj.attributes.description)[0]
                  : "Medflow is an AI-powered telemedicine solution that combines best-in-class facial recognition biometrics to accurately verify patient identity using next generation zero-trust security architecture."}
              </p>
              <Image
                alt="image"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  width: "3%",
                  left: "12%",
                  bottom: isSmallDevice ? " -90%" : "-85%",
                }}
                src="/ellipse/Ellipse 56-1.png"
              />
              {/* <Image
                alt="image"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  width: "1%",
                  left: "40%",
                  bottom: "-84%",
                }}
                src="/ellipse/Ellipse 53.png"
              /> */}
            </div>
            {isSmallDevice ? (
              <Image
                alt="image"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center "
                src="/assets/rounds/Patient intake step 2 (4).png"
                width={500}
                height={400}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div
          className={
            isSmallDevice
              ? "container px-5 py-20 mx-auto"
              : "container px-5 py-10 mx-auto 2xl:py-32"
          }
        >
          <div
            style={{ position: "relative" }}
            className="lg:w-4/5 mx-auto flex flex-wrap"
          >
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6  lg:mt-0">
              <Image
                alt="image"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  width: "1%",

                  right: "48%",
                }}
                src="/ellipse/Ellipse 53.png"
              />
              <Image
                alt="image"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  width: "2%",
                  top: "-7%",
                  right: "0%",
                }}
                src="/ellipse/Ellipse 64.png"
              />
              <h2
                style={{ color: "#bb2b92" }}
                className="text-sm 2xl:text-xl  font-medium title-font  2xl:font-PoppinRegular"
              >
                {data
                  ? data.map((obj) => obj.attributes.tag)[1]
                  : "  Computer Vision"}
              </h2>
              <h1
                style={{ color: "#222a4c" }}
                className={
                  isSmallDevice
                    ? "text-3xl title-font font-bold mt-5 mb-1"
                    : "text-4xl 2xl:font-PoppinBold 2xl:w-5/6 tracking-wide 2xl:pt-2 title-font  mb-1 "
                }
              >
                {data
                  ? data.map((obj) => obj.attributes.title)[1]
                  : "  Computer Vision for the  Next Generation of Medical Triage"}
              </h1>
              {isSmallDevice ? (
                <p className=" text-gray-400 pt-6 pr-6 leading-relaxed">
                  {data
                    ? data.map((obj) => obj.attributes.description)[1]
                    : " It boasts a suite of Computer vision-based features that allow providers to review and legally sign medical and legal documentation live with the patient.Issue prescriptions and capture patient vitals like heart rate,blood pressure, breathing and stress indicators all without special hardware or equipment. Just the use of the patient's computer or mobile phone camera."}
                </p>
              ) : (
                <p className="text-gray-500 2xl:w-5/6 2xl:PoppinLight  pt-6 pr-10 tracking-wide leading-snug 2xl:text-md">
                  It boasts a suite of Computer vision-based features that allow
                  providers to review and legally sign medical and legal
                  documentation live with the patient. Issue prescriptions and
                  capture patient vitals like heart rate, blood pressure,
                  breathing and stress indicators all without special hardware
                  or equipment. Just the use of the patient&apos;s computer or
                  mobile phone camera.
                </p>
              )}
            </div>

            <Image
              alt="image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center"
              src="/assets/rounds/ON call (4).png"
              width={500}
              height={500}
            />
            {isSmallDevice ? (
              ""
            ) : (
              <Image
                alt="image"
                width={140}
                height={140}
                src="/assets/Group 238143.png"
                style={{
                  position: "absolute",
                  left: "45%",
                  bottom: "-5%",
                }}
              />
            )}
            <Image
              alt="image"
              width={100}
              height={100}
              style={{
                position: "absolute",
                width: "3%",
                left: "44%",
                bottom: "-10%",
              }}
              src="/ellipse/Ellipse 76.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUS;
