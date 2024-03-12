import {Link} from "react-router-dom";
import {GithubIcon} from "~/assets/icons.tsx";

type props = {
    title: string,
    picture: string,
    url: string
}

export default function Job(props: props) {
    const { title, picture, url } = props;

    return (
        <article className="p-5 flex flex-col rounded-3xl bg-[#2c2c6c] hover:bg-transparent transition-all border border-[#2c2c6c] hover:border-[#4db5ff66]">
            <img src={picture} alt="" className="rounded-3xl"/>
            <h3 className="mt-5 mb-8 leading-8 text-white text-xl">{title}</h3>
            <div className="mb-4 flex">
                <Link to={url} className="hover:border-white hover:bg-white hover:text-black transition-all text-[#4db5ff] border border-[#4db5ff] py-3 px-5 rounded-md flex items-center justify-center gap-1">
                    <GithubIcon width="1em" height="1em" />
                    <span>GitHub</span>
                </Link>
            </div>
        </article>
    )
}