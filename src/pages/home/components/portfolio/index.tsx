import Section from "~/pages/home/components/section";
import Project from "~/pages/home/components/portfolio/project";

export default function Portfolio(){
    return (
        <Section title="Portfolio" description="My Projects">
            <div className="grid grid-cols-3 gap-10">
                <Project />
            </div>
        </Section>
    )
}