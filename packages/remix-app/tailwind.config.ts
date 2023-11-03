import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        '200': '#F3F4F6FF',
        '300': '#DEE1E6FF',
        '400': '#BDC1CAFF',
        '500': '#9095A1FF',
        '700': '#323743FF',
        '900': '#171A1FFF',
        DEFAULT: '#5068E2',
      },
      primary: {
        '100': '#f2f4fd',
        '150': '#dde2fa',
        '200': '#c9d1f6',
        '250': '#b5bff3',
        '300': '#a1aef0',
        '350': '#8c9cec',
        '400': '#788be9',
        '450': '#6479e6',
        '500': '#5068E2',
        '550': '#3753de',
        '600': '#2341d6',
        '650': '#1f39bd',
        '700': '#1b32a4',
        '750': '#172a8c',
        '800': '#132373',
        '850': '#0f1b5a',
        '900': '#0b1442',
        DEFAULT: '#5068E2',
      },
      secondary: {
        '100': '#f2f6fd',
        '150': '#e2ecfa',
        '200': '#d2e1f8',
        '250': '#c2d6f5',
        '300': '#b2ccf3',
        '350': '#a2c1f0',
        '400': '#92b7ee',
        '450': '#82aceb',
        '500': '#70A0E9',
        '550': '#538de4',
        '600': '#3478df',
        '650': '#2066cf',
        '700': '#1b57b0',
        '750': '#174791',
        '800': '#123872',
        '850': '#0d2953',
        '900': '#081934',
        DEFAULT: '#70A0E9',
      },
      info: {
        '100': '#f1f8fd',
        '150': '#daecfa',
        '200': '#c3e1f8',
        '250': '#acd5f5',
        '300': '#94c9f2',
        '350': '#7dbeef',
        '400': '#66b2ec',
        '450': '#4fa6e9',
        '500': '#379ae6',
        '550': '#1d8de3',
        '600': '#197dca',
        '650': '#166db0',
        '700': '#125d95',
        '750': '#0f4c7b',
        '800': '#0c3c61',
        '850': '#092c47',
        '900': '#061c2d',
        DEFAULT: '#379ae6',
      },
      warning: {
        '100': '#fef9ee',
        '150': '#fcf0d7',
        '200': '#fae7c0',
        '250': '#f8dea9',
        '300': '#f6d491',
        '350': '#f4cb7a',
        '400': '#f2c263',
        '450': '#f0b94b',
        '500': '#efb034',
        '550': '#eca517',
        '600': '#d29211',
        '650': '#b57e0f',
        '700': '#98690c',
        '750': '#7a550a',
        '800': '#5d4108',
        '850': '#402c05',
        '900': '#221803',
        DEFAULT: '#efb034',
      },
      danger: {
        '100': '#fdf2f2',
        '150': '#f9dbdc',
        '200': '#f5c4c6',
        '250': '#f1adaf',
        '300': '#ed9699',
        '350': '#e97f83',
        '400': '#e5696d',
        '450': '#e25256',
        '500': '#de3b40',
        '550': '#d9252b',
        '600': '#c12126',
        '650': '#aa1d22',
        '700': '#93191d',
        '750': '#7b1518',
        '800': '#641114',
        '850': '#4d0d0f',
        '900': '#36090b',
        DEFAULT: '#de3b40',
      },
      success: {
        '100': '#eefdf3',
        '150': '#d3f9e0',
        '200': '#b8f5cd',
        '250': '#9df2b9',
        '300': '#82eea6',
        '350': '#67ea93',
        '400': '#4ce77f',
        '450': '#31e36c',
        '500': '#1dd75b',
        '550': '#1ac052',
        '600': '#17a948',
        '650': '#14923e',
        '700': '#117b34',
        '750': '#0e642a',
        '800': '#0a4d20',
        '850': '#073517',
        '900': '#041e0d',
        DEFAULT: '#1dd75b',
      },
    },
    extend: {
      fontSize: {
        t1: ['0.6875rem', '1.125rem'],
        t2: ['0.75rem', '1.25rem'],
        t3: ['0.875rem', '1.375rem'],
        t4: ['1rem', '1.625rem'],
        t5: ['1.125rem', '1.75rem'],
        t6: ['1.25rem', '1.875rem'],
        t7: ['1.5rem', '2.25rem'],
        t8: ['2rem', '3rem'],
        t9: ['2.5rem', '3.5rem'],
        t10: ['3rem', '4.25rem'],
      },
      spacing: {
        s0: '0.125rem',
        s1: '0.25rem',
        s2: '0.375rem',
        s3: '0.5rem',
        s4: '0.75rem',
        s5: '1rem',
        s6: '1.25rem',
        s7: '1.5rem',
        s8: '1.75rem',
        s9: '2rem',
        s10: '2.25rem',
        s11: '2.5rem',
        s12: '2.75rem',
        s13: '3rem',
        s14: '3.5rem',
        s15: '4rem',
        s16: '6rem',
        s17: '8rem',
        s18: '12rem',
        s19: '16rem',
        s20: '24rem',
      },
      fontFamily: {
        heading: 'Epilogue',
        body: 'Inter',
      },
      width: {
        Sz_NONE: '0rem',
        Sz0: '0.125rem',
        Sz1: '0.25rem',
        Sz2: '0.375rem',
        Sz3: '0.5rem',
        Sz4: '0.75rem',
        Sz5: '1rem',
        Sz6: '1.25rem',
        Sz7: '1.5rem',
        Sz8: '1.75rem',
        Sz9: '2rem',
        Sz10: '2.25rem',
        Sz11: '2.5rem',
        Sz12: '2.75rem',
        Sz13: '3rem',
        Sz14: '3.25rem',
        Sz15: '3.5rem',
        Sz16: '3.75rem',
        Sz17: '4rem',
        Sz18: '6rem',
        Sz19: '8rem',
        Sz20: '12rem',
        Sz21: '16rem',
        Sz22: '24rem',
        Sz23: '32rem',
        Sz24: '40rem',
        Sz25: '48rem',
        Sz26: '56rem',
        Sz27: '64rem',
      },
      height: {
        Sz_NONE: '0rem',
        Sz0: '0.125rem',
        Sz1: '0.25rem',
        Sz2: '0.375rem',
        Sz3: '0.5rem',
        Sz4: '0.75rem',
        Sz5: '1rem',
        Sz6: '1.25rem',
        Sz7: '1.5rem',
        Sz8: '1.75rem',
        Sz9: '2rem',
        Sz10: '2.25rem',
        Sz11: '2.5rem',
        Sz12: '2.75rem',
        Sz13: '3rem',
        Sz14: '3.25rem',
        Sz15: '3.5rem',
        Sz16: '3.75rem',
        Sz17: '4rem',
        Sz18: '6rem',
        Sz19: '8rem',
        Sz20: '12rem',
        Sz21: '16rem',
        Sz22: '24rem',
        Sz23: '32rem',
        Sz24: '40rem',
        Sz25: '48rem',
        Sz26: '56rem',
        Sz27: '64rem',
      },
      borderRadius: {
        xs: '0.125rem',
        s: '0.1875rem',
        m: '0.25rem',
        l: '0.375rem',
        xl: '0.5rem',
        '100-percent': '100%',
      },
      boxShadow: {
        xs: '0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)',
        s: '0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)',
        m: '0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)',
        l: '0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)',
        xl: '0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
