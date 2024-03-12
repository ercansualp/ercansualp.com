type props = {
    jobName: string,
    position: string,
    city: string,
    country: string,
    startedDate: string,
    endDate: string,
    companyLogo: string,
    items: string[]
}

export default function Job(props: props) {
    const { jobName, position, city, country, startedDate, endDate, companyLogo, items } = props;

    return (
        <div className="w-[700px] flex flex-col items-center rounded-br-3xl border border-[#4db5ff] bg-[#2c2c6c] max-w-full mx-auto transition-all hover:bg-transparent">
            <img src={companyLogo} alt="" width={150} className="py-2"/>
            <div className="flex flex-col bg-[#4db5ff] rounded-b-3xl w-full items-center py-2 gap-y-1">
                <h3 className="text-[#1f1f38] font-semibold	text-base leading-5">{position} at {jobName}</h3>
                <h5 className="text-[#f5f5f5] font-medium text-sm">{city}, {country}</h5>
                <h5 className="text-[#f5f5f5] font-medium text-sm">{startedDate} - {endDate}</h5>
            </div>
            <div className="p-8">
                <ul className="flex flex-col gap-y-3">
                    {
                        items.map((item, index) => (
                            <li className="flex gap-x-4" key={index}>
                                <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                                <div className="text-white leading-5 text-sm">
                                    {item}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}