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

interface CategoryTagProps {
  article: Article;
  isFeatured?: boolean;
}

export default function CategoryTag({ article, isFeatured = false }: CategoryTagProps) {
  return (
    <article
      className={`bg-white  mx-1 md:mx0`}
    ><div className=''>
      <Link href={`/${article.category}/${article.slug}`} className="block mb-4">
        <div className=" overflow-hidden relative aspect-video">
          <Image
            src={article.image}
            alt={article.title}
            width={isFeatured ? 640 : 282}
            height={isFeatured ? 360 : 159}
            className=" object-cover w-full h-full relative"
            loading={isFeatured ? 'eager' : 'lazy'}
            priority={isFeatured}
          />
          <div className='absolute left-0 bottom-0 font-sans text-blue-900 bg-white uppercase font-semibold text-sm pt-2 px-1' >{article.category}</div>
        </div>
      </Link>
      <div
        className={` ${
          isFeatured ? 'text-[26px] font-[600]' : 'text-[22px] font-[700]'
        }`}
      >
        <Link href={`/${article.category}/${article.slug}`}
          className="ArticleCard-title text-justify">
          {article.title}
        </Link>
      </div>
      </div>
      <p className='border-t border-gray-300 pt-2 px-2'>{article.date}</p>
    </article>
  );
}