"use client"

import { usePathname } from "next/navigation";

const ReviewNotFound=()=>{
    const pathname=usePathname()
    const productId=pathname.split("/")[2]
    const reviewId=pathname.split("/")[4]

    return (
        <div>
            <h1>The review {reviewId} was not found for product {productId}</h1>
        </div>
    )
}

export default ReviewNotFound;