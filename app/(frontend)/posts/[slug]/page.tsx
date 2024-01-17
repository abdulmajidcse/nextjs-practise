export default function PostBySlug({ params }: { params: { slug: string } }) {
  return (
    <h2>
      Your slug:{" "}
      <span className="font-bold text-purple-800">
        {params.slug.toUpperCase()}
      </span>
    </h2>
  );
}
