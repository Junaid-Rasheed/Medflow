import Head from "next/head";
import AboutUS from "../components/AboutUS";
import Cybersecurity from "../components/Cybersecurity";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KeyFeatures from "../components/KeyFeatures";
import OurTeam from "../components/OurTeam";
import TopCard from "../components/TopCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medflow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <TopCard />
      <AboutUS />
      <Cybersecurity />
      <KeyFeatures />
      <OurTeam />
      <Footer />
    </div>
  );
}
