import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";


function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-5 bg-cyan-800">
      <div className="flex items-center justify-between gap-5">
        <button>ورود به سامانه مدرسه</button>
        <Link href="/">خانه</Link>
        <Link href="/news">اخبار</Link>
        <Link href="/education">مقاطع تحصیلی</Link>
      </div>
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="h-1/2 w-auto object-contain"
      />
    </header>
  );
}

export default Header;
