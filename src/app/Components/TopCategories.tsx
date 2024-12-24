import Image from "next/image"

import deskchair from "../../../public/topCategory/deskchair.png"
import wingchair from "../../../public/topCategory/wingchair.png"
import woodenchair from "../../../public/topCategory/woodenchair.png"
import feature1 from "../../../public/featured/feature1.png"
import feature3 from "../../../public/featured/feature3.png"
import feature4 from "../../../public/featured/feature4.png"
import foamchair from "../../../public/foamchair.png"


export default function TopCategories() {

  const Products = [
    {
      id: 1,
      name: "Wing Chair",
      image: wingchair,
      products: "157 "
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: woodenchair,
      products: "154 "
    },
    {
      id: 3,
      name: "Desk Chair",
      image: deskchair,
      products: "3,584 "
    },
  ]

  return (
    <main className="w-full bg-white py-[50px]">
      {/* Top Categories Section */}
      <div className="px-5 md:px-10 lg:px-28 xl:px-48 py-4 md:py-8 lg:py-[50px]">
        <h1 className="text-[#272343] text-[20px] md:text-[26px] lg:text-[32px] font-semibold text-center">
          Top Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 place-items-center">
          {Products.map((item) => (
            <div
              className="relative rounded-lg overflow-hidden min-w-[200px] max-w-[400px] mx-auto"
              key={item.id}
            >
              <Image className="w-full h-full object-cover" src={item.image} alt={item.name} />
              <div className="absolute bottom-0 w-full h-[85px] bg-black bg-opacity-70 p-4 flex flex-col justify-center">
                <h5 className="text-white text-sm md:text-base lg:text-lg font-semibold">{item.name}</h5>
                <h6 className="text-white opacity-60 text-xs md:text-sm">{item.products} Products</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-32 xl:px-52 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-5">
        {/* Rotated Text */}
        <div className=" relative w-auto lg:w-8 h-auto lg:flex justify-center">
          <h1 className="rotate-0 text-[#272343] text-center text-[20px] md:text-[26px] lg:text-[32px] font-semibold lg:rotate-[270deg] whitespace-nowrap origin-center">
            Explore new and popular styles
          </h1>
        </div>

        {/* Main Feature Image */}
        <div className="w-[75%] lg:w-1/2 h-auto">
          <Image
            className=" h-full w-[99%] aspect-square object-cover rounded-lg"
            src={feature3}
            alt="specialChair"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:w-1/2 h-full">
          <Image
            className="w-full aspect-square object-cover rounded-lg"
            src={feature4}
            alt="specialChair"
          />
          <Image
            className="w-full aspect-square object-cover rounded-lg"
            src={feature1}
            alt="specialChair"
          />
          <Image
            className="w-full aspect-square object-cover rounded-lg"
            src={foamchair}
            alt="specialChair"
          />
          <Image
            className="w-full aspect-square object-cover rounded-lg"
            src={feature1}
            alt="specialChair"
          />
        </div>
      </div>

    </main>
  );
}