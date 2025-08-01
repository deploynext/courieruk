"use client";

import Link from "next/link";
import Image from "next/image";


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

    

  return (
    <div>
      <article
        
        className={`bg-white p-2 block relative ${isFeatured ? "lg:col-span-2" : ""} mx-2 md:mx-0 transition-all duration-200`}
        
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
            <p className="text-sm break-words text-justify">{article.shortdescription}</p>
          </div>
        )}
 
      </article>


      
      <p className="ml-4">
          By{" "}
          <span className="text-[#003d73] italic hover:underline font-bold  cursor-pointer">
            Reporter
          </span>
        </p>
    </div>
  );
}
