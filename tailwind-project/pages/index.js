import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Categories from "./Parts/categories/categories";
import Business from "./Parts/Bussiness/business";
import Social from "./Parts/Socials/social";
import Layout from "./Layout/Layout";
export default function Home() {
  return (
    <>
      <Business />
      <Social />

     
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout flex="flex flex-wrap lg:flex-nowrap">{page}</Layout>;
};
