import {Link} from "react-router-dom";

export default function About() {
    return (
        <div className="mt-32 flex flex-col items-center">
            <h5 className="text-[13.28px] leading-[22.576px] font-medium text-[#ffffff99]">Get To Know</h5>
            <h2 className="text-[#4db5ff] font-normal text-2xl leading-[40.8px]">About Me</h2>
            <div className="text-white leading-[27.2px] text-[#ffffff99] mt-8 mb-10">
                Hakkımda..
            </div>
            <Link to={"/"} className="bg-[#4db5ff] text-[#1f1f38] rounded-md py-3 px-5">
                Let's Talk
            </Link>
        </div>
    )
}