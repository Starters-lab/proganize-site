import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Heading from "../layout/nav";
import { ArrowRight, Calendar, User } from "lucide-react";
import Footer from "../layout/footer";
import Image from "next/image";

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  author: string;
}

export const metadata = {
  title: "Blog | Proganize",
  description:
    "Explore the latest insights, guides, and tips from the Proganize team.",
};

export default function Blog() {
  // Fetch blog posts from the `posts/` directory
  const posts = getPosts();

  return (
    <div className='bg-gray-100'>
      <Heading />

      <div className='mx-auto max-w-7xl  px-4 pt-24'>
        <h1 className='text-3xl font-bold tracking-tighter md:text-5xl my-10'>
          Blog
        </h1>
        {posts.length > 0 && (
          <div className='featured-post mb-8 flex gap-4 bg-[#1c1c1c] p-6 md:h-[400px] lg:h-[500px] md:flex-nowrap lg:flex-nowrap flex-wrap'>
            <div className='w-full'>
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='md:w-1/2 lg:w-1/2 lg:p-8 md:p-8 p-2 text-white self-center'>
              <span className='text-sm uppercase p-2 px-4 border rounded-full'>
                Latest
              </span>
              <h2 className='text-4xl font-bold mt-6'>{posts[0].title}</h2>
              <p className='text-gray-400 mt-4'>{posts[0].description}</p>
              <div className='flex gap-10'>
                <div className='flex items-center mt-4'>
                  <Image
                    src='https://doodleipsum.com/700/avatar-2?i=ff2c7457dcaa9fefe2942055c7ee9739'
                    alt='Author'
                    className='w-10 h-10 rounded-full mr-3'
                  />
                  <div>
                    <span className='block font-semibold'>
                      {posts[0].author}
                    </span>
                  </div>
                </div>
                <div className='flex items-center mt-4 gap-2'>
                  <Calendar size={20} />
                  <span>
                    {new Date(posts[0].date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <Link
                href={`/blog/${posts[0].slug}`}
                className='mt-10 text-blue-500 flex items-center gap-2'
              >
                Read More <ArrowRight />
              </Link>
            </div>
          </div>
        )}

        <div className=' py-20'>
          <p className='mb-6 font-bold text-xl'>LATEST</p>
          <div className='grid md:grid-cols-2 ld:grid-col-2 gap-8 border-t pt-10'>
            {posts.slice(1).map((post) => (
              <div key={post.slug} className='flex items-start space-x-6'>
                <div className='w-1/4'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    className='rounded-lg object-cover'
                  />
                </div>
                <div className='w-3/4'>
                  <h3 className='text-2xl font-bold'>{post.title}</h3>
                  <p className='text-gray-600 mt-2'>{post.description}</p>
                  <div className='flex items-center text-sm text-gray-500 mt-4'>
                    <span className='mr-4 flex items-center gap-2'>
                      <Calendar size={16} />{" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className='flex items-center gap-2'>
                      <User size={16} />
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='text-[#2F6B62] mt-2 inline-block'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function getPosts(): Post[] {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  return files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "posts", filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      ...(data as Omit<Post, "slug">),
      slug: filename.replace(".md", ""),
    };
  });
}
