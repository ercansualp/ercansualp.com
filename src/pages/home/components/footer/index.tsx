import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="mt-28 py-12 flex flex-col items-center bg-[#4db5ff] text-[#1f1f38]">
            <Link to={"/"} className="text-3xl mb-8">ERCAN SUALP</Link>
            <ul className="mb-12 flex items-center justify-center gap-x-8">
                <li className="hover:text-white"><Link to={"/"}>Home</Link></li>
                <li className="hover:text-white"><Link to={"/"}>About</Link></li>
                <li className="hover:text-white"><Link to={"/"}>Skills</Link></li>
                <li className="hover:text-white"><Link to={"/"}>Portfolio</Link></li>
                <li className="hover:text-white"><Link to={"/"}>Education</Link></li>
                <li className="hover:text-white"><Link to={"/"}>Contact</Link></li>
            </ul>
            <div className="mb-12 flex items-center justify-center gap-x-4">
                <Link to={"/"} className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
                    <svg className="text-white transition-all group-hover:text-[#1f1f38]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </Link>
                <Link to={"/"} className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
                    <svg className="text-white transition-all group-hover:text-[#1f1f38]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" /></svg>
                </Link>
                <Link to={"/"} className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
                    <svg className="text-white transition-all group-hover:text-[#1f1f38]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                </Link>
            </div>
            <div className="mb-16">
                <small className="text-[#1f1f38]">2023 © Ercan SUALP Personal Website. All rights reserved.</small>
            </div>
            <div className="fixed z-50 left-1/5 bottom-8 bg-[#0000004d] rounded-[48px] py-3 px-7 flex items-center justify-center gap-x-3">
                <Link to={"/"} className="rounded-full p-3.5 bg-[#4db5ff] transition-all">
                    <svg stroke="currentColor" fill="#1f1f38" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" /></svg>
                </Link>
                <Link to={"/"} className="rounded-full p-3.5 hover:bg-[#0000004d] transition-all">
                    <svg stroke="currentColor" fill="#ffffff99" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                </Link>
                <Link to={"/"} className="rounded-full p-3.5 hover:bg-[#0000004d] transition-all">
                    <svg stroke="currentColor" fill="#ffffff99" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path d="M8 6h9v2H8z"></path></svg>
                </Link>
                <Link to={"/"} className="rounded-full p-3.5 hover:bg-[#0000004d] transition-all">
                    <svg stroke="currentColor" fill="#ffffff99" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"></path></g></svg>
                </Link>
                <Link to={"/"} className="rounded-full p-3.5 hover:bg-[#0000004d] transition-all">
                    <svg stroke="currentColor" fill="#ffffff99" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M7 9h10v2H7zm0 4h7v2H7z"></path></svg>
                </Link>
            </div>
        </div>
    )
}