import Image from "next/image"

import feature3 from "../../../public/featured/feature3.png"
import feature4 from "../../../public/featured/feature4.png"
import our1 from "../../../public/ourProducts/our1.png"
import wingchair from "../../../public//topCategory/wingchair.png"
import deskchair from "../../../public/topCategory/deskchair.png"
import woodenchair from "../../../public/topCategory/woodenchair.png"

export default function NewsLetter (){
    const NewsLetter = [
        {
            id: 1,
            name: "Library Stool Chair",
            image: feature3,
            label: "New",
            price: 20,
            discount: 30,
        },
        {
            id: 2,
            name: "Library Stool Chair",
            image: feature4,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 3,
            name: "Library Stool Chair",
            image: wingchair,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 4,
            name: "Library Stool Chair",
            image: deskchair,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 5,
            name: "Wing Chair",
            image: our1,
            price: 20,
            products: "157 "
        },
        {
            id: 6,
            name: "Wooden Chair",
            image: woodenchair,
            price: 20,
            products: "154 "
        },

    ]
    return(
        <>
            <main className="bg-[#f4f4f5] w-full h-auto lg:h-[600px] px-5 md:px-10 lg:px-28 xl:px-48 py-16">
                <h1 className="text-center text-[24px] md:text-[32px] lg:text-[40px] font-semibold">Or Subscribe To The Newsletter</h1>
                <div className="flex justify-center pt-12 gap-5">
                <input type="text" className="w-1/2 h-10 bg-transparent px-4 outline-none border-b-2 border-black" placeholder="Enter Address"></input>
                <button className="border-b-2 px-2 w-[20%] lg:w-[8%] h-10 text-[12px] md:text-[16px] border-black">SUBMIT</button>
                </div>
                <h1 className="text-center text-[24px] md:text-[32px] lg:text-[40px] mt-10 lg:mt-5 font-semibold">Follow Products And Discounts On Instagram</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-14 mt-16 place-items-stretch">
                    {
                        NewsLetter.map((item) => {
                            return (
                                <div className="relative w-full max-w-[300px] mx-auto h-auto p-2 bg-[#f9f9f9] rounded-lg shadow-md" key={item.id}>
                                    <Image className="rounded-lg" src={item.image} alt={item.name} />
                                </div>
                                )
                            }
                        )
                    }
                </div>
            </main>
        </>
    )
}