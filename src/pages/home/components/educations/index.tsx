import Education from "~/assets/img/marmara.png";
import Section from "~/pages/home/components/section";
import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function Educations() {
    const { width } = UseWindowDimensions();

    return (
        <Section title="Education" description="Degrees that I have">
            <div className="rounded-3xl p-8 bg-[#2c2c6c] flex flex-col items-center w-[768px] max-w-full mx-auto hover:bg-transparent transition-all border border-[#2c2c6c] ">
                <img src={Education} alt="" className="w-[116px] h-[116px] border-[6px] border-[#4db5ff66] rounded-full"/>
                <h5 className="mt-4 text-white font-normal text-sm leading-5 text-center">Marmara University İstanbul - Computer Programming</h5>
                <small className="text-[#ffffff99] font-light mt-3">2021-2023</small>
                <small className={classNames("text-[#ffffff99] font-light mt-3 text-center", {
                    "mx-16": width && width > 1025
                })}>
                    Marmara University is a pioneering, international and contemporary university that produces value for all its stakeholders in science, culture, arts and sports by prioritizing social values with its deep-rooted experience, aims at sustainability with the importance it attaches to lifelong learning, and is a pioneer with its multilingual education.
                </small>
            </div>
        </Section>
    )
}
