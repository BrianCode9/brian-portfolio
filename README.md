# Brian Ngo - Portfolio Site

My personal portfolio website, built with Next.js.

The home page walks through who I am, featured projects, and a contact form. Each project has its own detail page with a write-up of what I did, how it works, and a picture gallery of diagrams and screenshots. Projects range from hardware (CMOS circuit design, an 8-bit CPU on an FPGA, a custom keyboard PCB, a 6502 breadboard computer) to software (hackathon web apps and this site itself). There is also an about page with photos and an interactive map of places I have traveled, plus pages for my work experience.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Leaflet for the travel map on the About page

## Structure

- `src/app` - pages (home, about, experience, projects, project detail pages)
- `src/components` - shared UI and section components
- `src/data` - project, experience, and travel data
- `public/images` - screenshots and photos used across the site
