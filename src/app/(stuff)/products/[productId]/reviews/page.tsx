const ProcustReviews = async ({
    params,
  }: {
    params: { productId: string };
  }) => {
    //this is a dynamic segment
    const productId=params.productId
  
    return (
      <>
        <h2>This is the ProcustReviews page, for product {productId}</h2>
      </>
    );
  };
  
  export default ProcustReviews;
  