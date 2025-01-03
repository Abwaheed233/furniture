import Image from "next/image"

import feature1 from "../../../public/featured/feature1.png"
import feature2 from "../../../public/featured/feature2.png"
import feature3 from "../../../public/featured/feature3.png"
import feature4 from "../../../public/featured/feature4.png"
import foamchair from "../../../public/foamchair.png"
import our from "../../../public/ourProducts/our.png"
import wingchair from "../../../public//topCategory/wingchair.png"


export default function Featured() {

    const Products = [
        {
            id: 1,
            name: "Library Stool Chair",
            image: feature1,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 2,
            name: "Library Stool Chair",
            image: feature2,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 3,
            name: "Library Stool Chair",
            image: feature3,
            label: "New",
            price: 20,
            discount: 30,
        },
        {
            id: 4,
            name: "Library Stool Chair",
            image: feature4,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 5,
            name: "Library Stool Chair",
            image: wingchair,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 6,
            name: "Library Stool Chair",
            image: foamchair,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 7,
            name: "Library Stool Chair",
            image: our,
            label: "New",
            price: 20,
            discount: null,
        },
        {
            id: 8,
            name: "Library Stool Chair",
            image: feature1,
            label: "New",
            price: 20,
            discount: null,
        },
    ]

    return (
            <main className="w-full h-auto bg-white px-5 md:px-10 lg:px-28 xl:px-48 py-8 md:py-16 lg:py-[100px]">
                <h1 className="text-[#272343] text-center text-[20px] md:text-[26px] lg:text-[32px] font-semibold">Our Products</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 py-8 place-items-stretch">
                    {
                        Products.map((item) => {
                            return (
                                <div className="relative w-full max-w-[300px] mx-auto h-[317px] self-start" key={item.id}>
                                    <Image className="w-[312px] h-[250px]" src={item.image} alt={item.name} />
                                    <div className="flex justify-between items-center py-2">
                                        <div className="space-y-2">
                                            <h6 className="text-[#007580] text-[18px]">{item.name}</h6>
                                            <h5 className="font-semibold text-[18px] text-[#272343]">{`$${item.price} `}<del className="text-[#007580] text-[16px]">{item.discount}</del></h5>
                                        </div>
                                        <div className="w-14 h-14 rounded-xl bg-[#F0F2F3] hover:bg-[#029FAE] hover:text-white p-4 lg:p-3 pt-5 lg:pt-4">
                                            <svg className="mt- " width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.52075 0.979172L3.42742 1.30917L4.31017 11.8261C4.34408 12.2399 4.53278 12.6258 4.83861 12.9066C5.14445 13.1875 5.54494 13.3427 5.96017 13.3413H15.961C16.3586 13.3418 16.743 13.1987 17.0434 12.9383C17.3439 12.6779 17.5402 12.3178 17.5963 11.9242L18.4672 5.91267C18.4904 5.7528 18.4819 5.58991 18.4421 5.43334C18.4023 5.27676 18.332 5.12956 18.2353 5.00015C18.1386 4.87075 18.0173 4.76168 17.8784 4.67918C17.7395 4.59667 17.5857 4.54236 17.4258 4.51934C17.3672 4.51292 3.73359 4.50834 3.73359 4.50834" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11.9478 7.89542H14.4897" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.55786 16.5194C5.62508 16.5165 5.69219 16.5273 5.75515 16.551C5.81811 16.5748 5.87562 16.611 5.9242 16.6575C5.97279 16.7041 6.01145 16.76 6.03787 16.8219C6.06428 16.8837 6.0779 16.9503 6.0779 17.0176C6.0779 17.0849 6.06428 17.1515 6.03787 17.2134C6.01145 17.2753 5.97279 17.3312 5.9242 17.3777C5.87562 17.4243 5.81811 17.4605 5.75515 17.4842C5.69219 17.508 5.62508 17.5187 5.55786 17.5158C5.42942 17.5103 5.30808 17.4554 5.21914 17.3626C5.13021 17.2698 5.08057 17.1462 5.08057 17.0176C5.08057 16.8891 5.13021 16.7655 5.21914 16.6726C5.30808 16.5798 5.42942 16.5249 5.55786 16.5194Z" fill="#272343" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8988 16.5194C16.0312 16.5194 16.1583 16.5721 16.252 16.6657C16.3457 16.7594 16.3983 16.8865 16.3983 17.019C16.3983 17.1515 16.3457 17.2786 16.252 17.3723C16.1583 17.466 16.0312 17.5186 15.8988 17.5186C15.7663 17.5186 15.6392 17.466 15.5455 17.3723C15.4518 17.2786 15.3992 17.1515 15.3992 17.019C15.3992 16.8865 15.4518 16.7594 15.5455 16.6657C15.6392 16.5721 15.7663 16.5194 15.8988 16.5194Z" fill="#272343" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
    )
}
