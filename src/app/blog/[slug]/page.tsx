import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  if (params.slug === "not-found") {
    notFound();
  }

  return (
    <div>
      <h1>{params.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam,
        a laboriosam maxime vel aliquid ut culpa praesentium ex recusandae
        distinctio similique qui ea deleniti quis. Magnam et magni odit.
      </p>
    </div>
  );
}
