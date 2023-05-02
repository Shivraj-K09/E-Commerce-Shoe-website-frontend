import React from "react";
import Link from "next/link";

const RelatedCards = () => {
  return (
    <div className="border outline-transparent rounded-[10px] md:rounded-[20px] p-5 transform overflow-hidden bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 duration-200  shadow active:rotate-[-5deg]">
      <Link href="/product/1">
        <img
          src="/product-1.png"
          alt="Product Image"
          className="transform duration-200 w-full rounded-[30px] hover:scale-[1.2] hover:rotate-[-5deg]"
        />
        <hr />
        <div className="p-4 text-black/[0.9] dark:text-white/[0.9]">
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-bold text-green-700">$20.00</p>
            <p className="text-base font-medium line-through text-black dark:text-white">
              $25.00
            </p>
            <p className="bg-blue-500 p-2 rounded-md ml-auto text-base font-medium text-white">
              20% off
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedCards;
