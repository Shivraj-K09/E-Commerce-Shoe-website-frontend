import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedCards from "./RelatedCards";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1023, min: 463 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <div className="text-2xl font-bold mb-5 rounded-[20px] bg-white p-5 ">
        You Might also like this... 😉
      </div>
      <Carousel
        responsive={responsive}
        containerClass="=-mx-[10px]"
        itemClass="px-[10px]"
      >
        <RelatedCards />
        <RelatedCards />
        <RelatedCards />
        <RelatedCards />
        <RelatedCards />
        <RelatedCards />
        <RelatedCards />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
