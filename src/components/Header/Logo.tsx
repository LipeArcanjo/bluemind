"use client";

import Image from "next/image";
import LogoImage from "../../../public/images/Logo-1.png"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src={LogoImage}
                alt="Logo BlueMind"
            />
        </Link>
    )
}