import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex p-3 md:p-5 mb-4 gap-3 md:gap-6 border rounded-[20px] md:rounded-[40px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 ">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          src="product-1.png"
          className="bg-gray-100 dark:bg-gray-500 rounded-[15px] md:rounded-[30px]"
        />
      </div>
      {/* Image End */}

      {/* Content Start */}
      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title Start */}
          <div className="text-lg md:text-2xl font-bold text-black/[0.8] dark:text-white/[0.8]">
            Jordan Retro 6 G
          </div>
          {/* Product Title End  */}
          {/* Product Subtitle Start*/}
          <div className="text-sm md:text-md font-medium text-black/[0.5] dark:text-white/[0.5] block md:hidden">
            Men&apos;s Golf Shoe
          </div>
          {/* Product Subtitle End*/}

          {/* Product Price Start */}
          <div className="text-sm md:text-md font-bold text-black/[0.7] dark:text-white/[0.7] mt-2">
            MRP: ₹ 19,695.00
          </div>
          {/* Product Price End */}
        </div>

        {/* Product Subtitle Start */}
        <div className="text-md font-medium text-black/[0.5] dark:text-white/[0.5] hidden md:block">
          Men&apos;s Golf Shoe
        </div>
        {/* Product Subtitle End*/}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md ">
            <div className="flex items-center gap-1">
              <div className="font-semibold text-black dark:text-white">
                Size:
              </div>
              <select className="border hover:text-black dark:hover:text-white bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 text-center p-1 rounded-[4px]">
                <option value="1>">UK 6</option>
                <option value="2>">UK 6.5</option>
                <option value="3>">UK 7</option>
                <option value="4>">UK 7.5</option>
                <option value="5>">UK 8</option>
                <option value="6>">UK 8.5</option>
                <option value="7>">UK 9</option>
                <option value="8>">UK 9.5</option>
                <option value="9>">UK 10</option>
                <option value="10>">UK 10.5</option>
                <option value="11>">UK 11</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold text-black dark:text-white">
                Quantity:
              </div>
              <select className="border hover:text-black dark:hover:text-white bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 text-center p-1 rounded-[4px]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] dark:text-white/[0.5] hover:text-red-600 text-[20px] md:text-[24px]"
            title="Delete Item"
          />
        </div>
      </div>
      {/* Content End */}
    </div>
  );
};

export default CartItem;
