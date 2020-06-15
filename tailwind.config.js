module.exports = {
  purge: [],
  theme: {
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    maxWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    maxHeight: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    // colors: {
    //   magent: {
    //     lighter: '#7f3f98',
    //     default: '#7f3f98',
    //     dark: '#723989',
    //   },
    //   cyan: {
    //     lighter: '#00aeef',
    //     default: '#00aeef',
    //     dark: '#0095cc',
    //   },
    // },
    customForms: (theme) => ({
      default: {
        select: {
          icon:
            '<svg fill="#e2e8f0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
        },
        // checkbox: {
        //   icon:
        //     '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
        // },
      },
    }),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    // screens: {
    //   tablet: '640px',
    //   laptop: '1024px',
    //   desktop: '1280px',
    // },
    fontFamily: {
      display: ['Roboto'],
      body: ['Roboto'],
    },
    extend: {},
  },
  variants: {
    borderWidth: ['responsive', 'odd', 'hover', 'focus'],
    backgroundColor: [
      'responsive',
      'group-hover',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    tableLayout: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
