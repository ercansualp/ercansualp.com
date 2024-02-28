type props = {
    title: string;
    description: string;
    children: any;
}

export default function Section(props: props) {
    const { title, description, children } = props;

    return (
        <div className="mt-32 flex flex-col items-center">
            <h5 className="text-[#ffffff99] font-normal text-sm leading-6">{description}</h5>
            <h2 className="mb-12 text-[#4db5ff] font-normal text-2xl leading-10">{title}</h2>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}