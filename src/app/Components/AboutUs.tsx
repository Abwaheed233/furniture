import feature1 from "../../../public/featured/feature1.png"
import Image from "next/image"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { FaRegCreditCard } from "react-icons/fa6";
import Large from "../../../public/about/Large.png"
import Photo from "../../../public/about/Photo.png"
import Photo1 from "../../../public/about/Photo1.png"

export default function AboutUs() {
    return (
        <>
            <main className="bg-white w-full h-full px-5 md:px-10 lg:px-28 xl:px-48 py-20">
                <div className="flex flex-col lg:flex-row lg:justify-between  gap-5">
                    <div className="flex flex-col justify-between bg-[#007580] w-auto h-auto lg:w-1/2 lg:h-[400px] p-10">
                        <div className="space-y-5">
                            <h1 className="text-white text-[32px] font-bold">About Us - Comforty</h1>
                            <p className="text-white text-[18px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                        </div>
                        <div className="flex justify-start">
                            <button className="w-auto px-8 py-4 bg-[#258992] text-white text-[16px]">View Collection</button>
                        </div>
                    </div>

                    <div className="bg-[#acb9c0] w-auto h-auto lg:w-1/2 lg:h-[400px]">
                        <Image className="w-full h-full" src={feature1} alt="Ad" />
                    </div>
                </div>

                {/* second section  */}
                <div className="py-20">
                    <h1 className="text-[#272343] text-[32px] font-semibold text-center">What Makes Our Brand Different</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-28 pt-10 place-items-center">
                        <div className="bg-[#f9f9f9] flex flex-col justify-between w-auto h-auto md:w-72 md:h-60 p-4 md:p-8 space-y-2">
                            <div className="space-y-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="none" />
                                    <path d="M12 12H3V13.5H12V12Z" fill="#007580" />
                                    <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#007580" />
                                    <path d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z" fill="#007580" />
                                </svg>
                                <h5 className="text-[#007580] text-[14px] md:text-[20px]">Next day as standard</h5>
                            </div>
                            <p className="text-[#007580] text-[12px] md:text-[15px]">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="bg-[#f9f9f9] flex flex-col justify-between w-auto h-auto md:w-72 md:h-60 p-4 md:p-8 space-y-2">
                            <div className="space-y-3">
                                <IoCheckmarkCircleOutline className="w-[24px] h-[24px] text-[#007580]" />
                                <h5 className="text-[#007580] text-[14px] md:text-[20px]">Next day as standard</h5>
                            </div>
                            <p className="text-[#007580] text-[12px] md:text-[15px]">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="bg-[#f9f9f9] flex flex-col justify-between w-auto h-auto md:w-72 md:h-60 p-4 md:p-8 space-y-2">
                            <div className="space-y-3">
                                <FaRegCreditCard className="w-[22px] h-[22px] text-[#007580]" />
                                <h5 className="text-[#007580] text-[14px] md:text-[20px]">Next day as standard</h5>
                            </div>
                            <p className="text-[#007580] text-[12px] md:text-[15px]">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="bg-[#f9f9f9] flex flex-col justify-between w-auto h-auto md:w-72 md:h-60 p-4 md:p-8 space-y-2">
                            <div className="space-y-3">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" transform="translate(0.544922)" fill="none" />
                                    <path d="M19.2949 1.5C17.6327 1.50275 16.01 2.00708 14.6391 2.94704C13.2682 3.887 12.2128 5.21881 11.6111 6.7683C11.1291 6.06903 10.4844 5.49727 9.73259 5.10216C8.98077 4.70705 8.14424 4.50041 7.29492 4.5H5.04492V6.75C5.04647 8.14191 5.60009 9.47637 6.58432 10.4606C7.56855 11.4448 8.90301 11.9985 10.2949 12H11.0449V18.787C9.32222 18.9554 7.7121 19.7191 6.49167 20.9465L7.55217 22.0071C8.17956 21.3798 8.93826 20.8995 9.77361 20.6006C10.609 20.3018 11.5002 20.192 12.3831 20.279C13.266 20.3661 14.1186 20.6478 14.8796 21.104C15.6405 21.5602 16.2908 22.1794 16.7836 22.9172L18.0298 22.0826C17.415 21.1638 16.6043 20.3926 15.6559 19.8244C14.7075 19.2562 13.6451 18.9052 12.5449 18.7965V12H13.2949C15.4822 11.9975 17.5792 11.1275 19.1258 9.58089C20.6725 8.03425 21.5424 5.93727 21.5449 3.75V1.5H19.2949ZM10.2949 10.5C9.30071 10.4989 8.34754 10.1034 7.64452 9.4004C6.9415 8.69738 6.54605 7.74421 6.54492 6.75V6H7.29492C8.28915 6.00107 9.24236 6.3965 9.94539 7.09953C10.6484 7.80256 11.0438 8.75577 11.0449 9.75V10.5H10.2949ZM20.0449 3.75C20.0429 5.5396 19.3311 7.25534 18.0657 8.52078C16.8003 9.78622 15.0845 10.498 13.2949 10.5H12.5449V9.75C12.5469 7.9604 13.2587 6.24466 14.5241 4.97922C15.7896 3.71378 17.5053 3.00199 19.2949 3H20.0449V3.75Z" fill="#007580" />
                                </svg>
                                <h5 className="text-[#007580] text-[14px] md:text-[20px]">Next day as standard</h5>
                            </div>
                            <p className="text-[#007580] text-[12px] md:text-[15px]">Order before 3pm and get your order the next day as standard</p>
                        </div>
                    </div>
                </div>


                {/* Third section  */}
                <div className="">
                    <h1 className="text-[#272343] text-[32px] font-semibold">Our Popular Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between lg:gap-5 gap-24 py-10">
                        <div className="w-auto lg:w-1/2 h-auto">
                            <Image className="h-full lg:h-[375px] w-full" src={Large} alt="Large" />
                            <p className="text-[#2A254B] text-[16px] md:text-[20px] py-2">The Poplar suede sofa</p>
                            <p className="text-[#2A254B] text-[14px] md:text-[18px]">$99.00</p>
                        </div>
                        <div className="w-auto lg:w-1/3 h-auto">
                            <Image className="h-full lg:h-[375px] w-full" src={Photo} alt="Large2" />
                            <p className="text-[#2A254B] text-[16px] md:text-[20px] py-2">The Dandy Chair</p>
                            <p className="text-[#2A254B] text-[14px] md:text-[18px]">$99.00</p>
                        </div>
                        <div className="w-auto lg:w-1/3 h-auto">
                            <Image className="h-full lg:h-[375px] w-full" src={Photo1} alt="Large3" />
                            <p className="text-[#2A254B] text-[16px] md:text-[20px] py-2">The Dandy Chair</p>
                            <p className="text-[#2A254B] text-[14px] md:text-[18px]">$99.00</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}