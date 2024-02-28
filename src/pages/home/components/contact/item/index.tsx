import {Link} from "react-router-dom";

type props = {
    logo: any;
    title: string;
    actionText: string;
    contentText: string;
    action: string;
}

export default function Item(props: props) {
    const { logo, title, actionText, contentText, action } = props;

    return (
        <article className="rounded-2xl transition-all border border-[#2c2c6c] hover:border-[#4db5ff66] hover:bg-transparent bg-[#2c2c6c] flex flex-col items-center p-5">
            {logo}
            <h4 className="text-white my-2">{title}</h4>
            <h5 className="text-[#ffffff99] text-sm font-medium leading-5">{contentText}</h5>
            <Link to={action} target="_blank" className="mt-3 text-[#4db5ff] text-xs leading-5 hover:text-white">{actionText}</Link>
        </article>
    )
}