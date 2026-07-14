export const demoLegalContent:Record<string,{title:string;intro:string;sections:{title:string;body:string[]}[]}>={
  privacy:{title:"Privacy Notice",intro:"This template demonstrates how North & Forge OÜ could explain the processing of project enquiries under Article 13 GDPR.",sections:[
    {title:"Controller and contact",body:["North & Forge OÜ is a fictional controller. Demo registry code: 00000000. Placeholder address: Tallinn, Estonia. Contact: privacy@northandforge.example.","Before commercial use, replace every placeholder and confirm the responsible controller and Estonian supervisory contact."]},
    {title:"Data, purposes and legal bases",body:["A live enquiry may include name, contact details, region, project type, budget, message, acknowledgement timestamp and technical anti-abuse data.","Processing an requested enquiry would normally be necessary to take steps before a possible contract or based on legitimate interests in responding securely. Optional studio news requires separate consent and can be withdrawn."]},
    {title:"Recipients and transfers",body:["The planned processors are Vercel for hosting, Neon for records, Resend for transactional email and Cloudflare Turnstile for abuse prevention. Their actual regions, safeguards and sub-processors must be audited before launch."]},
    {title:"Retention and rights",body:["The demo proposes deleting unsuccessful enquiries after 12 months and customer project records according to applicable accounting and limitation requirements. These periods require legal confirmation.","A data subject may request access, rectification, erasure, restriction, portability or object, and may complain to the Estonian Data Protection Inspectorate. Applicability depends on the legal basis and circumstances."]},
  ]},
  cookies:{title:"Cookie & Analytics Notice",intro:"This template lists the services planned for the live site; it does not claim that the current setup is cookie-free.",sections:[
    {title:"Services in scope",body:["Vercel Web Analytics and Speed Insights measure page performance and aggregate use. Cloudflare Turnstile protects the live enquiry form. Next.js and Vercel may use strictly necessary storage for delivery and security."]},
    {title:"Consent and control",body:["Before launch, test the production site in multiple browsers, record all cookies and storage, classify their purposes and introduce a consent mechanism wherever Estonian or EU law requires one."]},
    {title:"Demonstration state",body:["The enquiry form does not load Turnstile in demo mode. Analytics may be inactive outside a Vercel deployment. This document must be updated to reflect observed production behaviour."]},
  ]},
  terms:{title:"Website Terms of Use",intro:"These demonstration terms describe use of a fictional portfolio website and are not construction contract terms.",sections:[
    {title:"Information only",body:["Projects, metrics, testimonials, company details, prices and timelines are illustrative. Nothing on this site is an offer, estimate, warranty or professional construction advice."]},
    {title:"Acceptable use",body:["Do not interfere with the site, submit unlawful material, attempt unauthorised access or reuse protected images and design assets without permission."]},
    {title:"No contract",body:["Submitting the demo form transmits nothing. On a future live site, an enquiry alone would not form a construction, design or reservation contract."]},
  ]},
  accessibility:{title:"Accessibility Statement",intro:"North & Forge aims for WCAG 2.2 AA, but this statement describes targets for a demonstration build rather than certified compliance.",sections:[
    {title:"Designed support",body:["The interface uses semantic landmarks, keyboard focus, sufficient contrast, responsive text, reduced-motion preferences and descriptive alternatives for meaningful images."]},
    {title:"360° alternative",body:["The panorama provides a keyboard-accessible room list, named hotspots and static previews. The visual canvas may remain difficult for some assistive technologies, so all essential project information also appears as text and images."]},
    {title:"Known limitations and feedback",body:["Third-party panorama and anti-abuse widgets require continued testing. Before launch, publish verified limitations, a real accessibility contact and a response procedure."]},
  ]},
  disclaimer:{title:"Demonstration Website Disclaimer",intro:"This is a portfolio demonstration. North & Forge OÜ, its registry code, projects, testimonials, contact details and legal documents are fictional.",sections:[
    {title:"Not a real provider",body:["This website does not represent a registered construction company and must not be used to order services, assess credentials or make investment or building decisions."]},
    {title:"Not legal advice",body:["The legal pages are structural examples only. They do not establish compliance with GDPR, Estonian law, accessibility law or consumer-protection requirements."]},
    {title:"Required before launch",body:["A real operator must replace all placeholders, verify licences and claims, conduct privacy and accessibility audits, confirm processor arrangements and obtain review from qualified Estonian advisers."]},
  ]},
};

