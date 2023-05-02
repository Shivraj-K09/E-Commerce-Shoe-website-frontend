import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1280px] mx-auto ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img className="bg-gray-50 dark:bg-gray-900 " src="/pr1.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr2.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr3.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr4.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr5.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr6.png" alt="" />
        <img className="bg-gray-50 dark:bg-gray-900" src="/pr7.png" alt="" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
