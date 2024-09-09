export default async function FeaturedBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Featured Blogs</div>;
}
