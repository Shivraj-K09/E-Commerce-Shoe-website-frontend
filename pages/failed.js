import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Image from "next/image";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center justify-center">
      <Wrapper className="!border-none">
        <div className="max-w-[600px] p-8 border border-black rounded-[40px]  mx-auto flex flex-col">
          <div className="text-2xl font-extrabold text-red-600">
            Uh Oh! Payment failed! <br /> Looks Like Something Went Wrong.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email at
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

export default Failed;
