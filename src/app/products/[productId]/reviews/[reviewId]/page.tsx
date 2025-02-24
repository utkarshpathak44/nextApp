const ProductReview = ({
    params,
  }: {
    params: { productId: string; reviewId: string };
  }) => {
    const { productId, reviewId } = params;
  
    return (
      <>
        <h2>
          This is the ProductReview page, for product {productId}, review {reviewId}
        </h2>
      </>
    );
  };
  
  export default ProductReview;
  