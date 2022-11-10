import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
function OurTeam() {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [data, setData] = useState();
  async function getData() {
    const res = await fetch("http://localhost:1337/api/teams?populate=*");
    const result = await res.json();
    setData(result.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      style={{ position: "relative" }}
      id="team"
      class="text-gray-600 body-font"
    >
      <div
        class={
          isSmallDevice
            ? "container px-5 w-full py-4 mx-auto"
            : "container px-24 py-10 mx-auto"
        }
      >
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
            width: "2%",
            right: "39%",
            top: "-4%",
          }}
          src="/ellipse/Ellipse 54.png"
        />
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
            width: "1%",
            left: "3%",
            top: "7%",
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
            right: "5%",
            top: "9%",
          }}
          src="/ellipse/Ellipse 54.png"
        />
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
            width: "1%",
            right: "19%",
            top: "14%",
          }}
          src="/ellipse/Ellipse 53.png"
        />
        <Image
          alt="image"
          width={100}
          height={100}
          style={{
            position: "absolute",
            width: "3%",
            left: "0%",
            top: "49%",
          }}
          src="/ellipse/Ellipse 65.png"
        />
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
            width: "1%",
            left: "10%",
            top: "54%",
          }}
          src="/ellipse/Ellipse 53.png"
        />
        <Image
          width={100}
          alt="image"
          height={100}
          style={{
            position: "absolute",
            width: "1%",
            right: "5%",
            top: "66%",
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
            left: "5%",
            top: "79%",
          }}
          src="/ellipse/Ellipse 54.png"
        />
        <Image
          alt="image"
          width={100}
          height={100}
          style={{
            position: "absolute",
            width: "2%",
            right: "25%",
            top: "84%",
          }}
          src="/ellipse/Ellipse 54.png"
        />
        <p
          style={{ color: "#222a4c" }}
          className="text-center  text-4xl title-font font-bold mb-1 "
        >
          Our Team
        </p>
        <p
          style={{
            color: "#848484",
            textAlignLast: "center",
          }}
          className="text-lg mb-8 w-3/4 text-center mx-auto"
        >
          We have brought industry leaders to merge artificial
          intelligence,digital security, and biometrics for indiviuals to
          self-authenticate, and secure data. We eliminate the chance of
          misidentification or fraud ensuring a secure provider-to-patient
          interaction.
        </p>
        <div class="font-Yaro flex flex-wrap -m-4 pt-14 mb-48">
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full "
                src="/Team Pics/carl.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-7 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[0]
                  : "       Carl Carnagey"}
              </h2>
              <p style={{ color: "#d7253f" }} class="mt-2  font-semibold	">
                {data
                  ? data.map((obj) => obj.attributes.designation)[0]
                  : " Chief Executive Officer"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/KawalArora.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[1]
                  : "        Kawal Arora"}
              </h2>
              <p style={{ color: "#d7253f" }} class="mt-2 font-semibold">
                {data
                  ? data.map((obj) => obj.attributes.designation)[1]
                  : "Chief Technology Officer"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/SunilArora.jpg"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[2]
                  : "   Sunil Arora"}
              </h2>
              <p style={{ color: "#d7253f" }} class="mt-2 font-semibold">
                {data
                  ? data.map((obj) => obj.attributes.designation)[2]
                  : "  Chief Financial Officer"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/Bryant2BWHeadshot2.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl  font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[3]
                  : "Bryant Thornton"}
              </h2>
              <p
                style={{ color: "#d7253f" }}
                class=" text-center mt-2 font-semibold"
              >
                {data
                  ? data.map((obj) => obj.attributes.designation)[3]
                  : "VP of Security & Compliance"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/KellyFenemore2.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[4]
                  : " Kelly Fenemore"}
              </h2>
              <p
                style={{ color: "#d7253f" }}
                class=" text-center mt-2 font-semibold"
              >
                {data
                  ? data.map((obj) => obj.attributes.designation)[4]
                  : "VP of Sales & Marketing"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/Daniel_email_sig_Rez_Increase.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[5]
                  : "Daniel Ball"}
              </h2>
              <p
                style={{ color: "#d7253f" }}
                class=" text-center mt-2 font-semibold"
              >
                {data
                  ? data.map((obj) => obj.attributes.designation)[5]
                  : "VP of Operations"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/Curtis_Strong.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[6]
                  : " Curtis Strong"}
              </h2>
              <p
                style={{ color: "#d7253f" }}
                class=" text-center mt-2 font-semibold"
              >
                {data
                  ? data.map((obj) => obj.attributes.designation)[6]
                  : "  Special Advisor US Government"}
              </p>
            </div>
          </div>
          <div class="text-center lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              style={{ display: "flex", justifyContent: "center" }}
              class="relative block m-0 rounded overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                alt="ecommerce"
                class="object-center rounded-full"
                src="/Team Pics/DamonFogal.png"
              />
            </a>
            <div>
              <h2
                style={{ color: "#222a4c" }}
                class=" title-font text-xl mt-2 font-bold"
              >
                {data
                  ? data.map((obj) => obj.attributes.name)[7]
                  : " Damon Fogal"}
              </h2>
              <p
                style={{ color: "#d7253f" }}
                class=" text-center mt-2 font-semibold"
              >
                {data
                  ? data.map((obj) => obj.attributes.designation)[7]
                  : " VP of Commercial Growth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
