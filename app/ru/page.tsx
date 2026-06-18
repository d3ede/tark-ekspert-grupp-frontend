import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata:Metadata={title:"Tark Ekspert Grupp OÜ | Строительная компания",description:"Строительство домов, ремонт, отделка, кровельные и фасадные работы по всей Эстонии.",alternates:{canonical:"/ru",languages:{et:"/",ru:"/ru"}},openGraph:{locale:"ru_EE",alternateLocale:["et_EE"]}};
export default function RussianPage(){return <HomePage locale="ru"/>}
