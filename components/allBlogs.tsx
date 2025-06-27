"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// static data for tags and image
const tags = ["Design", "Research"];
const tempImg =
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AllBlogs() {
  const [allPosts, setAllPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [navigating, setNavigating] = useState(false);
  const postsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setAllPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const getVisiblePageNumbers = () => {
    const totalVisible = 3;
    const pageNumbers = [];

    if (totalPages <= totalVisible + 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const start = Math.max(currentPage - 1, 2);
      const end = Math.min(currentPage + 1, totalPages - 1);

      pageNumbers.push(1);
      if (start > 2) pageNumbers.push("ellipsis-start");

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < totalPages - 1) pageNumbers.push("ellipsis-end");
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:px-8">
      {navigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/60 backdrop-blur-sm">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Loading post...
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-8">All blog posts</h2>

      {loading ? (
        <div className="text-center text-gray-500 dark:text-gray-400 text-lg py-12">
          Loading posts...
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {currentPosts.map((post: IPosts) => (
              <div
                key={post.id}
                onClick={() => {
                  setNavigating(true);
                  router.push(`/${post.id}`);
                }}
                className="space-y-4 h-full flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={tempImg}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-[#6941C6] mt-5 mb-4">
                    Olivia Rhye • 27 June 2025
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug flex-1">
                      {post.title}
                    </h3>
                    <ArrowUpRight className="shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
                    {post.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className="bg-[#FDF2FA] text-[#C11574] border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Pagination className="mt-8 pt-5 w-full overflow-x-auto border-t border-gray-300 dark:border-white">
            <PaginationContent className="w-full flex flex-wrap justify-between items-center gap-4">
              <div className="flex-shrink-0">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.max(1, prev - 1));
                    }}
                  />
                </PaginationItem>
              </div>

              <div className="flex gap-1 justify-center flex-wrap">
                {getVisiblePageNumbers().map((item, i) => {
                  if (typeof item === "string" && item.includes("ellipsis")) {
                    return (
                      <PaginationItem key={item + i}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  } else {
                    return (
                      <PaginationItem key={item}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === item}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(item as number);
                          }}
                        >
                          {item}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                })}
              </div>

              <div className="flex-shrink-0">
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    }}
                  />
                </PaginationItem>
              </div>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </section>
  );
}
