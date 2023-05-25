import { IoClose } from "react-icons/io5";
import Checkout from "../components/Checkout.jsx";
import CardForm from "../components/CardForm";

const Pay = () => {
    return (
        <div className="main-app">
            <div className="wrapper grid grid-cols-12">
                <div className="absolute right-0 h-10 w-12 bg-slate-50">
                    <span className="h-full flex justify-center items-center">
                        <IoClose className="text-[1.3em] h-full" />
                    </span>
                </div>
                <div className='col-span-12 md:col-span-7'>
                    <CardForm />
                </div>
                <div className='col-span-12 md:col-span-5'>
                    <Checkout />
                </div>
            </div>
        </div>
    )
}

export default Pay;