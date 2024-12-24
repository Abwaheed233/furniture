import Image from "next/image";

import feature4 from "../../../public/featured/feature4.png"
import wingchair from "../../../public/topCategory/wingchair.png"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

export default function cart() {

    const products = [
        {
            id: 1,
            name: "Wing Chair",
            image: wingchair,
            price: 100,
            quantity: 2,
            color: "Ashen Slate/Cobalt Bliss",
            size: "L",
        },
        {
            id: 2,
            name: "Library Stool Chair",
            image: feature4,
            price: 150,
            quantity: 1,
            color: "Ashen Slate/Cobalt Bliss",
            size: "M",
        }
    ]
    return (
        <>
            <main className="bg-white px-5 md:px-10 lg:px-28 xl:px-48 py-20">
                <div className="grid grid-cols-1 gap-5 xl:gap-0 xl:flex justify-between">
                    <div className="w-full xl:w-9/12 px-5">
                        <h1 className="text-[16px] md:text-[22px] font-semibold text-[#111111]">Bag</h1>
                        <div className="">
                            {
                                products.map((product) => (
                                    <div className="full" key={product.id}>
                                        <div className="flex justify-between items-start gap-5 py-5">
                                            <Image className="min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px]" src={product.image} alt={product.name} />
                                            <div className="space-y-2 sm:space-y-5  lg:space-y-6">
                                                <h5 className="text-[12px] md:text-[14px] lg:text-[16px] text-[#272343] font-medium md:whitespace-nowrap">{product.name}</h5>
                                                <div>
                                                    <p className="text-[10px] md:text-[13px] lg:text-[16px] text-[#757575] whitespace-nowrap">{product.color}</p>
                                                    <div className="flex justify-between text-[#757575]">
                                                        <p className="text-[10px] md:text-[13px] lg:text-[16px] whitespace-nowrap">Size{`    ${product.size}`}</p>
                                                        <p className="text-[10px] md:text-[13px] lg:text-[16px] whitespace-nowrap">Quantity{`    ${product.quantity}`}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-7">
                                                    <FaRegHeart className="fill-[#272343] opacity-90 max-w-7 max-h-7 min-w-4 min-h-4" />
                                                    <RiDeleteBin6Line className="fill-[#272343] opacity-90 max-w-7 max-h-7 min-w-4 min-h-4" />
                                                </div>
                                            </div>
                                            <div className="w-auto md:w-[390px]">
                                                <p className="text-[10px] md:text-[14px] text-[#111111] text-right">MRP: ${product.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="w-full xl:w-1/3 px-5">
                        <h1 className="text-[18px] md:text-[22px] font-semibold text-[#111111]" >Summary</h1>
                        <div className="flex justify-between items-start lg:items-center py-5">
                            <div className="space-y-7">
                                <p className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">Subtotal</p>
                                <p className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">Estimated Delivery & Handling</p>
                            </div>
                            <div className="space-y-7">
                                <p className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">${products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}</p>
                                <p className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">Free</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-4">
                            <h2 className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">Total</h2>
                            <p className="text-[10px] md:text-[13px] xl:text-[15px] font-medium text-[#111111]">${products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}</p>
                        </div>
                        <hr />
                        <button className="w-full h-14 bg-[#029FAE] mt-7 rounded-full text-white text-[13px] md:text-[14px] lg:text-[15px]">Member Checkout</button>
                    </div>
                </div>
            </main>
        </>
    )
}
