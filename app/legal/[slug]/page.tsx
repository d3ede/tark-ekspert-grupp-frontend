import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { legalDocuments } from "@/lib/content";
import { demoLegalContent } from "@/lib/legal";

export const metadata:Metadata={robots:{index:false,follow:false}};
export function generateStaticParams(){return legalDocuments.map(({slug})=>({slug}));}

export default async function LegalPage({params}:{params:Promise<{slug:string}>}){
  const slug=(await params).slug; const document=demoLegalContent[slug]; if(!document) notFound();
  return <main><SiteHeader/><article className="legal-page page-shell"><div className="demo-warning"><strong>DEMONSTRATION DOCUMENT</strong><span>NOT LEGAL ADVICE</span><span>MUST BE REVIEWED BEFORE COMMERCIAL USE</span></div><p className="section-label">Template dated 31 August 2026</p><h1>{document.title}</h1><p className="legal-intro">{document.intro}</p><div className="legal-placeholders"><strong>Outstanding placeholders</strong><p>Real company identity · registry and VAT details · verified address · DPO/privacy contact · retention decisions · processor audit · licence information</p></div>{document.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}<p className="legal-end">This template creates no contract and makes no representation of legal compliance.</p></article><SiteFooter/></main>
}

