import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper className="!border-none">
        <div className="max-w-[600px] rounded-[20px] md:rounded-[40px] p-8 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-extrabold mt-2 mb-2">
            Your order has been placed successfully.
          </div>
          <div className="text-xl font-bold text-green-600">
            Thank you for shopping with us! <br /> We hope you loved your
            purchase and will be back for more.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;
