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

interface RightImageProps {
  article: Article;
}

const RightImage = ({ article }: RightImageProps) => {
  return (
    <article className="row g-4 py-4 border-bottom rounded-2xl ">
  {/* IMAGE - show first on mobile */}
  <div className="col-md-8 order-1 order-md-2 border-end border-gray-200">
    <figure className="bg-gray-100">
      <Link href={`/${article.category}/${article.slug}`}>
        <Image
          src={article.image}
          alt={article.title}
          width={620}
          height={372}
          className="img-fluid shadow-sm w-100"
          priority
        />
      </Link>
      <figcaption className="text-muted mt-2 p-2 d-flex align-items-center text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 5h-3.586l-1.707-1.707A.996.996 0 0 0 15 3h-6c-.265 0-.52.105-.707.293L6.586 5H3c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM12 17c-2.206 0-4-1.794-4-4 0-.962.341-1.841.904-2.541l5.637 5.637A3.956 3.956 0 0 1 12 17zm3.096-1.459-5.637-5.637A3.956 3.956 0 0 1 12 9c2.206 0 4 1.794 4 4 0 .962-.341 1.841-.904 2.541z" />
        </svg>
        <span>{article.title}</span>
      </figcaption>
    </figure>
  </div>

  {/* TEXT - show after image on mobile */}
  <div className="col-md-4 d-flex flex-column justify-content-between px-3 order-2 order-md-1">
    <div>
      <h2 className="h3 fw-bold text-dark leading-tight mb-3">
        <Link
          href={`/${article.category}/${article.slug}`}
          className="ArticleCard-title"
        >
          {article.title}
        </Link>
      </h2>
      <p className="text-muted fs-6">{article.shortdescription}</p>
    </div>

    <div className="d-flex align-items-center gap-2 mt-4">
      <Image
        src="/images/author.webp"
        alt="author"
        width={40}
        height={40}
        className="rounded-circle object-cover"
      />
      <div className="flex-row" >
        <span className="me-1 ">By</span>
        <span className="font-bold text-[#003d73] hover:underline cursor-pointer">{article.author}</span>
       
      </div>
    </div>
  </div>
</article>

  );
};

export default RightImage;
