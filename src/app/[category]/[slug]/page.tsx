import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import Details from "@/app/components/Detail";
import DetailHeader from "@/app/components/DeatailHeader";
import RightImagesm from "@/app/components/RightImagesm";
import ForYou from "@/app/components/ForYou";



interface Article {
  
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?:string;
  author?:string;
 
}


export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src', 'data');

  const files = await fs.readdir(dataDir);
  const params: { category: string; slug: string }[] = [];

  for (const file of files) {
    const category = file.replace('.json', '');
    const filePath = path.join(dataDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const articles = JSON.parse(fileContent);

    for (const article of articles) {
      params.push({ category, slug: article.slug });
    }
  }

  return params;
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } =await  params;

  try {
    const filePath = path.join(process.cwd(), "src", "data", `${category}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const articles: Article[] = JSON.parse(fileContent);
    const article = articles.find((a) => a.slug === slug);

    if (!article) return notFound();
    return(
        <div className="wrap">
          <div className="col-md-8"><DetailHeader article={article}/></div>
          <div className="col-md-12  row">
            
            <div className="col-md-8"> 
              
              <Details article={article}/>
              <ForYou articles={articles}/>
            </div>
            <div className="col-md-4 ">
              <div className="shadow-sm p-2 overflow-hidden">
                <p className=" fw-bolder text-3xl text-gray-800 mb-3">Top Stories</p>
                {articles.slice(0,10).map((article,index)=>(
                  <div key={index}>
                    <RightImagesm article={article}/>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
    )
} catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}