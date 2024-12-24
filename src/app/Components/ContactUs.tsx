import Image from 'next/image'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import trophy from "../../../public/contact/trophy.png"
import warranty from "../../../public/contact/warranty.png"
import customerSupport from "../../../public/contact/customerSupport.png"

export default function ContactUs() {
    return (
        <>
            <main className="w-full h-full bg-white px-5 md:px-10 lg:px-28 xl:px-48 py-20">
                <h1 className="text-[32px] font-semibold text-black text-center">Get In Touch With Us</h1>
                <p className="text-center text-[#9F9F9F] text-base py-2">For More Information About Our Product & Services. Please Feel Free To Drop Us
                    <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="lg:flex justify-between lg:items-start place-items-center lg:px-36 py-14">
                    <div className="w-full lg:w-[40%] grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-col md:space-y-0 lg:space-y-10 space-y-10">
                        <div className="w-full lg:w-60 lg:flex lg:gap-5 space-y-2 lg:space-y-0 lg:items-start place-items-center">
                            <FaLocationDot className="w-6 h-6 md:w-9 md:h-9" />
                            <div className='flex flex-col items-center lg:items-start space-y-2 lg:space-y-0'>
                                <h2 className="text-2xl text-black font-normal">Address</h2>
                                <p className="text-base text-black font-normal lg:text-left text-center">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-48 lg:flex gap-5 space-y-2 lg:space-y-0 lg:items-start place-items-center">
                            <FaPhoneAlt className="w-6 h-6 md:w-9 md:h-9" />
                            <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-0">
                                <h2 className="text-2xl text-black font-medium">Phone</h2>
                                <a className="text-base text-black font-normal">0315-3906279<br/>0311-3867522</a>
                            </div>
                        </div>

                        <div className="w-full lg:w-60 lg:flex gap-5 space-y-2 lg:space-y-0 lg:items-start place-items-center">
                            <FaClock className="w-6 h-6 md:w-10 md:h-10" />
                            <div className='flex flex-col items-center lg:items-start space-y-2 lg:space-y-0'>
                                <h2 className="text-2xl text-black font-medium">Working Time</h2>
                                <p className="text-base text-black font-normal lg:text-left text-center">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        </div>


                        <div className="w-full lg:w-[60%] mt-14 lg:mt-0">
                            <form className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col gap-8">
                            <div className="space-y-3">
                            <label className="text-black text-base font-medium" htmlFor="name">Your Name</label>
                            <input id="name" type="text" className="w-full h-16 px-4 outline-none border rounded-lg" placeholder="Your Name" />
                            </div>
                            <div className="space-y-3">
                            <label className="text-black text-base font-medium" htmlFor="Email">Email Address</label>
                            <input id="Email" type="email" className="w-full h-16 px-4 outline-none border rounded-lg" placeholder="abc@def.com" />
                            </div>
                            <div className="space-y-3">
                            <label className="text-black text-base font-medium" htmlFor="name">Subject</label>
                            <input id="name" type="text" className="w-full h-16 px-4 outline-none border rounded-lg" placeholder="This is an optional" />
                            </div>
                            <div className="space-y-3">
                            <label className="text-black text-base font-medium" htmlFor="message">Message</label>
                            <textarea id="message" name="text" className="w-full md:h-16 h-32 lg:h-32 py-4 px-4 outline-none border rounded-lg" placeholder="Hi! i’d like to ask about" />
                            </div>
                            <div className="">
                            <button className="w-1/2 h-16 bg-[#029FAE] text-center text-[16px] font-semibold text-white rounded-lg">Submit</button>
                            </div>
                            </form>
                        </div>
                </div>


                <div className="grid grid-cols-1 place-items-center md:flex justify-between items-center space-y-5 md:space-y-0 w-full h-auto bg-[#f4f4f5] px-6 md:px-10 lg:px-16 md:py-12 py-6">
                    <div className='md:flex place-items-center gap-4'>
                        <Image className='h-10 w-10 md:h-14 md:w-14 lg:w-20 lg:h-20' src={trophy} alt="award"/>
                        <div>
                            <h2 className='text-[16px] md:text-[20px] lg:text-[25px] text-center md:text-left text-[#242424] font-semibold'>High Quality</h2>
                            <p className='text-[#c7c7cc] text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left font-medium'>crafted from top materials</p>
                        </div>
                        </div>
                    <div className='md:flex place-items-center gap-4'>
                    <Image className='h-10 w-10 md:h-14 md:w-14 lg:w-20 lg:h-20' src={warranty} alt="warranty"/>
                        <div>
                            <h2 className='text-[16px] md:text-[20px] lg:text-[25px] text-[#242424] text-center md:text-left font-semibold'>Warranty Protection</h2>
                            <p className='text-[#c7c7cc] text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left font-medium'>Over 2 years</p>
                        </div>
                        </div>
                    <div className='md:flex place-items-center gap-4'>
                    <Image className='h-10 w-10 md:h-14 md:w-14 lg:w-20 lg:h-20' src={customerSupport} alt="support"/>
                        <div>
                            <h2 className='text-[16px] md:text-[20px] lg:text-[25px] text-[#242424] text-center md:text-left font-semibold'>24 / 7 Support</h2>
                            <p className='text-[#c7c7cc] text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left font-medium'>Dedication support</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}