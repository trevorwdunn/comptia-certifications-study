/** @type {import('tailwindcss').Config} */

// Every neutral in the UI comes from a semantic token below rather than a raw
// slate shade, so light and dark are one set of classes with two sets of values
// (defined in src/index.css). Accent hues stay on Tailwind's own palette and use
// `dark:` variants where the dark-tuned shade is wrong on a light background.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),      // page background
        chrome: token('chrome'),      // header, sidebar, tab bar
        surface: token('surface'),    // cards
        sunken: token('sunken'),      // inset panels, progress-bar tracks
        raised: token('raised'),      // secondary buttons, badges, pills
        'raised-hi': token('raised-hi'), // hover state for `raised`
        field: token('field'),        // inputs and textareas

        line: token('line'),          // hairline dividers (chrome edges)
        'line-2': token('line-2'),    // default card and separator border
        'line-3': token('line-3'),    // input borders, control outlines
        'line-4': token('line-4'),    // focus / first hover step
        'line-5': token('line-5'),    // strongest hover step

        ink: token('ink'),            // headings, highest contrast
        'ink-2': token('ink-2'),
        'ink-3': token('ink-3'),      // body copy
        'ink-4': token('ink-4'),      // secondary copy
        'ink-5': token('ink-5'),      // muted labels
        'ink-6': token('ink-6'),      // faint meta text
      },
    },
  },
  plugins: [],
}
