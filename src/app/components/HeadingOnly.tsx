import Link from 'next/link';
import Image from 'next/image';

export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  author?: string;
};

interface HeadingOnlyProps {
  article: Article;
  isFeatured?: boolean;
  index?: number; // used to determine if this is the first item
}

export default function HeadingOnly({
  article,
  isFeatured = false,
  index = 0, // default to 0 if not provided
}: HeadingOnlyProps) {
  const shouldShowImageOnMobile = index === 0;

  return (
    <article className={`bg-white mt-2 ${isFeatured ? 'lg:col-span-2' : ''} mx-2 md:mx-0`}>
      <Link href={`/${article.category}/${article.slug}`} className="block">
  <div
    className={`overflow-hidden 
      ${shouldShowImageOnMobile ? 'block w-full' : 'hidden'} 
      sm:block sm:w-[170px] sm:h-[108px]`}
  >
    <Image
  src={article.image}
  alt={article.title}
  width={isFeatured ? 640 : 600} 
  height={isFeatured ? 360 : 200}
  className="object-cover w-full h-auto"
  loading={isFeatured ? 'eager' : 'lazy'}
  priority={isFeatured}
/>

  </div>
</Link>

      <div className='border-b border-gray-300 md:border-0'>
        <Link
          href={`/${article.category}/${article.slug}`}
          className="ArticleCard-lighttitle  w-[170px]"
        >
          {article.title}
        </Link>
      </div>
    </article>
  );
}
