import politics from "../data/politics.json"
import business from "../data/business.json" 
import health from "../data/health.json"
import science from "../data/science.json"
import sports from "../data/sports.json"
import technology from "../data/technology.json"
import RightImage from "./components/RightImage"
import ArticleCard from "./components/ArticleCard"
import NewsBar from "./components/NewsBar"
import CategoryTag from "./components/CategoryTag"
import MostRead from "./components/MostRead"
import HeadingOnly from "./components/HeadingOnly"
import LeftImagesm from "./components/LeftImagesm"
import entertainment from "../data/entertainment.json"
import lifestyle from "../data/lifestyle.json"
import education from "../data/education.json"
import LightHeadArticle from "./components/LightHeadArticle"
import Exclusive from "./components/Exclusive"
import FullWidth from "./components/FullWidth"




type Article ={
  title:string;
  image:string;
  shortdescription:string;
  description:string;
  slug:string;
  category:string;
  date?:string;
  author?:string;
}

const mergedArticles: Article[] = [
  ...health,
  ...business,
  ...politics,
  ...sports,
  ...science,
  ...technology,
  ...entertainment,
  ...lifestyle,
  ...education
]

export default function Home() {
  if (mergedArticles.length === 0) return <p>No articles available.</p>;
  
  const sportsArticle = mergedArticles.filter(articles => articles.category === "sports")
 const healthArticle = mergedArticles.filter(articles => articles.category === "health" )
  const politicsArticle = mergedArticles.filter(articles => articles.category === "politics")
  const [featured, ...others] = mergedArticles;
  return (
  <div>
   <div className="wrap ">
     <div className="row">
       <div className="col-md-9 mb-4">
        <RightImage  article={featured} />
        
        <NewsBar articles={mergedArticles}/>  
       </div>
       <div className="col-md-3 mt-3 ">
          {others.slice(0,2).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} isFeatured/>
            ))}
        </div>
      </div>
       <div className='border-b-2 font-extrabold border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Top News</h2>
        </div>
      <Exclusive article={politicsArticle[0]}/>
      <div className='row'>
        <div className="col-md-8">
          <div className='row'>
            {mergedArticles
              .filter(article => article.category === "politics")   
              .slice(10,18)                         
              .map((article, index) => (
                <div key={article.slug ?? index} className="col-md-6">
                  <CategoryTag article={article} />
                </div>
            ))}

          </div>
        </div>
        
        <div className="col-md-4">
          <div>
            <h5 className="text-semibold border-b border-gray-300 py-2">
              Latest Business content
            </h5>
          </div>
            {mergedArticles
              .filter(article => article.category === "business")   
              .slice(1,11)                         
              .map((article, index) => (
                <div key={article.slug ?? index} >
                  <MostRead  articles={article} />
                </div>
            ))}
        </div>
       </div>
       <div className='border-b-2 font-extrabold border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Top Story</h2>
        </div>
        <Exclusive article={healthArticle[0]}/>
       <div className='row'>
        <div className="col-md-8">
          <div className='row'>
            {mergedArticles
              .filter(article => article.category === "health")   
              .slice(10,18)                         
              .map((article, index) => (
                <div key={article.slug ?? index} className="col-md-6">
                  <CategoryTag article={article} />
                </div>
            ))}

          </div>
        </div>
        
        <div className="col-md-4">
          <div>
            <h5 className="text-semibold border-b border-gray-300 py-2">
              Latest lifestyle content
            </h5>
          </div>
            {mergedArticles
              .filter(article => article.category === "lifestyle")   
              .slice(0,10)                         
              .map((article, index) => (
                <div key={article.slug ?? index} >
                  <MostRead  articles={article} />
                </div>
            ))}
        </div>
       </div>

      

      <div className="col-md-12">
        <div className='border-b-2 font-extrabold border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Latest Sports</h2>
        </div>
        <FullWidth article={sportsArticle[0]}/>
        <div className="row">
          <div className="col-md-8">
            {mergedArticles
            .filter(articles =>articles.category === "sports" )
            .slice(1,11)
            .map((articles,index)=>(
              <div key={index} className="border-b border-gray-300 pb-0">
                <LeftImagesm articles={articles}/>
              </div>
            ))}
          </div>
          <div className="col-md-4">
              <div>
                <h5 className="border-b-2 font-extrabold border-b-gray-200 w-full  mx-2 text-black py-2">
                  A look back at Past Times
                </h5>
                  {mergedArticles
                    .filter(article => article.category === "sports")   
                    .slice(10,20)                         
                    .map((article, index) => (
                      <div key={article.slug ?? index} >
                        <MostRead  articles={article} />
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
      <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Local Stories</h2>
        </div>
       <div className="d-flex flex-column flex-lg-row mt-1 gap-1">
         {mergedArticles
         .filter(article => article.category === "sports")
         .slice(10,15)
         .map((article, index) => (
           <div
             key={article.slug ?? index}
           >
             <HeadingOnly key={article.slug} article={article} index={index}/>
           </div>
         ))}
       </div>
       {/* to added item */}
       <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Latest Technology</h2>
        </div>
       <div className="d-flex flex-column flex-lg-row mt-1 gap-1">
         {mergedArticles
         .filter(article => article.category === "technology")
         .slice(10,15)
         .map((article, index) => (
           <div
             key={article.slug ?? index}
           >
             <HeadingOnly key={article.slug} article={article} index={index}/>
           </div>
         ))}
       </div>

       <div className="col-md-12">
        <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Entertainment</h2>
        </div>
         <div className="row">
          {mergedArticles
          .filter(articles => articles.category === "entertainment")
          .slice(0,3)
          .map((article,index) => (
            <div key={index} className="col-md-4">
                <ArticleCard article={article}/>
            </div>
          ))
          }
         </div>
       </div>

       <div className='row'>
        <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Latest Science</h2>
        </div>
        <div className="col-md-8">
          <div className='row'>
            {mergedArticles
              .filter(article => article.category === "science")   
              .slice(10,18)                         
              .map((article, index) => (
                <div key={article.slug ?? index} className="col-md-6">
                  <CategoryTag article={article} />
                </div>
            ))}

          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h5 className="text-semibold border-b border-gray-300 py-2">
              Latest Technology content
            </h5>
          </div>
            {mergedArticles
              .filter(article => article.category === "technology")   
              .slice(0,10)                         
              .map((article, index) => (
                <div key={article.slug ?? index} >
                  <MostRead  articles={article} />
                </div>
            ))}
        </div>
       </div>
        <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Latest Health</h2>
        </div>
       <div className="d-flex flex-column flex-lg-row mt-1 gap-1">
         {mergedArticles
         .filter(article => article.category === "health")
         .slice(10,15)
         .map((article, index) => (
           <div
             key={article.slug ?? index}
           >
             <HeadingOnly key={article.slug} article={article} index={index}/>
           </div>
         ))}
       </div>
       <div className='border-b-2  border-b-gray-200 w-full pb-1 mt-5 mx-2 text-black'>
          <h2 className='fw-bolder'>Latest Education</h2>
        </div>
       <div className="col-md-12 row">
        
        {mergedArticles
         .filter(articles => articles.category === "education")
         .slice(0,3)
         .map((article, index) => (
          <div key={index} className="col-md-4">
            <ArticleCard article={article}/>
          </div>
         ))}
       </div>
       <div className="col-md-12 row">
        <div>
          <h5 className="fw-bolder my-4" style={{fontSize:"25px"}}>Latest Lifestyle</h5>
        </div>
         {mergedArticles
         .filter(articles => articles.category === "lifestyle")
         .slice(0,6)
         .map((article, index) => (
          <div key={index} className="col-md-4">
            <LightHeadArticle article={article}/>
          </div>
         ))

         }
       </div>
       
    </div>
 </div>
  );
}
