import  Image  from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/Airbnb_Logo.png";
import MobileLogo from "../../public/Airbnb_Logo1.png";
import { UserNav } from "./UserNav";

export  function Navbar(){
    return(
        <nav className="w=full border-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href="/">
                <Image src={DesktopLogo} alt="Desktop Logo" className="w-32 hidden lg:block"/>

                <Image src={MobileLogo} alt="mobile Logo" className="w-12 block lg:hidden"/>
                </Link>
                <div className=" rounded-full border px-5 py-2">
                    <h1>Hello rom</h1>
                </div>
                <UserNav/>
            </div>
        </nav>
    )
}