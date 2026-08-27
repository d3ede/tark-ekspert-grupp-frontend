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
    <div className="header-actions"><nav className="language-switch" aria-label="Keele valik"><Link href="/" hrefLang="et" aria-label="ET keel" aria-current={copy.langName==="ET"?"page":undefined}>ET</Link><b>/</b><Link href="/ru" hrefLang="ru" aria-label="RU keel" aria-current={copy.langName==="RU"?"page":undefined}>RU</Link></nav><Link className="header-cta" href="#kontakt">{copy.request}<ArrowUpRight size={16}/></Link></div>
    <Link className="mobile-menu" href="#kontakt" aria-label={copy.request}><Menu/></Link>
  </header>;
}
