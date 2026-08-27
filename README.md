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

## Vercel deployment

The Vercel project is named `tark-ekspert-grupp`. Link a fresh checkout once, then deploy the current committed tree to production:

```bash
vercel login
vercel link --yes --project tark-ekspert-grupp
vercel --prod --yes
```

Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm test:e2e` and `pnpm build` before a production deployment. The local `.vercel` directory only stores the project link and remains ignored by Git.

Automatic deployments require the Vercel GitHub App to have access to the repository. For a private repository owned by a personal GitHub account, Vercel requires that repository owner to establish the connection; otherwise use the CLI flow above.
