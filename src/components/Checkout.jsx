
import master_card_2 from "../assets/mastercard-2.svg";
import chip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import apple from "../assets/apple-13.svg";
import docket from "../assets/docket.png";

const Checkout =()=>{
    return(
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
    )
}

export default Checkout;