import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { data } = getPost((await params).slug);
  return {
    title: `${data.title} | Proganize Blog`,
    description: data.description,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  const { content, data } = getPost(slug);

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
      <p className='text-gray-600 mb-4'>
        By {data.author} on {data.date}
      </p>
      <Image src={data.image} alt={data.title} className='rounded-lg mb-6' />
      <ReactMarkdown className='prose'>{content}</ReactMarkdown>
    </div>
  );
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data, content };
}
