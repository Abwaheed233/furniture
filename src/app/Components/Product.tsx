import Image from "next/image"

import feature1 from "../../../Public/featured/feature1.png"
import feature2 from "../../../Public/featured/feature2.png"
import feature3 from "../../../Public/featured/feature3.png"
import feature4 from "../../../Public/featured/feature4.png"
import wingchair from "../../../Public/topCategory/wingchair.png"
import { IoCartOutline } from "react-icons/io5";

export default function Product() {

    const Products = [
        {
            id: 1,
            name: "Library Stool Chair",
            image: wingchair,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 2,
            name: "Library Stool Chair",
            image: feature1,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 3,
            name: "Library Stool Chair",
            image: feature2,
            label: "Sales",
            price: 20,
            discount: null,
        },
        {
            id: 4,
            name: "Library Stool Chair",
            image: feature3,
            price: 20,
            discount: 30,
        },
        {
            id: 5,
            name: "Library Stool Chair",
            image: feature4,
            price: 20,
            discount: null,
        },
    ]

    return (
        <main className="bg-white w-full h-full">
            <div className="px-5 md:px-10 lg:px-28 xl:px-48 py-20">
                <div className="lg:flex lg:justify-between place-items-center">
                    <Image className="w-auto lg:w-[550px] h-auto lg:h-[480px]" src={feature2} alt="SingleProduct" />
                    <div className="w-full lg:w-[550px] h-full space-y-8 py-1 px-5 md:px-10 lg:pl-16">
                        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-[#272343] mt-8 lg:mt-0 font-bold">Library Stool Chair</h1>
                        <button className="px-6 py-2 rounded-full text-[14px] md:text-[16px] lg:text-[20px] font-semibold bg-[#029FAE] text-white">$20.00 USD</button>
                        <hr />
                        <p className="text-[14px] md:text-[18px] text-[#272343]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a tempora vitae minus aliquid, iure illo ab incidunt neque debitis eius possimus architecto et porro quidem officiis quos magnam vel?</p>
                        <div className="relative w-56 h-14 flex items-center justify-between py-2 px-5 text-white text-[20px] font-semibold bg-[#029FAE] rounded-lg">
                            <IoCartOutline className="w-8 h-8" />
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 md:px-10 lg:px-28 xl:px-48 py-10">
                <h1 className="text-[#272343] text-[24px] md:text-[32px] font-semibold">Featured Products</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 py-8 place-items-stretch">
                    {
                        Products.map((item) => {
                            return (
                                <div className=" w-full max-w-[300px] mx-auto h-[317px] self-start" key={item.id}>
                                    <Image className="w-[312px] h-[250px]" src={item.image} alt={item.name} />
                                    <div className="flex justify-between items-center py-2">
                                        <h6 className="text-[#007580] text-[14px] md:text-[18px]">{item.name}</h6>
                                        <h5 className="font-semibold text-[14px] md:text-[18px] text-[#272343]">{`$${item.price} `}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}