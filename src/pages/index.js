import Image from "next/image";
import { Inter } from "next/font/google";
import reviewData from "../data/review_data.json";
import guideData from "../data/sc_data.json";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ContentCard from "@/components/ContentCard";
import Search from "@/components/Search";
const inter = Inter({ subsets: ["latin"] });
import siteData from "@/data/site_data.json";
import Link from "next/link";
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react';
import { AppContext } from '../pages/_app';
const Index = () => {
  const posts = reviewData?.posts;
  const guides = guideData?.posts;

  const { siteDesc, siteName }  = useContext(AppContext);
  // const siteName = siteData?.name;
  const siteDescription = siteData?.description;

  const router = useRouter()
  const { setTheme } = useTheme()

  useEffect(() => {
    if (router.query.theme) {
      setTheme(router.query.theme)
    }
  }, [router.query.theme])
  return (
    <Layout
      pageTitle={siteName + " " + siteDesc}
      pageDescription={siteDesc}
    >

      <div className={" bg-base-100"}>

        <div className="hero pt-3 ">
          <div className="hero-content text-center text-base-content">
            <div className="max-w-md ">
              <h1 className="text-5xl font-extrabold"> {siteName}</h1>
              <p className="py-6 text-lg">{siteDesc}</p>
              <div className=" grid gap-4">
                <Link className="btn btn-secondary "href="/guides">
              Guides
                </Link>
                <Link className="btn btn-primary "href="/reviews">Reviews</Link>
              </div>
            </div>
          </div>
        </div>

        <ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {guides?.slice(0,10).map((p) => (
              <ContentCard key={p.id} content={p} />
          ))}
        </ul>
        <ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {posts?.slice(0,10).map((p) => (
            <ContentCard key={p.id} content={p} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default Index;
