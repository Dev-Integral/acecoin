import master_card from "./assets/mc_symbol.svg";
import master_card_2 from "./assets/mastercard-2.svg";
import chip from "./assets/chip.png";
import wifi from "./assets/wifi.png";
import apple from "./assets/apple-13.svg";
import docket from "./assets/docket.png";
import verified_badge from "./assets/verified-badge.svg";
import { GoPencil } from "react-icons/go";
import { TbGridDots } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { GiSwipeCard } from "react-icons/gi";

function App() {
  return (
    <div className="main-app">
      <div className="wrapper grid grid-cols-12">
        <div className="absolute right-0 h-10 w-12 bg-slate-50">
          <span className="h-full flex justify-center items-center">
            <IoClose className="text-[1.3em] h-full" />
          </span>
        </div>
        <div className='col-span-12 md:col-span-7'>
          <div className="form">
            <header className="flex justify-between items-center mb-16">
              <div className="flex justify-between items-center">
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
                  <div className="flex justify-between items-center">
                    <div className="mb-14">
                      <h2 className="blue-header text-[1.1em] font-semibold mb-2">Card Number</h2>
                      <p className="grey-text text-[.77em]">Enter the 16-digit card number on the card</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 cursor-pointer">
                      <GoPencil size={20} className="gen-btn" />
                      <span className="cursor-pointer gen-btn">Edit</span>
                    </div>
                  </div>
                  <div className="relative border h-12 rounded-lg flex items-center pl-14 pr-14 hover:border-[#0875b9] hover:border-2">
                    <img className="absolute top-2 left-3" height={40} width={40} src={master_card} alt="mastercard" />
                    <div className="">
                      <input type="number" className="placeholder:opacity-40 h-11 w-14 pl-3 mr-2 focus:outline-0 focus:text-[#1da1f2] focus:bg-[#edf3ff] blue-header text-[1.1em] font-semibold" placeholder="2412" />
                      <span className="text-[1.1em] font-semibold blue-header opacity-60">-</span>
                      <input type="number" className="placeholder:opacity-40 h-11 w-14 pl-3 mr-2 focus:outline-0 focus:text-[#1da1f2] focus:bg-[#edf3ff] blue-header text-[1.1em] font-semibold" placeholder="7512" />
                      <span className="text-[1.1em] font-semibold blue-header opacity-60">-</span>
                      <input type="number" className="placeholder:opacity-40 h-11 w-14 pl-3 mr-2 focus:outline-0 focus:text-[#1da1f2] focus:bg-[#edf3ff] blue-header text-[1.1em] font-semibold" placeholder="2412" />
                      <span className="text-[1.1em] font-semibold blue-header opacity-60">-</span>
                      <input type="number" className="placeholder:opacity-40 h-11 w-14 pl-3 focus:outline-0  focus:text-[#1da1f2] focus:bg-[#edf3ff] blue-header text-[1.1em] font-semibold" placeholder="2412" />
                    </div>
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
        </div>
        <div className='col-span-12 md:col-span-5'>
          <div className="relative h-full w-[90%] float-right">
            <span className="block h-[1.5em] w-[5em] gen-btn-bg absolute translate-x-[-50%] left-[50%] top-[5em] md:-top-2 "></span>
            <div className="credit-card z-99 absolute top-[5em] md:top-0">
              <div className="flex justify-between items-center mt-2 mb-[8em]">
                <img src={chip} alt="chip" className="w-7" />
                <img src={wifi} alt="wifi" className="w-7" />
              </div>
              <div className="relative blue-header mb-6">
                <span className="capitalize mb-2 block font-[0.88em]">jonathan micheal</span>
                <div className="flex gap-4 items-center">
                  <div className="flex justify-between items-center gap-1">
                    <span className="w-1.5 h-1.5 timer-bg block rounded-full"></span>
                    <span className="w-1.5 h-1.5 timer-bg block rounded-full"></span>
                    <span className="w-1.5 h-1.5 timer-bg block rounded-full"></span>
                    <span className="w-1.5 h-1.5 timer-bg block rounded-full"></span>
                  </div>
                  <span className="block font-semibold">3456</span>
                </div>
              </div>
              <div className="blue-header font-semibold relative flex justify-between items-center">
                <span className="capitalize">09/22</span>
                <img src={master_card_2} alt="mastercard" className="h-[2.5em]" />
              </div>
              <div className="card_design">
                <span className="inner"></span>
              </div>
            </div>
            <div className="bg-[#f0f3f8] absolute w-full rounded-lg h-[82%] bottom-0">
              <div className="relative top-[15.7em] p-[3em]">
                <div className="flex justify-between items-center mb-1">
                  <span className="capitalize text-[#8e96a3]">company</span>
                  <span className="flex gap-2">
                    <img src={apple} alt="apple" className="h-5" />
                    <span className="capitalize blue-header font-semibold">apple</span>
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="capitalize text-[#8e96a3]">order number</span>
                  <span className="flex gap-2">
                    <span className="capitalize blue-header font-semibold">1266201</span>
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="capitalize text-[#8e96a3]">product</span>
                  <span className="flex gap-2">
                    <span className="capitalize blue-header font-semibold">Macbook air</span>
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="uppercase text-[#8e96a3]">vat(20%)</span>
                  <span className="flex gap-2">
                    <span className="capitalize blue-header font-semibold">$100.00</span>
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="absolute w-full border border-dashed flex items-center left-0 mt-2">
                  </div>
                  <div className="bg-white h-8 w-8 rounded-full relative -left-16 bottom-0"></div>
                  <div className="bg-white h-8 w-8 rounded-full relative -right-16 bottom-0"></div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className=" block text-[#8e96a3]">You have to Pay</span>
                    <span className="block">
                      <span className="blue-header font-bold text-[2em]">549</span>
                      <span className="blue-header font-semibold">.99</span>
                      <span className="uppercase text-[#8e96a3] ml-1">USD</span>
                    </span>
                  </div>
                  <img src={docket} alt="docket" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
