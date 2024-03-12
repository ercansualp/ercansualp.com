import {ReactNode} from "react";

type props = {
    children: string|ReactNode,
    url: string
}

export const Link = (props: props) => {
    const { children, url } = props;

    return (
        <a href={url} target="_blank" className="rounded-xl bg-[#1f1f38] border border-[#1f1f38] p-3 group hover:bg-transparent transition-all">
            {children}
        </a>
    )
}