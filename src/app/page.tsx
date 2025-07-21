import politics from "../data/politics.json"
import business from "../data/business.json" 
import health from "../data/health.json"
import science from "../data/science.json"
import sports from "../data/sports.json"
import technology from "../data/technology.json"
import RightImage from "./components/RightImage"
import ArticleCard from "./components/ArticleCard"
import NewsBar from "./components/NewsBar"
import HeadingOnly from "./components/HeadingOnly"
import LeftImagesm from "./components/LeftImagesm"



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
  ...technology
]

export default function Home() {
  if (mergedArticles.length === 0) return <p>No articles available.</p>;

  const [featured, ...others] = mergedArticles;
  return (
  <div>
   <div className="container py-4">
     <div className="row">
       <div className="col-md-8 mb-4">
        <RightImage  article={featured} />
        
        <NewsBar articles={mergedArticles}/>  
          
        
       </div>
       <div className="col-md-4  ">
          {others.slice(0,2).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
            <LeftImagesm articles={others}/>
       </div>
      </div>
    </div>
 </div>
  );
}
