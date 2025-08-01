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

interface LightHeadArticleProps {
  article: Article;
  isFeatured?: boolean;
}

export default function LightHeadArticle({ article, isFeatured = false }: LightHeadArticleProps) {
  return (
    <div>
    <article
      className={`bg-white  ${isFeatured ? 'lg:col-span-2' : ''} mb-3`}
    >
      <Link href={`/${article.category}/${article.slug}`} className="block ">
        <div className=" overflow-hidden relative aspect-video mb-1">
          <Image
            src={article.image}
            alt={article.title}
            width={isFeatured ? 640 : 450}
            height={isFeatured ? 360 : 250}
            className=" object-cover w-full h-full"
            loading={isFeatured ? 'eager' : 'lazy'}
            priority={isFeatured}
          />
        </div>
      </Link>
      <div>
        <Link href={`/${article.category}/${article.slug}`}
          className="!no-underline !text-gray-800 hover:!underline text-[20px] text-justify">
          {article.title}
        </Link>
      </div>
      

      {isFeatured && article.shortdescription && (
        <p className=" text-sm">{article.shortdescription}</p>
      )}
      <p className='text-xs'>{article.date}</p>

    </article>
    
    </div>
  );
}
