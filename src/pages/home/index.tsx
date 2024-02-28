import Header from "~/pages/home/components/header";
import About from "~/pages/home/components/about";
import Skills from "~/pages/home/components/skills";
import Educations from "~/pages/home/components/educations";
import Experiences from "~/pages/home/components/experiences";
import Portfolio from "~/pages/home/components/portfolio";

export default function Home() {
    return (
        <div className="bg-black overscroll-none">
            <Header />
            <About />
            <Skills />
            <Educations />
            <Experiences />
            <Portfolio />
        </div>
    )
}