import Link from 'next/link';
import Image from 'next/image';

export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  author?:string;
  date?:string;
};

interface ArticleCardProps {
  article: Article;
  isFeatured?: boolean;
}

export default function ArticleCard({ article, isFeatured = false }: ArticleCardProps) {
  return (
    <div>
    <article
      className={`bg-white    mx-2 md:mx-0`}
    >
      <Link href={`/${article.category}/${article.slug}`} className="block ">
        <div className=" overflow-hidden relative aspect-video mb-1">
          <Image
            src={article.image}
            alt={article.title}
            width={isFeatured ? 640 : 282}
            height={isFeatured ? 360 : 159}
            className=" object-cover w-full h-full"
            loading={isFeatured ? 'eager' : 'lazy'}
            priority={isFeatured}
          />
        </div>
      </Link>
      <div>
        <Link href={`/${article.category}/${article.slug}`}
          className="ArticleCard-title">
          {article.title}
        </Link>
      </div>
      

      {isFeatured && article.shortdescription && (
        <p className=" text-sm text-justify">{article.shortdescription}</p>
      )}
      <p>By <span className='text-[#003d73] hover:underline font-bold cursor-pointer italic'>Reporter</span></p>

    </article>
    </div>
  );
}
