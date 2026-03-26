"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const Blogcard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 items-stretch">
        {blogs.map((blog) => (
        <Link href={`/blog/${slugify(blog.title)}`} key={blog.id}>
          <div
           
            className="w-full max-w-[374px] h-full
            bg-[#f7f7f7]
            rounded-[10px]
            shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)]
            pt-[10px] px-[10px] pb-[20px]
            flex flex-col
            text-[14px] sm:text-[16px] font-medium
            leading-[24px] sm:leading-[30px] tracking-[0.5px]
            transition-transform duration-300 ease-in
            hover:scale-105"
          >
            {/* Image */}
            <img
              src={blog.image}
              className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
              alt={blog.title}
            />

            {/* Content */}
            <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">

              <div className="flex items-center text-blue-800">
                <span className="text-xl sm:text-2xl mr-2 -translate-y-1">•</span>
                <span>{blog.category}</span>
              </div>

              <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-5 tracking-[0.5px] line-clamp-2">
                {blog.title}
              </h6>

             
              <span className="text-black text-xs  sm:text-sm mt-auto">
                {blog.date} • {blog.readTime}
              </span>

            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogcard;