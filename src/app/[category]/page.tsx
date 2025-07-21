import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';




interface Article {
    title:string;
    image:string;
    shortdescription:string;
    description:string;
    slug:string;
    category:string;
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
    <div>
        
    </div>
  )}