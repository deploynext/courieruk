"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Article = {
  title: string;
  image: string;
  slug: string;
  date?: string;
  category: string;
  shortdescription: string;
  description: string;
};

interface ExclusiveProps {
  article: Article;
}

export default function Exclusive({ article }: ExclusiveProps) {
    const [showMore, setShowMore] = useState(false);
  return (
    <main className="min-h-screen bg-white  py-8 max-w-7xl px-2">
     <Link href={`/${article.category}`} className="!no-underline my-2 uppercase font-sans  !text-blue-700 hover:!text-gray-900 " >{article.category}</Link >

      <Link href={`/${article.category}/${article.slug}`} className="ArticleCard-title  " >
        <h1 style={{fontSize:"30px",fontWeight:"900"}} className="mt-3">
          {article.title}
        </h1>
      </Link>

      <section className=" md:flex md:flex-row mt-4 ">

        <div className=" w-full md:w-3/4">
          <Image
            src={article.image}
            alt={article.title}
            width={650}
            height={390}
            className=" object-cover h-[210px] md:h-[390px] w-[350px] md:w-[650px] "
            priority
          />
        </div>


        <div className="space-y-4 w-full md:w-1/4 ">

          {article.date && (
            <p className="text-sm text-gray-800 border-b border-gray-300 pb-2">{article.date}</p>
          )}

          
          <p
            className={`text-base text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
              showMore
                ? ""
                : "line-clamp-2"
            }`}
          >
            {article.shortdescription}
          </p>
          
          
          
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-gray-700 hover:underline mt-1"
            >
              {showMore ? "Read less" : "Read more"}
            </button>

         
          <div className="mt-6 border-t pt-4 space-y-2 border-gray-300">
            <p className="font-semibold text-sm text-gray-800">Related:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ Inside fallout of explosive Dundee Raac meeting</li>
              <li>→ Dundee couple lose £45k as they sell family home</li>
              <li>→ Perthshire grandad reaches 150th blood donation</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
