import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Store from "../components/Store";

import fondo1Verde from "../public/images/fondo-1-verde.svg";

export default function Home() {
  return (
    <main className="relative">
      {/* <img
        src={fondo1Verde.src}
        alt="figura de fondo"
        className="absolute -z-10 w-full"
      /> */}
      <Navbar />
      <Hero />
      <Store />
    </main>
  );
}
