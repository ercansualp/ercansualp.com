import Section from "~/pages/home/components/section";
import Job from "~/pages/home/components/portfolio/job";
import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import Example from "~/assets/img/example.jpg";

export default function Portfolio(){
    const { width } = UseWindowDimensions();
    const jobs = [
        { title: "Python Flask Instagram Replica", picture: {Example}, url: "/" }
    ];

    return (
        <Section id="portfolio" title="Portfolio" description="My Projects">
            <div className={classNames({
                "grid gap-10 items-center": width && width > 600,
                "grid-cols-3": width && width >= 1025,
                "grid-cols-2": width && width < 1025 && width > 600,
            })}>
                {
                    jobs.map((job, index) => (
                        <Job key={index} title={job.title} picture={(job.picture as unknown) as string} url={job.url} />
                    ))
                }
            </div>
        </Section>
    )
}