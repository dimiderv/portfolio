"use client";
import React, {useRef, useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/hoc/SectionWrapper";

import emailjs from "@emailjs/browser";

//template Id template_keujvrd
// service Id service_7244ghv
// public key nb9HSIa10pyOUpZEb
const EmailSection = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE,
                process.env.NEXT_PUBLIC_TEMPLATE,
                {
                    from_name: form.name,
                    to_name: "Dejvi",
                    from_email: form.email,
                    to_email: "dimiderv@gmail.com",
                    message: form.message,
                    reply_to:form.email
                },
                process.env.NEXT_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-9">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                    <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="Name"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
            </div>
        </section>
    );
};

// export default SectionWrapper(EmailSection,'email');
export default EmailSection;