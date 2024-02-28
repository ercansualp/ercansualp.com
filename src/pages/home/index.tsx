import Header from "~/pages/home/components/header";
import About from "~/pages/home/components/about";
import Skills from "~/pages/home/components/skills";
import Educations from "~/pages/home/components/educations";
import Experiences from "~/pages/home/components/experiences";
import Portfolio from "~/pages/home/components/portfolio";
import Contact from "~/pages/home/components/contact";
import Footer from "~/pages/home/components/footer";
import Background from "~/assets/img/background.png";

export default function Home() {
    return (
        <div id="#" className="overscroll-none bg-[#1f1f38]" style={{ backgroundImage: `url("${Background}")` }}>
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