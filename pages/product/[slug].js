import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

import { BsCart } from "react-icons/bs";

const ProductDetails = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-full mt-6 md:mt-0 md:py-[20px] ">
      <Wrapper className="border-none p-10  border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-700">
        <div className="flex flex-col lg:flex-row md:px-0 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column End  */}

          {/* Right Column Start  */}
          <div className="flex-[1] ">
            <div className=" rounded-[40px] p-6 mb-5 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
              {/* Product Title Start*/}
              <div className="text-[34px] font-extrabold mb-2">
                Jordan Retro 6 G
              </div>
              {/* Product Title End  */}

              {/* Product SubTitle Start */}
              <div className="text-lg font-bold mb-5">Men's Golf Shoes</div>
              {/* Product SubTitle End  */}

              {/* Product Price Start  */}
              <div className="text-lg font-bold">MRP: ₹ 19,695.00/- Only</div>
              <div className="text-md font-medium text-black/[0.5] dark:text-white/[0.5]">
                including of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] dark:text-white/[0.5]">
                {`(Also includes all Applicable duties)`}
              </div>
              {/* Product Price End  */}
            </div>

            {/* Product Size Range Start  */}
            <div className="mb-5 rounded-[40px] p-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white ">
              {/* Heading Start  */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-bold">Size Select</div>
                <div className="text-md font-medium text-white hover:underline cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Heading End  */}
              {/* Size Selection   */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 6.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 7
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 7.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 8
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 8.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 9
                </div>

                <div className="border rounded-md text-center py-3 font-medium dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer">
                  UK 9.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] dark:bg-white/[0.1] opacity-50">
                  UK 10
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] dark:bg-white/[0.1]  opacity-50">
                  UK 10.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] dark:bg-white/[0.1]  opacity-50">
                  UK 11
                </div>
              </div>
              {/* Size Selection End*/}

              {/* Show Error Start */}
              <div className="text-red-600 mt-3 font-semibold">
                Size Selection is required*
              </div>
              {/* Show Error End */}
            </div>
            {/* Product Size Range End  */}

            {/* Add To Cart Button  */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3  cursor-pointer flex justify-center items-center gap-5">
              Add to Cart
              <BsCart size={20} />
            </button>
            {/* Add To Cart Button  */}

            {/* Wishlist Button  */}
            <button className="w-full py-4 rounded-full  text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10 bg-white">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>

            {/* Wishlist Button  */}

            {/* Product Description Start  */}
            {/* Product Description End */}
          </div>
          {/* Right Column End  */}
        </div>

        <div className="rounded-[40px] p-6 bg-white dark:bg-gray-800  text-black dark:text-white">
          <div className="text-lg font-bold mb-3">Product Details </div>
          <p className="mb-5">
            The Jordan Retro 6 G is a stylish and comfortable basketball shoe
            inspired by Michael Jordan's iconic 1991 championship-winning
            sneaker. It features a leather and synthetic upper for durability
            and support, a visible Air-Sole unit in the heel for cushioning, and
            a rubber outsole for traction on the court. With its classic design
            and modern updates, the Jordan Retro 6 G is a must-have for
            sneakerheads and basketball players alike.
          </p>

          <div
            className="overflow-hidden transition-max-height duration-[0.5s] ease-in-out "
            style={{ maxHeight: !showDetails ? "1000px" : "0" }}
          >
            <p className="mb-5">
              One of the key features of the Jordan Retro 6 G is its visible
              Air-Sole unit in the heel, which provides exceptional cushioning
              and support for your feet during high-impact activities. The unit
              helps to absorb shock and reduce pressure on your joints, helping
              you to play harder and longer on the court without feeling
              fatigued.
            </p>

            <p className="mb-5">
              The Jordan Retro 6 G also features a rubber outsole that provides
              excellent traction on a variety of surfaces, including hardwood
              and outdoor courts. This helps you to maintain your footing and
              stay in control of your movements, even during fast-paced and
              intense games.
            </p>

            <p className="mb-5">
              Overall, the Jordan Retro 6 G is a must-have for any basketball
              player or sneakerhead who wants to look and feel their best on and
              off the court. With its classic design and modern updates, this
              shoe is sure to turn heads and provide exceptional performance, no
              matter where you play.
            </p>
          </div>

          {showDetails ? (
            <button
              className="text-black dark:text-white font-bold hover:underline"
              onClick={handleShowDetails}
            >
              Show Less
            </button>
          ) : (
            <button
              className="text-black dark:text-white font-bold hover:underline"
              onClick={handleShowDetails}
            >
              Show More
            </button>
          )}
        </div>
      </Wrapper>

      <Wrapper className="!border-none p-10 !mt-10  bg-gray-300 dark:bg-gray-700">
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
