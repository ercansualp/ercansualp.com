type props = {
    url: string,
    children: ReactNode
}

export default function FooterItem(props: props) {
    const { url, children } = props;

    return (
        <a href={url} className="rounded-full p-3.5 hover:bg-[#0000004d] transition-all">
            {children}
        </a>
    )
}