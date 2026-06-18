import type {MetadataRoute} from "next";
const origin=process.env.NEXT_PUBLIC_SITE_URL??"https://tarkekspertgrupp.ee";
export default function sitemap():MetadataRoute.Sitemap{return [{url:origin,lastModified:new Date(),changeFrequency:"monthly",priority:1,alternates:{languages:{et:origin,ru:`${origin}/ru`}}},{url:`${origin}/ru`,lastModified:new Date(),changeFrequency:"monthly",priority:.9,alternates:{languages:{et:origin,ru:`${origin}/ru`}}}]}
