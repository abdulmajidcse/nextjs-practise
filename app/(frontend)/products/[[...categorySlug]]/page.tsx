export default function Product({
  params,
}: {
  params: { categorySlug?: string[] };
}) {
  return (
    <>
      <h2>Hello, product page!</h2>
      <div className="font-bold text-purple-800">
        {params.categorySlug?.map((slug) => `${slug.toUpperCase()} -> `)}
      </div>
    </>
  );
}
