import Section from "~/pages/home/components/section";
import Project from "~/pages/home/components/portfolio/project";
import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function Portfolio(){
    const { width } = UseWindowDimensions();

    return (
        <Section title="Portfolio" description="My Projects">
            <div className={classNames({
                "grid gap-10 items-center": width && width > 600,
                "grid-cols-3": width && width >= 1025,
                "grid-cols-2": width && width < 1025 && width > 600,
            })}>
                <Project />
            </div>
        </Section>
    )
}