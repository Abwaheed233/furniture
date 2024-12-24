import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
import Chair from "../../../public/Chair.png"
import Logo from "../../../public/Logo.png"
import Logo1 from "../../../public/Logo1.png"
import Logo2 from "../../../public/Logo2.png"
import Logo3 from "../../../public/Logo3.png"
import Logo4 from "../../../public/Logo4.png"
import Logo5 from "../../../public/Logo5.png"
import Logo6 from "../../../public/Logo6.png"

export default function Hero(){
    return(
        <>
        <main className="bg-white w-full h-auto px-5 md:px-10 lg:px-28 xl:px-48">
            <div className="relative flex flex-col md:flex-row md:justify-between text-center md:text-left items-center w-full h-[550px] rounded-bl-[48px] bg-[#F0F2F3] py-16  px-5 md:p-[70px]">
                <div className="md:order-1 order-2 max-w-[450px] min-w-auto py-5 md:py-0 space-y-3 md:space-y-8">
                    <p className="text-[10px] md:text-[14px]">WELCOME TO CHAIRY</p>
                    <h1 className="text-[#272343] md:text-4xl text-2xl lg:text-6xl font-bold ">Best Furniture Collection for your interior.</h1>
                    <div className="flex justify-center md:justify-start">
                    <div className="bg-[#029FAE] hover:bg-white group cursor-pointer w-44 h-14 px-8 flex justify-between items-center rounded-lg">
                        <h2 className="font-semibold group-hover:text-[#029FAE] text-white mb-1">Shop Now</h2>
                        <FaArrowRightLong className="ml-2 group-hover:fill-[#029FAE] fill-white" />
                        </div>
                        </div>
                </div>
                <Image className="md:order-2 order-1 min-w-28 max-w-[160px]" src={Chair} alt="Chair" />
            </div>

            <div className="lg:flex lg:justify-between grid grid-cols-2 md:grid-cols-5 items-center justify-items-center py-[50px]">
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo} alt="logo-1"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo1} alt="logo-2"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo2} alt="logo-3"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo3} alt="logo-4"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo4} alt="logo-5"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo5} alt="logo-6"/>
                <Image className="max-w-24 max-h-24 min-w-16 min-h-16" src={Logo6} alt="logo-6"/>
            </div>
        </main>
        </>
    )
}