"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  author?: string;
  date?: string;
};

interface TruncateDesProps {
  article: Article;
  isFeatured?: boolean;
}

export default function TruncateDes({ article, isFeatured = false }: TruncateDesProps) {
  const [showFull, setShowFull] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  // Set your desired collapsed card height (in px)
  const maxArticleHeight = isFeatured ? 420 : 220;

  useEffect(() => {
    const el = articleRef.current;
    if (el) {
      // Need to show full temporarily to measure the true height
      const prevOverflow = el.style.overflow;
      const prevMaxHeight = el.style.maxHeight;
      el.style.maxHeight = "none";
      el.style.overflow = "visible";

      // Wait for browser to actually lay it out
      requestAnimationFrame(() => {
        const actualHeight = el.offsetHeight;
        el.style.maxHeight = prevMaxHeight;
        el.style.overflow = prevOverflow;
        setIsTruncated(actualHeight > maxArticleHeight + 1); 
      });
    }
  }, [article, isFeatured, maxArticleHeight, showFull]);

  return (
    <div>
      <article
        ref={articleRef}
        className={`bg-white p-2 block relative ${isFeatured ? "lg:col-span-2" : ""} mx-2 md:mx-0 transition-all duration-200`}
        style={{
          maxHeight: !showFull ? `${maxArticleHeight}px` : "none",
          overflow: !showFull ? "hidden" : "visible",
        }}
      >
        <Link href={`/${article.category}/${article.slug}`} className="block">
          <div className="overflow-hidden relative aspect-video mb-1">
            <Image
              src={article.image}
              alt={article.title}
              width={isFeatured ? 640 : 282}
              height={isFeatured ? 360 : 159}
              className="object-cover w-full h-full"
              loading={isFeatured ? "eager" : "lazy"}
              priority={isFeatured}
            />
          </div>
        </Link>
        <div>
          <Link
            href={`/${article.category}/${article.slug}`}
            className="ArticleCard-title"
          >
            {article.title}
          </Link>
        </div>
        {isFeatured && article.shortdescription && (
          <div>
            <p className="text-sm break-words">{article.shortdescription}</p>
          </div>
        )}
 
      </article>


      {isTruncated && (
        <div className="mt-2 w-full ">
          <button
            className="text-gray-800 font-medium hover:underline transition my-2"
            onClick={() => setShowFull((s) => !s)}
            aria-label={showFull ? "Read less" : "Read more"}
          >
            {showFull ? "Read less" : "Read more"}
          </button>
        </div>
      )}
      <p>
          By{" "}
          <span className="text-[#003d73] hover:underline font-bold cursor-pointer">
            Reporter
          </span>
        </p>
    </div>
  );
}
