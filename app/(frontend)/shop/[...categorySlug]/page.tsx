export default function Shop({
  params,
}: {
  params: { categorySlug: string[] };
}) {
  return (
    <>
      <h2>Hello, shop page!</h2>
      <div className="font-bold text-purple-800">
        {params.categorySlug.map((slug) => `${slug.toUpperCase()} -> `)}
      </div>
    </>
  );
}
