# Tark Ekspert Grupp OÜ

Production-oriented replacement frontend for [tarkekspertgrupp.ee](https://tarkekspertgrupp.ee/). Estonian is the primary locale at `/`; Russian is available at `/ru`. There is no English public version.

## Stack

- Next.js App Router, React and TypeScript
- Local, verified company content and 25 locally hosted project photographs
- Vercel Analytics and Speed Insights
- Playwright, axe and Vitest verification

## Existing form integration

The legacy site exposes no JSON API. Enquiries use an ordinary URL-encoded HTML POST to `https://tarkekspertgrupp.ee/send.php` with these fields:

`name`, `phone`, `email`, `location`, `message`, `website`, `captcha_a`, `captcha_b`, `captcha`.

The new form deliberately uses native form submission instead of `fetch`, because the legacy endpoint does not return CORS headers. Override the endpoint with `NEXT_PUBLIC_LEAD_ENDPOINT` when it is moved to a dedicated backend hostname.

If the main domain is moved away from its current Apache host, keep `send.php` reachable on another hostname before changing DNS. Otherwise the frontend cannot continue using that handler.

## Development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Automated tests never submit an enquiry.
