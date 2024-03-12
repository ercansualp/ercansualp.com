import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import Skill from "../skill";

type skill = {
    title: string,
    level: string
}

type props = {
    skills: skill[],
    title: string
}

export default function SkillSection(props: props) {
    const { skills, title } = props;
    const { width } = UseWindowDimensions();

    return (
        <div className={classNames("py-10 px-20 bg-[#2c2c6c] rounded-3xl flex flex-col gap-y-8 transition-all hover:bg-transparent border border-[#2c2c6c]", {
            "col-span-full mx-5": width && width < 1025,
            "px-4 py-8": width && width < 601,
        })}>
            <h3 className="text-[#4db5ff] font-normal text-lg leading-10 text-center">{title}</h3>
            <div className="grid grid-cols-2 gap-8">
                {
                    skills.map((skill, index) => (
                        <Skill key={index} title={skill.title} level={skill.level} />
                    ))
                }
            </div>
        </div>
    )
}