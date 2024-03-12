import {Link} from "react-router-dom";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import classNames from "classnames";
import FooterItem from "~/pages/home/components/footer/footer-item";
import {AboutIcon, ContactIcon, HomeIcon, PortfolioIcon, SkillsIcon} from "~/assets/icons.tsx";

export default function Footer() {
    const { width } = UseWindowDimensions();
    const footerItems = [
        { url: "#", picture: <HomeIcon width="1em" height="1em" className="text-[#1f1f38]" /> },
        { url: "#about", picture: <AboutIcon width="1em" height="1em" className="text-[#ffffff99]" /> },
        { url: "#skills", picture: <SkillsIcon width="1em" height="1em" className="text-[#ffffff99]" /> },
        { url: "#portfolio", picture: <PortfolioIcon width="1em" height="1em" className="text-[#ffffff99]" /> },
        { url: "#contacts", picture: <ContactIcon width="1em" height="1em" className="text-[#ffffff99]" /> }
    ];

    return (
        <div className="mt-28 py-12 flex flex-col items-center bg-[#4db5ff] text-[#1f1f38]">
            <Link to={"/"} className="text-3xl mb-8">ERCAN SUALP</Link>
            <ul className={classNames("mb-12 flex items-center justify-center gap-8", {
                "flex-col": width && width < 601
            })}>
                <li className="hover:text-white"><a href="#">Home</a></li>
                <li className="hover:text-white"><a href="#about">About</a></li>
                <li className="hover:text-white"><a href="#skills">Skills</a></li>
                <li className="hover:text-white"><a href="#portfolio">Portfolio</a></li>
                <li className="hover:text-white"><a href="#education">Education</a></li>
                <li className="hover:text-white"><a href="#contact">Contact</a></li>
            </ul>
            <div className="mb-12 flex items-center justify-center gap-x-4">
                <a href="https://github.com/ercansualp" target="_blank" className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
                    <svg width="1em" height="1em" viewBox="0 0 48 48" version="1.1" id="Shopicons" x="0" y="0"><path d="M0 .011h48v48H0v-48z" className="group-hover:text-white transition-all fill-transparent" /><path className="group-hover:fill-black fill-white" d="M30 44.004v-10c0-.884-.197-1.722-.542-2.479.825-.167 1.65-.358 2.472-.601 2.527-.746 6.154-3.839 7.226-6.863 1.188-3.356 1.188-6.76 0-10.116l-.001-.001c-.213-.603-.537-1.211-.998-1.868.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.608-.019-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.822.243 1.647.434 2.472.601A5.946 5.946 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253l12-.009z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/ercan-sualp-1b907b236" target="_blank" className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
                    <svg className="text-white transition-all group-hover:text-[#1f1f38]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                </a>
            </div>
            <div className="mb-16">
                <small className="text-[#1f1f38]">{new Date().getFullYear()} &copy; Ercan SUALP Personal Website. All rights reserved.</small>
            </div>
            <div className="fixed z-50 left-1/5 bottom-8 bg-[#0000004d] rounded-[48px] py-3 px-7 flex items-center justify-center gap-x-3">
                {
                    footerItems.map((item, index) => (
                        <FooterItem key={index} url={item.url} >
                            {item.picture}
                        </FooterItem>
                    ))
                }
            </div>
        </div>
    )
}