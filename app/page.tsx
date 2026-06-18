import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata:Metadata={title:"Tark Ekspert Grupp OÜ | Ehitusettevõte",description:"Ehitusettevõte: remont, viimistlus, majade ehitus, katuse- ja fassaaditööd üle Eesti.",alternates:{canonical:"/",languages:{et:"/",ru:"/ru"}},openGraph:{locale:"et_EE",alternateLocale:["ru_EE"]}};
export default function Page(){return <HomePage locale="et"/>}
