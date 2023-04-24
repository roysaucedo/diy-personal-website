/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'profile-image': "url('/src/img/profile-img.PNG')"
      }
    },
  },
  plugins: [],
}