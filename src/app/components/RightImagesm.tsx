"use client";

import Image from "next/image";
import Link from "next/link";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?: string;
  author?: string;
};

interface RightImagesmProps {
  article: Article;
}

const RightImagesm = ({ article }: RightImagesmProps) => {
  return (
    <article className="row g-4 pb-4 mt-0.5 border-b border-gray-300">
  {/* IMAGE - show first on mobile */}
  <div className="col-md-5 order-1 order-md-2 ">
    <figure className="bg-gray-100">
      <Link href={`/${article.category}/${article.slug}`}>
        <Image
          src={article.image}
          alt={article.title}
          width={620}
          height={372}
          className="shadow-sm w-100"
          style={{maxHeight:'300px' ,objectFit:'cover'}}
          priority
        />
      </Link>
      
    </figure>
  </div>

  {/* TEXT - show after image on mobile */}
  <div className="col-md-7 d-flex flex-column justify-content-between px-3 order-2 order-md-1 mb-auto">
    <div>
      
        <Link
          href={`/${article.category}/${article.slug}`}
          className="mostreadtitle"
          
        >
          {article.title}
        </Link>
      
      
    </div>

    
  </div>
</article>

  );
};

export default RightImagesm;
