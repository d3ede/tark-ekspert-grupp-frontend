import type { NextConfig } from "next";

if (process.env.NEXT_PUBLIC_SITE_MODE === "live") {
  const required = ["DATABASE_URL","RESEND_API_KEY","LEAD_FROM_EMAIL","LEAD_TO_EMAIL","TURNSTILE_SECRET_KEY","NEXT_PUBLIC_TURNSTILE_SITE_KEY","RATE_LIMIT_SALT"];
  const missing = required.filter((key)=>!process.env[key]);
  if (process.env.LEGAL_CONTENT_APPROVED !== "true" || missing.length) throw new Error(`Live build blocked. Legal approval or environment missing: ${missing.join(", ") || "LEGAL_CONTENT_APPROVED"}`);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
  async headers(){return [{source:"/(.*)",headers:[
    {key:"X-Content-Type-Options",value:"nosniff"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
    {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},{key:"X-Frame-Options",value:"SAMEORIGIN"},
  ]}]},
};

export default nextConfig;
