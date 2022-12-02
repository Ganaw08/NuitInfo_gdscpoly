import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    const { t }: { t: any } = useTranslation(["common", "button"]);
    return (
        <footer className="w-full flex relative bg-secondary">
            <div className="absolute top-0 rtl:left-0 ltr:right-0 z-0">
                <div className="relative w-56 h-56">

                </div>
            </div>
            <div className="container px-6 pt-7 pb-2 mx-auto flex flex-col">
                <div className="w-full grid gap-8 grid-cols-2 lg:grid-cols-3 justify-start items-start border-b border-solid border-white pb-8">
                    <div className="col-span-1 hidden lg:flex flex-col text-white gap-2 text-sm font-bold">

                        <div>{t("common:askant-company")}</div>
                        <div className="flex items-center gap-1">
                            <span>{t("common:tva-number")}</span>
                            <span dir="ltr">311256282800003</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{t("common:record-number")}</span>
                            <span dir="ltr">4031085964</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3 text-white ">
                        <h3 className="font-bold cursor-pointer mb-4">
                            {t("common:quick-links")}
                        </h3>

                        <Link href="/" passHref>
                            <h3 className="font-bold cursor-pointer text-sm">
                                {t("common:blog")}
                            </h3>
                        </Link>
                        <Link href="/terms-of-use" target="_blank" passHref>
                            <h3 className="font-bold cursor-pointer text-sm">
                                {t("common:terms-conditions")}
                            </h3>
                        </Link>
                        <Link href="/about" passHref>
                            <h3 className="font-bold cursor-pointer text-sm">
                                {t("common:about-us")}
                            </h3>
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3 text-white">
                        <h3 className="font-bold cursor-pointer mb-4">
                            {t("common:stay-connected")}
                        </h3>

                        <Link href="/contact" passHref>
                            <h3 className="font-bold cursor-pointer text-sm">
                                {t("common:contact-us")}
                            </h3>
                        </Link>
                        <Link href="/privacy-policy" target="_blank" passHref>
                            <h3 className="font-bold cursor-pointer text-sm">
                                {t("common:privacy-policy")}
                            </h3>
                        </Link>
                    </div>
                    <div className="col-span-2 flex flex-col gap-3 text-sm font-bold text-white lg:hidden">
                        <div>{t("common:askant-company")}</div>
                        <div className="flex items-center gap-1">
                            <span>{t("common:tva-number")}</span>
                            <span dir="ltr">311256282800003</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{t("common:record-number")}</span>
                            <span dir="ltr">4031085964</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
