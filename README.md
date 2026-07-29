# Brian Ngo - Portfolio Site

My personal portfolio website, built with Next.js.

Live at [brian-ngo.com](https://brian-ngo.com)

The home page introduces who I am, highlights featured projects, and provides my contact information. Each project also has its own dedicated page that includes a description of what I did, how it works, and a gallery of diagrams and screenshots. The Projects section features both software and hardware projects that I have completed personally, for classes, or during competitions. In addition, the navigation bar includes links to my resume, GitHub profile, experience, and a more detailed About Me page.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for a few small touches (navbar underline, card hovers)
- React Leaflet for the travel map on the About page

## Structure

- `src/app` - pages (home, about, experience, projects, project detail pages)
- `src/components` - shared UI and section components
- `src/data` - project, experience, and travel data
- `public/images` - screenshots and photos used across the site
