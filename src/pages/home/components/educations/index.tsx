import Education from "~/assets/img/marmara.png";

export default function Educations() {
    return (
        <div className="mt-32 flex flex-col items-center">
            <h5 className="text-[#ffffff99] font-normal text-sm leading-6">Degrees that I have</h5>
            <h2 className="mb-12 text-[#4db5ff] font-normal text-2xl leading-10">Education</h2>
            <div className="container mx-auto rounded-3xl p-8 bg-[#2c2c6c] flex flex-col items-center w-[768px]">
                <img src={Education} alt="" className="w-[116px] h-[116px] border-[6px] border-[#4db5ff66] rounded-full"/>
                <h5 className="mt-4 text-white font-normal text-sm leading-5">Marmara University İstanbul - Computer Programming</h5>
                <small className="client__review text-[#ffffff99] font-light mt-3">2021-2023</small>
                <small className="client__review text-[#ffffff99] font-light mt-3 mx-16 text-center">
                    Marmara University is a pioneering, international and contemporary university that produces value for all its stakeholders in science, culture, arts and sports by prioritizing social values with its deep-rooted experience, aims at sustainability with the importance it attaches to lifelong learning, and is a pioneer with its multilingual education.
                </small>
            </div>
        </div>
    )
}