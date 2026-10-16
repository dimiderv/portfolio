import Image from "next/image";
import logo from "../icon.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="page-container flex flex-col gap-3 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4"><Image src={logo} alt="" width={42} height={42} className="h-11 w-11 rounded-full" /><p>Dejvi Dervishi · Full-stack Developer</p></div>
        <a href="#about" className="inline-flex min-h-11 items-center text-gray-300 hover:text-purple-300">Back to top ↑</a>
      </div>
    </footer>
  );
}
