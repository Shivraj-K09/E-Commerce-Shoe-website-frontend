import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <Wrapper className="md:!my-5 border border-gray-300 dark:border-gray-700">
        {/* Heading And Paragraph Start  */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h2 className="text-[28px] md:text[34px] mb-5 text-black dark:text-white font-bold leading-tight">
            Cushioning for Your Miles
          </h2>
          <p className="text-md text-black dark:text-white">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide Cushioning during extended stretches of
            running.
          </p>
        </div>
        {/* Heading And Paragraph End  */}
      </Wrapper>

      {/* Product Grid Start */}
      <Wrapper className=" !px-10 md:!px-20 mb-20 border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-700">
        <h2 className="mt-6 text-2xl font-bold rounded-[20px] bg-white p-4 text-center">
          Products
        </h2>
        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
      {/* Product Grid End */}
    </main>
  );
}
