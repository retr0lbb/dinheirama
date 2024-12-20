import { withTV } from 'tailwind-variants/transformer'

const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'gradient-gray': 'linear-gradient(to bottom right, #323031, #3D3B3C)',
        'gradient-smooth-blue':
          'linear-gradient(to bottom right, #98DFEA, #07BEB8)',
        'gradient-violet': 'linear-gradient(to bottom right, #9d4edd, #7b2cbf)',
        'gradient-red-to-lead':
          'linear-gradient(to bottom right, #ef233c, #d90429)',
      },

      colors: {
        snow: {
          200: '#FFFAFB',
          400: '#DADADA',
          600: '#676767',
          800: '#232323',
          900: '#0A0A0A',
        },
        apple_green: '#72B01D',
        ofice_green: '#3F7D20',
        danger_red: '#D7263D',
        dang_blue: '#4056F4',
        strong_violet: '#7209b7',

        bronze: '#CD7F32',
        prata: '#C0C0C0',
        ouro: '#FFD700',
      },
    },
  },
  plugins: [],
})
export default config
