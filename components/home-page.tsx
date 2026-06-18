import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight,ArrowUpRight,Check,MoveRight,Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { WorkGallery } from "@/components/work-gallery";
import { LanguageAttribute } from "@/components/language-attribute";
import { getContent,type Locale } from "@/lib/site-content";

export function HomePage({locale}:{locale:Locale}){
  const copy=getContent(locale);
  const serviceImages=["work-20.jpg","work-05.jpg","work-roof-extra-02.jpg","work-04.jpg","work-facade-final-01.jpg"];
  const jsonLd={"@context":"https://schema.org","@type":["Organization","GeneralContractor"],name:copy.company,url:"https://tarkekspertgrupp.ee",telephone:copy.phone,email:copy.email,areaServed:{"@type":"Country",name:"Estonia"},vatID:"EE102776562",identifier:"12741049"};
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <LanguageAttribute lang={locale==="et"?"et-EE":"ru-EE"}/>
    <section className="hero" id="top"><SiteHeader copy={copy}/><div className="hero-image"><Image src="/assets/construction-hero-modern.png" alt="" fill priority sizes="100vw"/></div><div className="hero-wash"/><div className="hero-content page-shell"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.heroTitle}</h1><p className="hero-lead">{copy.heroText}</p><div className="hero-actions"><Link className="primary-button" href="#kontakt">{copy.heroPrimary}<MoveRight size={18}/></Link><Link className="ghost-button" href="#objektid">{copy.heroSecondary}<ArrowDownRight size={18}/></Link></div><div className="hero-proof">{copy.proof.map(item=><span key={item}><Check/>{item}</span>)}</div></div></section>

    <section className="stats"><div className="page-shell stats-grid">{copy.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}<a href={copy.phoneHref}><Phone/> {copy.phone}</a></div></section>

    <section className="services page-shell" id="teenused"><header className="section-heading"><p className="section-label">{copy.servicesLabel}</p><h2>{copy.servicesTitle}</h2></header><div className="service-grid">{copy.services.map(([title,text],index)=><article className="service-card" key={title}><div className="service-image"><Image src={`/assets/works/${serviceImages[index]}`} alt="" fill sizes="(max-width:800px) 100vw, 33vw"/></div><div className="service-body"><span>0{index+1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight/></div></article>)}</div></section>

    <section className="about" id="meist"><div className="page-shell about-grid"><div className="about-image"><Image src="/assets/works/work-23.jpg" alt="Tark Ekspert Grupp fassaaditööd tellingutel" fill sizes="(max-width:800px) 100vw, 48vw"/></div><div className="about-copy"><p className="section-label">{copy.aboutLabel}</p><h2>{copy.aboutTitle}</h2>{copy.aboutText.map(text=><p key={text}>{text}</p>)}</div></div><div className="page-shell benefit-grid">{copy.benefits.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="process page-shell" id="protsess"><header><p className="section-label">{copy.processLabel}</p><h2>{copy.processTitle}</h2></header><ol>{copy.process.map((text,index)=><li key={text}><span>0{index+1}</span><p>{text}</p></li>)}</ol></section>

    <section className="projects" id="objektid"><div className="page-shell project-intro"><div><p className="section-label">{copy.projectsLabel}</p><h2>{copy.projectsTitle}</h2></div><p>{copy.projectsText}</p></div><div className="project-addresses page-shell">{copy.projectNames.map((name,index)=><span key={name}><b>{String(index+1).padStart(2,"0")}</b>{name}</span>)}</div><div className="gallery-heading page-shell"><p className="section-label">{copy.galleryLabel}</p><h3>{copy.galleryTitle}</h3></div><WorkGallery images={copy.gallery} alt={locale==="et"?"Tehtud tööde foto":"Фото выполненной работы"}/></section>

    <section className="contact" id="kontakt"><div className="page-shell contact-grid"><div className="contact-copy"><p className="section-label">{copy.contactLabel}</p><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p><div className="quick-links"><a href={copy.phoneHref}>{copy.phone}</a><a href={`mailto:${copy.email}`}>{copy.email}</a></div><ul>{copy.details.map(item=><li key={item}>{item}</li>)}</ul></div><ContactForm copy={copy}/></div></section>

    <footer className="site-footer"><div className="page-shell footer-grid"><div><Image src="/assets/tark-ekspert-logo.png" alt="" width={64} height={64}/><strong>{copy.company}</strong><p>{copy.footer}</p></div><div><a href={copy.phoneHref}>{copy.phone}</a><a href={`mailto:${copy.email}`}>{copy.email}</a></div><div>{copy.nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</div></div><div className="page-shell footer-bottom"><span>© 2026 {copy.company}</span><span>Registrikood 12741049 · KMKR EE102776562</span></div></footer>
  </main>;
}
