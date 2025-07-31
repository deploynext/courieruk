import Image from "next/image";
import Link from "next/link";

interface Article {
    category:string;
    slug:string;
    title:string;
    image:string;
    date?:string;

}

interface FullWidthProps{
    article:Article;
}
export default function FullWidth ( {article}:FullWidthProps) {
    return(

    <div className="mb-2">
        <Link href={`/${article.category}/${article.slug}`} className="ArticleCard-title">
            <h1 style={{fontSize:"30px",fontWeight:"900"}} className="mt-3 mb-2  border-b border-gray-300 pb-2">
              {article.title}
            </h1>
       </Link> 
            <p className="my-1">{article.date}</p>
        <Link href={`/${article.category}/${article.slug}`}>    
            <div >
                <Image
                 src={article.image}
                 alt={article.title}
                 width={940}
                 height={565}
                 className="object-contain"
                />
            </div>
        </Link>
    </div>
    )
}