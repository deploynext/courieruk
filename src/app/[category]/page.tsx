import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import CategoryHeader from '../components/CategoryHeader';
import RightImage from '../components/RightImage';
import ArticleCard from '../components/ArticleCard';
import NewsBar from '../components/NewsBar';
import Centerad from '../components/Centerad';
import HeadingOnly from '../components/HeadingOnly';
import CategoryTag from '../components/CategoryTag';
import LeftImagesm from '../components/LeftImagesm';
import AllCategoryNews from '../components/AllCategoryNews';




interface Article {
    title:string;
    image:string;
    shortdescription:string;
    description:string;
    slug:string;
    category:string;
    author?:string;
}

type Category = 'politics' | 'business' | 'technology' | 'sports' | 'science' | 'health';

interface PageProps {
  params: Promise<{ category: Category }>;
}


async function getArticlesByCategory(category: string): Promise<Article[] | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const posts: Article[] = JSON.parse(fileContent);
    return posts;
  } catch (error) {
    console.error(`Failed to read data for category "${category}":`, error);
    return null;
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const articles = await getArticlesByCategory(category);
  if (!articles) return notFound();
  return(
    <div className="wrap">
      <CategoryHeader article={articles[0]}/>
     <div className="row">
       <div className="col-md-9 mb-4">
        
        <RightImage article={articles[0]}/>
        <NewsBar articles={articles}/>
        </div>
        <div className="col-md-3 mt-3 ">
           {articles.slice(1,3).map((article, index) => (
               <ArticleCard key={article.slug ?? index} article={article} isFeatured/>
             ))}
           
        </div>
        <Centerad/>
        <div className='border-b-2 border-b-gray-200 w-full pb-1 mt-5 mx-2 text-[black]'>
          <h2>Comment & Analysis</h2>
        </div>
        <div className="d-flex flex-column flex-lg-row mt-1
         gap-1">
          {articles.slice(6,11).map((article, index) => (
            <div
              key={article.slug ?? index}
             
            >
              <HeadingOnly key={article.slug} article={article} index={index}/>
            </div>
          ))}
        </div>
        <div className='border-b-2 font-extrabold border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className=''>Top News</h2>
        </div>
        <div className='flex-row'>
        <div className='col-md-8'>
          <div className='row'>
          {articles.slice(11,17).map((article, index) => (
            <div
              key={article.slug ?? index}
              className="col-md-6"
            >
              <CategoryTag article={article} />
            </div>
          ))}
          </div>
          
        </div>
        <div className='col-md-8 border-b-2 border-b-gray-200 w-full pb-1 mt-5 mx-2 mb-2'>
           <AllCategoryNews params={{ category }} />
        </div>
          <div className='col-md-8'>
            {articles.map((articles,index)=>(
              <div key={index}>
                <LeftImagesm articles={articles}/>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )}