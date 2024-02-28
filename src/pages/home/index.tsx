import Header from "~/pages/home/components/header";
import About from "~/pages/home/components/about";

export default function Home() {
    return (
        <div className="h-screen bg-black">
            <Header />
            <About />
        </div>
    )
}