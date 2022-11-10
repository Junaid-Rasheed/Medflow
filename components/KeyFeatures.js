import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function KeyFeatures() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [data, setData] = useState();
  async function getData() {
    const res = await fetch("http://localhost:1337/api/key-features");
    const result = await res.json();
    setData(result.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="keyfeature">
      <section className="text-gray-600 body-font overflow-hidden">
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
          }}
          src="/ellipse/Ellipse 37.png"
        />
        <div
          style={{ position: "relative" }}
          className={
            isSmallDevice
              ? "container px-5 py-4 mx-auto"
              : "container px-5 py-24 mx-auto"
          }
        >
          <p
            style={{ color: "#222a4c" }}
            className="text-center pb-10 text-4xl title-font font-bold mb-1"
          >
            Key Features
          </p>
          <Image
            width={100}
            height={100}
            alt="image"
            style={{
              position: "absolute",
              width: "2%",
              left: "48%",
              top: "24%",
            }}
            src="/ellipse/Ellipse 64.png"
          />
          <Image
            width={100}
            alt="image"
            height={100}
            style={{
              position: "absolute",
              width: "1%",
              left: "11%",
              top: "26%",
            }}
            src="/ellipse/Ellipse 53.png"
          />
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {isSmallDevice ? (
              ""
            ) : (
              <Image
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-3xl"
                src="/assets/maxresdefault 1.png"
                alt="image"
                width={500}
                height={400}
              />
            )}
            <Image
              alt="image"
              width={100}
              height={100}
              style={{
                position: "absolute",
                width: "3%",
                left: "10%",
                bottom: "13%",
              }}
              src="/ellipse/Ellipse 56.png"
            />
            <Image
              alt="image"
              width={100}
              height={100}
              style={{
                position: "absolute",
                width: "1%",
                left: "40%",
                bottom: "13%",
              }}
              src="/ellipse/Ellipse 53.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2
                style={{ color: "#bb2b92" }}
                className="text-sm font-medium title-font tracking-widest"
              >
                {data ? data.map((obj) => obj.attributes.tag)[0] : "  Identity"}
              </h2>
              <h1
                style={{ color: "#222a4c" }}
                className={
                  isSmallDevice
                    ? "text-3xl title-font font-bold mb-1"
                    : "text-4xl title-font font-bold mb-1"
                }
              >
                {data
                  ? data.map((obj) => obj.attributes.title)[0]
                  : " Secure Biometric Authentication"}
              </h1>

              <p className="leading-snug text-gray-500 leading-relaxed pt-6">
                {data
                  ? data.map((obj) => obj.attributes.description)[0]
                  : "  Patient Identity is captured at telemedicine video connect, and then passively monitored for key events. This verifies that the care provider was talking to the same patient throughout the session, including when prescribing medication."}
              </p>
            </div>
            {isSmallDevice ? (
              <Image
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-3xl"
                src="/assets/maxresdefault 1.png"
                alt="image"
                width={500}
                height={400}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        {isSmallDevice ? (
          ""
        ) : (
          <section class="text-gray-600 body-font">
            <div class="container px-24 py-10 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    style={{ display: "flex", justifyContent: "center" }}
                    class="relative block m-0 rounded overflow-hidden"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="ecommerce"
                      class="object-center"
                      src="/assets/round-1.png"
                    />
                  </a>
                  <div>
                    <h2
                      style={{ color: "#222a4c" }}
                      class=" title-font text-xl mt-2 font-bold"
                    >
                      Full Identity Management
                    </h2>
                    <p style={{ color: "#848484" }} class="mt-4 text-sm">
                      Full identity management suirte with innovative chain of
                      custody model.
                    </p>
                  </div>
                </div>
                <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    style={{ display: "flex", justifyContent: "center" }}
                    class="relative block m-0 rounded overflow-hidden"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="ecommerce"
                      class="object-center"
                      src="/assets/round-2.png"
                    />
                  </a>
                  <div>
                    <h2
                      style={{ color: "#222a4c" }}
                      class=" title-font text-xl mt-2 font-bold"
                    >
                      Match Speed
                    </h2>
                    <p style={{ color: "#848484" }} class="mt-4 text-sm">
                      100ms face match speed.
                    </p>
                  </div>
                </div>
                <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    style={{ display: "flex", justifyContent: "center" }}
                    class="relative block m-0 rounded overflow-hidden"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="ecommerce"
                      class="object-center"
                      src="/assets/round-3.png"
                    />
                  </a>
                  <div>
                    <h2
                      style={{ color: "#222a4c" }}
                      class=" title-font text-xl mt-2 font-bold"
                    >
                      Dark Complexion Accuracy
                    </h2>
                    <p style={{ color: "#848484" }} class="mt-4 text-sm">
                      99.80% faces of color and dark complexion accuracy.
                    </p>
                  </div>
                </div>
                <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    style={{ display: "flex", justifyContent: "center" }}
                    class="relative block m-0 rounded overflow-hidden"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="ecommerce"
                      class="object-center"
                      src="/assets/round-4.png"
                    />
                  </a>
                  <div>
                    <h2
                      style={{ color: "#222a4c" }}
                      class=" title-font text-xl mt-2 font-bold"
                    >
                      Anti-spoofing
                    </h2>
                    <p
                      style={{ color: "#848484" }}
                      class=" text-center mt-4 text-sm"
                    >
                      Face match liveness for anti-spoofing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div
          className={
            isSmallDevice
              ? "container px-5  mx-auto"
              : "container px-5 py-10 mx-auto"
          }
        >
          <div
            style={{ position: "relative" }}
            className="lg:w-4/5 mx-auto flex flex-wrap"
          >
            {isSmallDevice ? (
              " "
            ) : (
              <Image
                style={{ borderRadius: "18%" }}
                alt="image"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center "
                src="/assets/ON call (1) 1.png"
                width={500}
                height={400}
              />
            )}
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "1%",
                left: "1%",
                top: "-3%",
              }}
              src="/ellipse/Ellipse 53.png"
            />
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "2%",
                left: "48%",
                top: "-6%",
              }}
              src="/ellipse/Ellipse 64.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2
                style={{ color: "#bb2b92" }}
                className="text-sm font-medium title-font tracking-widest"
              >
                {data
                  ? data.map((obj) => obj.attributes.tag)[1]
                  : "  Patient Triage"}
              </h2>
              <h1
                style={{ color: "#222a4c" }}
                className={
                  isSmallDevice
                    ? "text-3xl title-font font-bold mb-1"
                    : "text-4xl title-font font-bold mb-1"
                }
              >
                {" "}
                {data
                  ? data.map((obj) => obj.attributes.title)[1]
                  : "  Patient Vitals Captured using Computer Vision"}
              </h1>

              <p className="leading-snug text-gray-500 leading-relaxed pt-6">
                {data
                  ? data.map((obj) => obj.attributes.description)[1]
                  : "  We are able to capture patient vitals like blood pressure, breathing, heart rate, and stress indicators using the patient's computer or phone camera with highly accurate results.All without having to connect to any hardware devices or monitoring system."}
              </p>
            </div>
            {isSmallDevice ? (
              <Image
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-3xl"
                alt="image"
                src="/assets/ON call (1) 1.png"
                width={500}
                height={400}
              />
            ) : (
              ""
            )}
            <Image
              alt="image"
              width={100}
              height={100}
              style={{
                position: "absolute",
                width: "3%",
                left: "-2%",
                bottom: "-3%",
              }}
              src="/ellipse/Ellipse 58.png"
            />
            <Image
              width={100}
              height={100}
              alt="image"
              style={{
                position: "absolute",
                width: "1%",
                left: "38%",
                bottom: "-2%",
              }}
              src="/ellipse/Ellipse 55.png"
            />
          </div>
        </div>

        <div
          className={
            isSmallDevice
              ? "container px-5 pb-20 mx-auto"
              : "container px-5 py-20 mx-auto"
          }
        >
          <div
            style={{ position: "relative" }}
            className="lg:w-4/5 mx-auto flex flex-wrap"
          >
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2
                style={{ color: "#bb2b92" }}
                className="text-sm font-medium title-font  tracking-widest"
              >
                {data
                  ? data.map((obj) => obj.attributes.tag)[2]
                  : "   Encrypted Record Keeping"}
              </h2>
              <h1
                style={{ color: "#222a4c" }}
                className={
                  isSmallDevice
                    ? "text-3xl title-font font-bold mb-1"
                    : "text-4xl title-font font-bold mb-1"
                }
              >
                {data
                  ? data.map((obj) => obj.attributes.title)[2]
                  : "    Robust Chain of Custody Solution"}
              </h1>

              <p className="leading-snug text-gray-500 pt-6 pr-6 leading-relaxed">
                {data
                  ? data.map((obj) => obj.attributes.description)[2]
                  : " Our Innovative approach to chain of custody allows for contracts, releases, waivers, and other legal and medical forms to be signed and looked over in real time using facial recognition,voice biometrics and facial recognition liveness verification. This record is cryptographically appended to the digital signature document or access credential chain for entry to a secure site or portal."}
              </p>
            </div>
            <Image
              style={{ borderRadius: "23%" }}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center "
              alt="image"
              src="/assets/Patient intake step 2 (1) 1.png"
              width={500}
              height={500}
            />
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "2%",
                right: "-2%",
                top: "-1%",
              }}
              src="/ellipse/Ellipse 64.png"
            />
            <Image
              alt="image"
              width={100}
              height={100}
              style={{
                position: "absolute",
                width: "1%",
                right: "49%",
                top: "3%",
              }}
              src="/ellipse/Ellipse 55.png"
            />
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "3%",
                right: "-2%",
                bottom: "3%",
              }}
              src="/ellipse/Ellipse 58.png"
            />
            <Image
              width={100}
              alt="image"
              height={100}
              style={{
                position: "absolute",
                width: "1%",
                right: "17%",
                bottom: "6%",
              }}
              src="/ellipse/Ellipse 55.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default KeyFeatures;
