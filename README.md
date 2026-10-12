# sabrina-countdown

A shared birthday countdown for Sabrina (恬恬) and Xuan, with a handmade editorial birthday scrapbook design.

## Birthdays

- Sabrina: 1986-05-18; 40th birthday: 2026-05-18.
- Xuan: 1988-11-04; 40th birthday: 2028-11-04.
- Each card counts down to the person's next birthday. Celebration lasts for the whole birthday in Taiwan (UTC+8), then rolls over to the next year.
- The 40th birthday milestone remains visible after it has passed.
- Desktop shows the cards side by side; mobile stacks them vertically.
- Sabrina's card links to `https://taitung.xuan.tw/` in a new tab, without requiring sign-in.
- The full album contains 29 photographs and 17 videos (46 memories). Original photo 41 must remain excluded at Sabrina's request. The `/2026/` family edition also omits all videos.
- The design uses an editorial cream canvas, oxblood magazine-cutout headings, sage paper layers, asymmetrical birthday cards, and an original AI-generated photographic cake collage. The WebP hero asset is 317 KB, self-hosted and preloaded.
- Typography uses one bilingual reading family: self-hosted, subset Noto Serif TC (variable 400–800). All prose, headings, English labels, dates, and timers share this family. Barlow Condensed 800 appears only on the cutout headline; person-name cutouts use Noto Serif TC consistently. Both WOFF2 fonts are preloaded with swap rendering and require no third-party runtime requests. OFL license files are included under `assets/fonts/`.
- The font subset covers the current HTML, birthday logic, celebration messages, and all printable ASCII characters. When adding Chinese copy, regenerate the reading font subset to include any new characters.
- Live countdown hierarchy emphasizes days, with a quieter hours/minutes/seconds strip. The dates and Taiwan midnight rollover are preserved.
- A celebration button releases temporary paper confetti with a polite status announcement. Native details elements reveal personal birthday notes and work with the keyboard.
- Progressive scroll reveals, hover paper lift, and pointer tilt respect reduced-motion preferences. Content remains visible and the notes/links usable if the enhancement script fails.
- Responsive QA covers 320, 390, 768, 1024, and 1440 pixel widths. Focus states and a skip link support keyboard navigation.

## Deploy

Deployed to GitHub Pages and mapped to `sabrina.xuan.tw`.
