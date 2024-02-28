import Section from "~/pages/home/components/section";
import DigishifterLogo from "~/assets/img/Digishifter.png";

export default function Experiences(){
    return (
        <Section id="experiences" title="Job Experience" description="Employment History">
            <div className="w-[700px] flex flex-col items-center rounded-br-3xl border border-[#4db5ff] bg-[#2c2c6c] max-w-full mx-auto transition-all hover:bg-transparent">
                <img src={DigishifterLogo} alt="" width={150} className="py-2"/>
                <div className="flex flex-col bg-[#4db5ff] rounded-b-3xl w-full items-center py-2 gap-y-1">
                    <h3 className="text-[#1f1f38] font-semibold	text-base leading-5">Full Stack Web Developer at Digishifter</h3>
                    <h5 className="text-[#f5f5f5] font-medium text-sm">Istanbul, Turkey</h5>
                    <h5 className="text-[#f5f5f5] font-medium text-sm">July 2022 - January 2023</h5>
                </div>
                <div className="p-8">
                    <ul className="flex flex-col gap-y-3">
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I played an active role in digital transformation projects using PHP, ReactJS, MSSQL, Material UI, and various technologies.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I developed a module for factories that tracks the working space of these factories and workstations.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I created a leave tracking system module to monitor the leave records of employees working in the factory.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I designed a messaging module, similar to WhatsApp, to facilitate communication within the factory.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I developed a QR code reader module that allows tracking the monthly working hours of personnel with identity cards.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I developed a module for a Trello-like task tracking process.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I created a DailyWorks module where we enter the tasks we completed daily at the end of each day.
                            </div>
                        </li>
                        <li className="flex gap-x-4">
                            <svg stroke="currentColor" fill="#4db5ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" /></svg>
                            <div className="text-white leading-5 text-sm">
                                I developed a module that allows searching for products in the factory based on the product number, entering the desired quantity along with the percentage of loss for that material, listing the sub-materials of that product, displaying the quantity of each sub-material in the inventory, determining the required quantity of each sub-material for the entered quantity, and updating the inventory accordingly. After listing these details in a table, the module automatically selects the missing sub-materials, displays them on a screen, and allows us to choose suppliers for these missing materials. In this supplier selection screen, we can see the suppliers of the missing materials, their costs for each sub-material, and the earliest delivery date. Upon selecting a supplier, the module generates the relevant order and automatically sends an email to the chosen supplier for the order, including details such as the quantity needed, cost, and earliest delivery date.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}