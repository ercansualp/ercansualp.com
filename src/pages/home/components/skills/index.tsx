import SkillSection from "~/pages/home/components/skills/skill-section";
import Section from "~/pages/home/components/section";

export default function Skills() {
    const skills = {
        frontEnd: [
            { title: "HTML", level: "Experienced" },
            { title: "CSS", level: "Experienced" },
            { title: "Javascript", level: "Experienced" },
            { title: "ReactJS", level: "Experienced" },
            { title: "Firebase", level: "Experienced" },
            { title: "Context API", level: "Experienced" },
            { title: "Typescript", level: "Experienced" },
            { title: "Redux", level: "Experienced" },
            { title: "Jquery", level: "Experienced" },
            { title: "Bootstrap", level: "Experienced" },
            { title: "Material UI", level: "Experienced" },
            { title: "Tailwind CSS", level: "Experienced" }
        ],
        backEnd: [
            { title: "C#/ASP.NET Core", level: "Experienced" },
            { title: "SQL/NoSQL", level: "Experienced" },
            { title: "REST APIs", level: "Experienced" },
            { title: "PHP", level: "Experienced" },
            { title: "NodeJS", level: "Experienced" }
        ]
    };

    return (
        <>
            <Section title="My Skills" description="What Skills I Have" id="skills">
                <div className="container grid grid-cols-2 gap-8">
                    <SkillSection skills={skills.frontEnd} title="Frontend Development" />
                    <SkillSection skills={skills.backEnd} title="Backend Development" />
                </div>
            </Section>
        </>
    )
}