import Link from "next/link";
import Image from 'next/image'
const Header = () => {

    return (

        <header>
            <nav className="bg-white py-2 border-t-2">
                <div className="flex justify-between items-center gap-4 px-6 container sm:mx-auto z-10 sm:px-12">
                    <div>
                        <Link
                            href={"/"}>
                            <Image
                                alt={"user-avatar"}
                                src={"/images/logo.png"}
                                width={80}
                                height={80}></Image>

                        </Link>
                    </div>
                    <div>
                        <Link className="flex flex-col justify-center items-center gap-2"
                            href={"/about"}>
                            <i className="icon-user text-4xl "></i>
                            <div>
                                About
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-6 px-6 container sm:mx-auto z-10 sm:px-12">
                        <div >
                            <Link
                                className="flex justify-center items-center gap-2"
                                href={"/game"}>
                                <i className="icon-terminal text-2xl"></i>
                                <div className="cursor-pointer mx-px text-2xl">
                                    Game
                                </div>

                            </Link>
                        </div>
                        <div >
                            <Link
                                className="flex justify-center items-center gap-2"
                                href={"/testamonials"}>
                                <i className="icon-file-text2 text-2xl "></i>
                                <div className="cursor-pointer mx-px text-2xl">
                                    Testamonials
                                </div>

                            </Link>
                        </div>
                        <div >
                            <Link
                                className="flex justify-center items-center gap-2"
                                href={"/testamonials"}>
                                <i className="icon-file-text2 text-2xl "></i>
                                <div className="cursor-pointer mx-px text-2xl">
                                    Testamonials
                                </div>

                            </Link>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;
