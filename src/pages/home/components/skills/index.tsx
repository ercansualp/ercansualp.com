import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import classNames from "classnames";

export default function Skills() {
    const { height, width } = UseWindowDimensions();

    return (
        <div className="mt-32 flex flex-col items-center">
            <h5 className="text-[#ffffff99] font-normal text-[13.28px] leading-[22.576px]">What Skills I Have</h5>
            <h2 className="text-[#4db5ff] font-normal text-2xl leading-10 mb-12">My Skills</h2>
            <div className="container grid grid-cols-2 gap-8">
                <div className={classNames("py-10 px-20 bg-[#2c2c6c] rounded-3xl flex flex-col gap-y-8", {
                    "col-span-full mx-5": width < 1025
                })}>
                    <h3 className="text-[#4db5ff] font-normal text-lg leading-10 text-center">Frontend Development</h3>
                    <div className="grid grid-cols-2 gap-y-8">
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames("py-10 px-20 bg-[#2c2c6c] rounded-3xl flex flex-col gap-y-8", {
                    "col-span-full mx-5": width < 1025
                })}>
                    <h3 className="text-[#4db5ff] font-normal text-lg leading-10 text-center">Backend Development</h3>
                    <div className="grid grid-cols-2 gap-y-8">
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 16 16" className="mt-1.5" height="1em" width="1em"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                            <div className="flex flex-col">
                                <h4 className="font-normal leading-7 text-white">HTML</h4>
                                <small className="text-[#ffffff99]">Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}