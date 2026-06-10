import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import type { getContent } from "@/lib/site-content";

type Copy=ReturnType<typeof getContent>;
export function SiteHeader({copy}:{copy:Copy}){
  return <header className="site-header page-shell">
    <Link className="brand" href={copy.langName==="ET"?"/":"/ru"} aria-label={`${copy.company} avaleht`}>
      <Image src="/assets/tark-ekspert-logo.png" alt="" width={44} height={44}/><span><strong>TARK EKSPERT</strong><small>GRUPP OÜ</small></span>
    </Link>
    <nav aria-label="Põhinavigatsioon">{copy.nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>
    <div className="header-actions"><Link className="language-switch" href={copy.otherHref} hrefLang={copy.otherLang.toLowerCase()} aria-label={`${copy.otherLang} keel`}><span>{copy.langName}</span><b>/</b><strong>{copy.otherLang}</strong></Link><Link className="header-cta" href="#kontakt">{copy.request}<ArrowUpRight size={16}/></Link></div>
    <Link className="mobile-menu" href="#kontakt" aria-label={copy.request}><Menu/></Link>
  </header>;
}
