import type { GetStaticProps, NextPage } from "next";
import { useRef, useState, Fragment } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Home: NextPage<{}> = () => {

  return (
    <>
      <Layout>
        <Header />
        I am the Home Page
        <Footer />

      </Layout>
    </>
  );
};

export default Home;