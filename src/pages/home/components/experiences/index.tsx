import Section from "~/pages/home/components/section";
import DigishifterLogo from "~/assets/img/Digishifter.png";
import Job from "~/pages/home/components/experiences/job";

export default function Experiences(){
    const jobs = [
        {
            jobName: "Digishifter",
            position: "Full Stack Web Developer",
            city: "İstanbul",
            country: "Turkey",
            startedDate: "July 2022",
            endDate: "January 2023",
            companyLogo: DigishifterLogo,
            items: [
                "I played an active role in digital transformation projects using PHP, ReactJS, MSSQL, Material UI, and various technologies.",
                "I developed a module for factories that tracks the working space of these factories and workstations.",
                "I created a leave tracking system module to monitor the leave records of employees working in the factory.",
                "I designed a messaging module, similar to WhatsApp, to facilitate communication within the factory.",
                "I developed a QR code reader module that allows tracking the monthly working hours of personnel with identity cards.",
                "I developed a module for a Trello-like task tracking process.",
                "I created a DailyWorks module where we enter the tasks we completed daily at the end of each day.",
                "I developed a module that allows searching for products in the factory based on the product number, entering the desired quantity along with the percentage of loss for that material, listing the sub-materials of that product, displaying the quantity of each sub-material in the inventory, determining the required quantity of each sub-material for the entered quantity, and updating the inventory accordingly. After listing these details in a table, the module automatically selects the missing sub-materials, displays them on a screen, and allows us to choose suppliers for these missing materials. In this supplier selection screen, we can see the suppliers of the missing materials, their costs for each sub-material, and the earliest delivery date. Upon selecting a supplier, the module generates the relevant order and automatically sends an email to the chosen supplier for the order, including details such as the quantity needed, cost, and earliest delivery date."
            ]
        }
    ];

    return (
        <Section id="experiences" title="Job Experience" description="Employment History">
            {
                jobs.map((job, index) => (
                    <Job
                        key={index}
                        jobName={job.jobName}
                        position={job.position}
                        city={job.city}
                        country={job.country}
                        startedDate={job.startedDate}
                        endDate={job.endDate}
                        companyLogo={(job.companyLogo as unknown) as string}
                        items={job.items} />
                ))
            }
        </Section>
    )
}