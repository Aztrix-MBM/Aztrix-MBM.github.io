# Portfolio Project Rules and Checklist

A single reference for building, reviewing and shipping the portfolio. Items marked **(Added)** are additions to the original rule set.

---

## 1. Purpose and Content

- Every section has one clear purpose.
- Use only real content: my own text, projects, certificates, photo and resume. No dummy or filler content.
- If a section has no real content yet, do not publish it with placeholders. Hide it until it is ready.
- No AI references in the copy or the UI. No generic AI-template look or wording.
- Write in my own voice. Short, specific sentences. No buzzword stacking.
- Use the photo from the assets folder only.
- No emoji spam. Use none in the UI. Keep any in this document minimal.

### Required sections (separate component for each)

| Section | Purpose |
|---|---|
| Home | Name, role, one-line intro, primary call to action |
| About | Short story, education, what I build |
| Skills | Real skills grouped logically |
| Certifications | Real certificates with issuer and year, link where available |
| Projects | Real projects, each with a short case-study style entry |
| Resume | Viewable summary and a working download button |
| Contact | Working form, email, GitHub, LinkedIn |

**(Added) Project entry format:** title, one-line summary, my role, stack, what problem it solved, live link, repository link, one screenshot.

**(Added) Decide the structure early:** one page with anchor navigation, or separate routes per section. Pick one and stay consistent.

---

## 2. Design System

- Simple, minimalist design.
- Consistent border-radius, button styles, shadows and icon style across every section.
- Do not change design style between sections.
- Define heading sizes for each breakpoint.
- Icons and logo: use one consistent SVG icon style (same stroke width, same size scale). Create a simple logo or monogram as SVG.
- **(Added) Design tokens:** define colors, spacing scale, radius, shadow and font sizes as CSS variables in one place.
- **(Added) Color:** one primary accent, neutral greys, no more than two font families.
- **(Added) Visible focus state** on every interactive element, styled to match the design.
- **(Added) Dark mode is optional.** If added, test contrast in both themes. If skipped, do not leave half-working theme code.

---

## 3. Responsive Rules

1. Mobile-first. Do not simply shrink the desktop design.
2. Support 320px to 1920px and above.
3. Test portrait and landscape on mobile and tablet.
4. Never allow accidental horizontal scrolling.
5. Use a sensible max-width for content.
6. Keep side padding consistent across breakpoints.
7. Images resize without distortion.
8. Cards reflow naturally.
9. Navigation adapts to small screens.
10. Do not hide important content only because the screen is small.

**(Added) Suggested breakpoints:** 320, 480, 768, 1024, 1280, 1536+.
**(Added)** Use `min-height: 100dvh` instead of `100vh` to avoid mobile browser toolbar jumps.
**(Added)** Touch targets at least 44 x 44 px.
**(Added)** Use `clamp()` for fluid type and spacing instead of many breakpoint overrides.
**(Added)** Check long names, long project titles and long emails so they wrap and do not overflow.

---

## 4. Performance

- Optimize images. Use WebP or AVIF where appropriate.
- Lazy-load images that are not immediately visible. Do not lazy-load the hero image.
- Do not load huge 4K backgrounds.
- Avoid unnecessary dependencies. Do not use a JavaScript library for something CSS can do.
- Optimize fonts: limit weights, use `font-display: swap`, self-host or use the framework font loader.
- Avoid excessive DOM elements.
- Avoid excessive scroll animations. Do not run expensive animations continuously.
- No unnecessary popups.
- Check the production build, not only development mode.

**(Added) Targets:** Lighthouse 90+ in all four categories on mobile; LCP under 2.5 s, CLS under 0.1, INP under 200 ms.
**(Added)** Set explicit `width` and `height` (or aspect-ratio) on every image to prevent layout shift.
**(Added)** Provide the profile photo in two or three sizes with `srcset` and `sizes`.
**(Added)** Respect `prefers-reduced-motion`. Disable or reduce animations for those users.
**(Added)** Keep the resume PDF small (ideally under 500 KB) and give it a clear file name such as `Muthubala_Resume.pdf`.
**(Added)** Check the bundle with the framework's build analyzer and remove anything unused.

---

## 5. Code Quality

- Do not put everything in one `page.tsx`. Split into components, one per section, plus shared UI components.
- Meaningful variable and function names.
- Remove unused imports.
- Remove debugging code (`console.log`, commented-out blocks).
- Keep the console free of errors and warnings.
- No broken links, no dead buttons, no layout shifts.

