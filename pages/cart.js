import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

import { BsCart } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="w-full md:py-10 mt-7 md:mt-0">
      <Wrapper className="!border-none !p-10  bg-gray-300 dark:bg-gray-700">
        {/* Heading and Paragraph Start */}
        <div className="text-center max-w-[1280px] mx-auto mt-8 md:mt-0">
          <div className="flex  justify-center items-center gap-3 text-[28px] md:text[34px] mb-5 font-semibold leading-tight bg-white p-5 rounded-[15px] md:rounded-[30px]">
            Shopping Cart
            <BsCart className="text-[20px] md:text-[24px] font-[800px]" />
          </div>
          <div></div>
        </div>
        {/* Heading and Paragraph End */}

        {/* Cart Content Start */}
        <div className="flex flex-col lg:flex-row gap-12 py-2">
          {/* Cart Item Start */}
          <div className="flex-[2] bg-white dark:bg-gray-500 md:p-7 px-4 rounded-[15px] md:rounded-[30px]">
            <div className="text-lg font-bold my-5 md:mb-5 text-center text-black dark:text-white">
              Cart Items
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart Item End */}

          {/* Cart Summary Start */}
          <div className="flex-[1]  p-5 rounded-[15px] md:rounded-[30px] h-[450px] bg-white dark:bg-gray-500">
            <div className="text-lg font-bold text-center text-black dark:text-white">
              Summary
            </div>
            <div className="p-5 my-5 bg-black/[0.05] dark:bg-gray-800 rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg text-black font-semibold dark:text-white">
                  Subtotal
                </div>
                <div className="text-md md:text-lg text-black dark:text-white font-semibold">
                  ₹ 19,695.00
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5 text-black dark:text-white">
                The Subtotal reflects the total cost of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery cost and international transaction fees.
              </div>
            </div>
            {/* Button Start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>

            {/* Button End*/}
          </div>
          {/* Cart Summary End */}
        </div>
        {/* Cart Content End */}

        {/* Empty Screen Start*/}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.png"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">
            Don't let your cart be lonely. Shop now!
          </span>
          <span className="text-center mt-4">
            Don't leave your cart empty for too long! <br /> Browse our top
            categories and find something you love.
          </span>

          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div> */}
        {/* Empty Screen End*/}
      </Wrapper>
    </div>
  );
};

export default Cart;
