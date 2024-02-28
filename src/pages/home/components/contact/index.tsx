import Item from "./item";
import {useState} from "react";
import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function Contact() {
    const { width } = UseWindowDimensions();

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event: any) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div id="contact" className="mt-32 flex flex-col items-center">
            <h5 className="text-[#ffffff99] font-normal text-sm leading-6">Get In Touch</h5>
            <h2 className="mb-12 text-[#4db5ff] font-normal text-2xl leading-10">Contact Me</h2>
            <div className={classNames("grid gap-8 w-[58%] mx-auto", {
                "grid-cols-[30%_58%]": width && width >= 1025,
                "grid-cols-1": width && width < 1025
            })}>
                <div className="flex flex-col gap-5 text-white">
                    <Item
                        logo={<svg className="mb-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>}
                        title="Email"
                        actionText="Send Email"
                        contentText="ercansualp@outlook.com.tr"
                        action="mailto:ercansualp@outlook.com.tr"
                    />
                    <Item
                        logo={<svg className="mb-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg>}
                        title="WhatsApp"
                        actionText="Send a Message"
                        contentText="+90 554 197 57 23"
                        action="https://wa.me/905541975723"
                    />
                </div>
                <form className="flex flex-col gap-y-5 text-white text-xs font-normal">
                    <input type="text" name="name" placeholder="Your Full Name" required onChange={handleChange} className="p-6 rounded-lg border-2 border-[#4db5ff66] outline-none bg-transparent h-[67px]" />
                    <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="p-6 rounded-lg border-2 border-[#4db5ff66] outline-none bg-transparent h-[67px]" />
                    <textarea name="message" rows={7} placeholder="Your Message" required onChange={handleChange} className="p-6 rounded-lg border-2 border-[#4db5ff66] outline-none bg-transparent resize-none"></textarea>
                    <div>
                        <button type="submit" className="bg-[#4db5ff] rounded-md py-3 px-5 text-[#1f1f38] text-sm hover:bg-white transition-all">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}