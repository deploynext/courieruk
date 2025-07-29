"use client";

import Link from "next/link";
import Image from "next/image";

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
  return (
    <main className="min-h-screen bg-white px-4 py-8 max-w-7xl mx-auto">
      {/* Headline */}
      <Link href={`/${article.category}/${article.slug}`} className="ArticleCard-title fw-bolder">
        <h1 >
          {article.title}
        </h1>
      </Link>

      {/* Main Section */}
      <section className="gap-8 md:flex md:flex-row">
        {/* Image */}
        <div className=" w-full md:w-3/4">
          <Image
            src={article.image}
            alt={article.title}
            width={700}
            height={500}
            className=" object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-4 w-full md:w-1/4">
          {/* Date */}
          {article.date && (
            <p className="text-sm text-gray-500">{article.date}</p>
          )}

          {/* Short Description */}
          <p className="text-base text-gray-700">{article.shortdescription}</p>

          {/* Full Description */}
          <details className="mt-4">
            <summary className="text-sm font-medium text-gray-600 cursor-pointer hover:underline">
              Read full article
            </summary>
            <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">
              {article.description}
            </p>
          </details>

          {/* Related Links (mocked as static) */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <p className="font-semibold text-sm text-gray-800">Related:</p>
            <ul className="text-sm text-blue-800 space-y-1">
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