**(Added) Suggested structure:**

```
src/
  app/            routes, layout, global styles
  components/
    sections/     Home, About, Skills, Certifications, Projects, Resume, Contact
    ui/           Button, Card, Section heading, Icon, Navbar
  data/           projects, skills, certifications (typed content files)
  lib/            helpers, validation
public/
  images/         optimized photo, project screenshots
  resume/         resume PDF
```

**(Added)** Keep all content in typed data files so text changes never need component edits.
**(Added)** Enable TypeScript strict mode and run lint and format before every commit.

---

## 6. Security and Secrets

- Never expose `API_KEY`, `DATABASE_PASSWORD`, `JWT_SECRET`, `PRIVATE_KEY`.
- Use environment variables for secrets. Commit only `.env.example` with empty values; add `.env*` to `.gitignore`.
- Remember that any variable prefixed for the browser (for example `NEXT_PUBLIC_`) is public. Never put a secret there.

**(Added) Contact form:**
- Validate on the server as well as the client.
- Add a honeypot field or a rate limit to stop spam.
- Send email through a server route or a form service. The key stays on the server.
- Show clear success and error states. Never fail silently.

**(Added)** Add `rel="noopener noreferrer"` to external links that open in a new tab.
**(Added)** Add basic security headers (Content-Security-Policy, X-Content-Type-Options, Referrer-Policy) in hosting or framework config.
**(Added)** Check git history for accidentally committed secrets before making the repository public.

---

## 7. Accessibility

- Keyboard-only navigation works everywhere, including the mobile menu.
- Screen reader basics: landmarks, headings, labels.
- Sufficient contrast.

**(Added) Specifics:**
- Use semantic HTML: `header`, `nav`, `main`, `section`, `footer`.
- One `h1` per page, headings in order.
- Contrast at least 4.5:1 for body text and 3:1 for large text and UI.
- Meaningful `alt` text on the photo and screenshots; decorative SVGs get `aria-hidden="true"`.
- Skip-to-content link at the top.
- Form fields have visible labels and clear error messages.
- Mobile menu: button has an accessible name, `aria-expanded`, closes on Escape, traps focus while open.
- Never rely on color alone to show state.

---

## 8. SEO and Sharing (Added)

- Unique `title` and `meta description`.
- Open Graph and Twitter card tags with a proper preview image.
- Favicon set (SVG plus PNG fallback) and web manifest.
- `sitemap.xml` and `robots.txt`.
- Custom 404 page with a link back home.
- Set the page `lang` attribute.
- Add structured data (Person) only with real details.

---

## 9. Pre-Deployment Testing

### Devices
- [ ] iPhone-sized screen
- [ ] Android-sized screen
- [ ] Tablet (portrait and landscape)
- [ ] Laptop
- [ ] Desktop
- [ ] Large monitor
- [ ] 320px width check

### Browsers
- [ ] Chrome
- [ ] Edge
- [ ] Safari
- [ ] Firefox

Tip: if no Mac or iPhone is available, use Playwright's WebKit or a cloud testing tool for Safari.

### Performance
- [ ] Lighthouse (mobile and desktop)
- [ ] PageSpeed Insights on the deployed URL
- [ ] Network throttling (Fast 3G / Slow 4G)
- [ ] Production build tested

### Accessibility
- [ ] Keyboard only
- [ ] Screen reader basics
- [ ] Contrast
- [ ] Reduced-motion setting

### Functionality
- [ ] Every button
- [ ] Every link (internal and external)
- [ ] Resume download
- [ ] GitHub link
- [ ] LinkedIn link
- [ ] Contact form (success, error, empty, invalid email)
- [ ] Mobile menu (open, close, link click, Escape)
- [ ] Anchor scrolling is not hidden behind a sticky navbar
- [ ] Console has no errors or warnings
- [ ] No horizontal scroll at any width
- [ ] No layout shift on load

---

## 10. Final Release Checklist

- [ ] All content is real and proofread
- [ ] No placeholder text, images or links
- [ ] No secrets in code or git history
- [ ] `.env.example` present, real `.env` ignored
- [ ] Unused code, imports and assets removed
- [ ] Images optimized and lazy-loaded where needed
- [ ] Domain, HTTPS and redirects working
- [ ] Social preview checked by sharing the link
- [ ] README explains how to run and build the project
