const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //this is a dynamic segment
  const productId=(await params).productId

  return (
    <div className="">
      <h2>This is the ProductDetails page, for product {productId}</h2>
      <div className="flex flex-row w-full gap-2">
        <div className="w-full h-96 bg-black rounded-md">k</div>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full rounded-md bg-black h-40">info</div>
          <div className="w-full rounded-md bg-black h-60">info</div>
          <div className="w-full rounded-md bg-black h-60">info</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
