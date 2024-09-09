import { Suspense } from "react";
import FeaturedBlogs from "./featured-blogs";

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // if (Math.random() < 0.5) {
  //   throw new Error("Random error occurred");
  // }

  return (
    <div>
      <h1>Blog Posts</h1>
      <Suspense fallback={<p>Loading featured posts...</p>}>
        <FeaturedBlogs />
      </Suspense>
    </div>
  );
}
