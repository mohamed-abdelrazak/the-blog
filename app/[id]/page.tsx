import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const tags = ["Design", "Research"];
const tempImg =
  "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Details({ params }: PageProps) {
  const { id } = await params;
  // const id = params.id;

  if (!id || isNaN(Number(id))) return notFound();

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) return notFound();

  const post: IPosts = await res.json();

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto py-10 px-8 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-[#6941C6] mt-5 mb-4">
          27 June 2025
        </div>
        <h2 className="text-4xl font-bold pt-3">{post.title}</h2>
        <img src={tempImg} alt={post.title} className="py-10" />
        <p className="text-black dark:text-[#C0C5D0] pb-4">{post.body}</p>
        <div className="flex flex-wrap gap-3 mt-2 mb-3">
          {tags.map((tag, i) => (
            <Badge key={i} className="bg-[#FDF2FA] text-[#C11574] border-none">
              {tag}
            </Badge>
          ))}
        </div>
      </section>
    </>
  );
}
