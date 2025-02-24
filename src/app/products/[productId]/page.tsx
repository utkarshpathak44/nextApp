const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //this is a dynamic segment
  const productId=(await params).productId

  return (
    <>
      <h2>This is the ProductDetails page, for product {productId}</h2>
    </>
  );
};

export default ProductDetails;
