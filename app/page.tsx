import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import AllBlogs from "@/components/allBlogs";
import RecentBlogs from "@/components/recentBlogs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RecentBlogs />
      <AllBlogs />
    </main>
  );
}
