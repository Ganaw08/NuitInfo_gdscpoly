import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import { ReactNode } from "react";
import { useRouter } from "next/router";
interface Props {
    children: ReactNode;
    showHeader?: Boolean;
    showFooter?: Boolean;
}
export default function Layout({
    children,
    showFooter = true,
    showHeader = true,
}: Props) {
    const router = useRouter();

    return (
        <div dir={router.locale === "ar" ? "rtl" : "ltr"}>
            {<Header />}
            {children}
            {<Footer />}
        </div>
    );
}