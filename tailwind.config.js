/** @type {import('tailwindcss').Config} */
	export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
			colors: {
				'font': '#141313',
				'bg': '#faf1ed',
				'alt-font': '#6b6665'
			}
		},
  },
  plugins: [],
}
