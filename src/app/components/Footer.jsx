import React from "react";
import logo from "@/app/icon.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-8 sm:p-8 flex justify-between items-center">
                <Image className={'mx-10'} src={logo} alt={'my logo'} width={'50'} height={50}/>
                <p className="text-slate-600">All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;