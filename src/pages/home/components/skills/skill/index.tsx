import {VerifiedIcon} from "~/assets/icons.tsx";

export default function Skill(props: { title: string, level: string }) {
    const { title, level } = props;

    return (
        <div className="flex gap-x-4 text-[#4db5ff]">
            <VerifiedIcon width="1em" height="1em" className="mt-1.5" />
            <div className="flex flex-col">
                <h4 className="font-normal leading-7 text-white">{title}</h4>
                <small className="text-[#ffffff99]">{level}</small>
            </div>
        </div>
    )
}