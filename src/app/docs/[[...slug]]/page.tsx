export default function Docs({ params }: { params: { slug: string[] } }) {
  const slug = params.slug;
  return (
    <>
      <h1>this is the documents HomePage {slug}</h1>
      <ul>
      {/* {slug.map((item)=><li>{item}</li>)} */}
      </ul>
    </>
  );
}
