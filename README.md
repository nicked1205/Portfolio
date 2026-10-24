# Portfolio

My personal portfolio site, live at [nickng.me](https://www.nickng.me/). It's a retro terminal-style single-page app with glitch effects, where you can browse my background, an experience timeline, a project gallery, and a contact form.

## Tech

- React 19 (Create React App)
- Swiper for the project carousel
- EmailJS for the contact form
- Press Start 2P pixel font

## Getting started

```bash
npm install
npm start      # dev server at http://localhost:3000
npm run build  # production build in /build
```

The `build` script sets `GENERATE_SOURCEMAP` with Windows `set` syntax, so on macOS or Linux run `GENERATE_SOURCEMAP=false npx react-scripts build` instead.

## Updating content

- Experience: the `experiences` array in `src/components/timeline.js`. Each marker is placed on the timeline from its `start` date.
- Projects: the `projects`, `githubUrls`, `webUrls`, and `imageUrls` arrays in `src/components/project-display.js`. Entries match up by index, and an empty string greys out that button.
- Images: `src/resources/`

## License

[MIT](LICENSE)
