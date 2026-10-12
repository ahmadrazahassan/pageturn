# PageTurn

PageTurn is an independent audiobook review and listening guide site built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Development

Install dependencies and start the local site:

```sh
npm install
npm run dev
```

The development server runs on port 8080 by default.

## Netlify deployment

The repository's `netlify.toml` sets `npm run build` and the `dist` publish
directory, overriding older dashboard settings such as `dist/client`. Nitro's
Netlify preset also generates the SSR function under `.netlify/functions-internal`.
Keep the Supabase environment variables configured in Netlify for the forms.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- Supabase for newsletter and contact form data
