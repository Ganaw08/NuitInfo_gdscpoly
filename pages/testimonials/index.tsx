import type { GetStaticProps, NextPage } from "next";
import { useRef, useState, Fragment } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Testimonials: NextPage<{}> = () => {

    return (
        <>
            <Layout>
                <div className="container h-96">
                    I am the testimonials Page
                </div>
            </Layout>
        </>
    );
};

export default Testimonials;
