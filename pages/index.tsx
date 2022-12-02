import type { GetStaticProps, NextPage } from "next";
import { useRef, useState, Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Home: NextPage<{}> = () => {

  return (
    <>
      <Layout>
        <section className="bg-secondary-tint p-36 rounded-3xl mx-24 my-12">
          <div className="flex justify-center items-center flex-col gap-4">
            <h2 className="text-3xl ">Le Sida ne se voit pas</h2>
            <h1 className="text-3xl font-bold">Il se DEPISTE !</h1>
            <Link
              passHref
            href={"/game"}>
            </Link>
            <button className="btn btn-primary w-52">
              Jouer Maintenant !
            </button>
            <p className="text-xl w-6/12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum dolores consectetur omnis eum id, animi perspiciatis consequatur, asperiores, sequi cum doloribus amet fuga ex sed repellendus dolorem voluptatem? Molestias.</p>
            <Image
              className="pt-24"
              alt={"user-avatar"}
              src={"/images/logo.png"}
              width={200}
              height={200}></Image>
          </div>

        </section>
        <section className="relative text-white bg-warning">
          {/* <div className="absolute top-0 w-full h-full">
            <div className="relative w-full min-h-full filter brightness-75">
              <Image
                layout="fill"
                objectFit="cover"
                alt="bg"
                src={"/images/logo.png"}></Image>
            </div>
          </div> */}
          <div className="relative">
            <div className="container flex flex-col items-center px-6 sm:mx-auto lg:px-10">
              <h1 className="p-4 text-4xl lg:text-6xl leading-none text-center text-white font-ruqaa">
                clients-review
              </h1>
            </div>
            <div className="container flex snap-x snap-mandatory overflow-x-auto lg:overflow-x-hidden lg:snap-none items-center justify-center mx-auto lg:flex-row lg:justify-evenly">
              <div
                className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg min-w-full lg:min-w-0 snap-center scale-100 md:scale-90`}>
                <div className="flex flex-col gap-20 p-8 bg-secondary">
                  <p className="text-xl leading-tight ">home:test-2</p>
                  <div className="flex items-center gap-3">
                    <Image
                      layout="fixed"
                      width={30}
                      height={30}
                      src="/images/logo.png"
                      alt="person"
                    />
                    <p className="text-sm uppercase" dir="ltr">
                      Zahid Ishaq
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg min-w-full lg:min-w-0 snap-center `}>
                <div className="flex flex-col gap-20 p-8 bg-secondary">
                  <p className="text-xl leading-tight ">home:test-3</p>
                  <div className="flex items-center gap-3">
                    <Image
                      layout="fixed"
                      width={30}
                      height={30}
                      src="/images/logo.png"
                      alt="person"
                    />
                    <p className="text-sm uppercase" dir="ltr">
                      Zahid Ishaq
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg min-w-full lg:min-w-0 snap-center scale-100 md:scale-90`}>
                <div className="flex flex-col gap-20 p-8 bg-secondary">
                  <p className="text-xl leading-tight "></p>
                  <div className="flex items-center gap-3">
                    <Image
                      layout="fixed"
                      width={30}
                      height={30}
                      src="/images/logo.png"
                      alt="person"
                    />
                    <p className="text-sm uppercase" dir="ltr">
                      Zahid Ishaq
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default Home;
