import master_card from "../assets/mc_symbol.svg";
import verified_badge from "../assets/verified-badge.svg";
import { GoPencil } from "react-icons/go";
import { TbGridDots } from "react-icons/tb";
import { GiSwipeCard } from "react-icons/gi";

const CardForm = () => {
    return (
        <div className="form">
            <header className="md:flex justify-between items-center mb-16">
                <div className="md:flex justify-between items-center">
                    <span className="h-[3em] w-[3em] circle-bg rounded-full mr-3 flex justify-center items-center"><GiSwipeCard size={25} className="text-white" /></span>
                    <h1 className="blue-header text-[1.75em] font-semibold">AceCoin<span className="font-light">Pay</span></h1>
                </div>
                <div className="">
                    <span className="timer-bg h-[1.9em] w-[1.3em] text-white rounded-[4px] inline-flex justify-center items-center ml-[2px]">1</span>
                    <span className="timer-bg h-[1.9em] w-[1.3em] text-white rounded-[4px] inline-flex justify-center items-center ml-[2px]">0</span>
                    <span className="relative right-[-1px]">:</span>
                    <span className="timer-bg h-[1.9em] w-[1.3em] text-white rounded-[4px] inline-flex justify-center items-center ml-[2px]">1</span>
                    <span className="timer-bg h-[1.9em] w-[1.3em] text-white rounded-[4px] inline-flex justify-center items-center ml-[2px]">1</span>
                </div>
            </header>
            <section>
                <form>
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-14">
                            <div className="">
                                <h2 className="blue-header text-[1.1em] font-semibold mb-2">Card Number</h2>
                                <p className="grey-text text-[.77em]">Enter the 16-digit card number on the card</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <GoPencil size={20} className="gen-btn" />
                                <span className="cursor-pointer gen-btn">Edit</span>
                            </div>
                        </div>
                        <div className="flex w-full relative">
                            <img className="absolute top-2 left-3" height={40} width={40} src={master_card} alt="mastercard" />
                            <input placeholder="2412     -     7512     -     3412     -     3456" type="number" className="opacity-40 blue-header text-[1.1em] font-semibold border h-12 rounded-lg pr-14 pl-14 w-full focus:outline-[#0875b9] focus:text-[#1da1f2] focus:bg-[#edf3ff]" />
                            <img className="absolute top-2.5 right-4" height={25} width={25} src={verified_badge} alt="verified badge" />
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                                <h2 className="blue-header text-[1.1em] font-semibold mb-2">CVV Number</h2>
                                <p className="grey-text text-[.77em]">Enter the 3 or 4 number on the card</p>
                            </div>
                            <div className="flex w-full relative">
                                <TbGridDots size={28} className="absolute right-4 top-2.5 grey-text" />
                                <input placeholder="327" type="number" className="opacity-40 blue-header text-[1.1em] font-semibold border h-12 rounded-lg text-center w-full focus:outline-[#0875b9] focus:text-[#1da1f2] focus:bg-[#edf3ff]" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                                <h2 className="blue-header text-[1.1em] font-semibold mb-2">Expiry Date</h2>
                                <p className="grey-text text-[.77em]">Enter the expration date of the card</p>
                            </div>
                            <div className="flex w-full relative items-center gap-3">
                                <input placeholder="09" type="number" className="placeholder:opacity-40 blue-header text-[1.1em] font-semibold border h-12 rounded-lg text-center w-full focus:outline-[#0875b9] focus:text-[#1da1f2] focus:bg-[#edf3ff]" />
                                <span className="blue-header text-[1em] font-semibold">/</span>
                                <input placeholder="22" type="number" className="placeholder:opacity-40 blue-header text-[1.1em] font-semibold border h-12 rounded-lg text-center w-full focus:outline-[#0875b9] focus:text-[#1da1f2] focus:bg-[#edf3ff]" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                                <h2 className="blue-header text-[1.1em] font-semibold mb-2">Password</h2>
                                <p className="grey-text text-[.77em]">Enter your Dynamic password</p>
                            </div>
                            <div className="flex w-full relative">
                                <TbGridDots size={28} className="absolute right-4 top-2.5 grey-text" />
                                <input placeholder="1234" type="password" className="placeholder:opacity-40 blue-header text-[1.1em] font-semibold border h-12 rounded-lg pl-4 w-full focus:outline-[#0875b9] focus:text-[#1da1f2] focus:bg-[#edf3ff]" />
                            </div>
                        </div>
                    </div>
                    <button className="gen-btn-bg text-white text-center w-full rounded-lg h-14 hover:bg-[#0645b2]">Pay Now</button>
                </form>
            </section>
        </div>
    )
}

export default CardForm;