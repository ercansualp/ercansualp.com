import Header from "~/pages/home/components/header";
import About from "~/pages/home/components/about";
import Skills from "~/pages/home/components/skills";
import Educations from "~/pages/home/components/educations";
import Experiences from "~/pages/home/components/experiences";
import Portfolio from "~/pages/home/components/portfolio";
import Contact from "~/pages/home/components/contact";
import Footer from "~/pages/home/components/footer";

export default function Home() {
    return (
        <div className="bg-black overscroll-none">
            <Header />
            <About />
            <Skills />
            <Educations />
            <Experiences />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}