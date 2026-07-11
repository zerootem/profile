export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://6a5246ff6f6c51bd39014cef.imgix.net/sandbox/%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A7%D9%A1%D9%A1_%D9%A0%D9%A2%D9%A3%D9%A9%D9%A4%D9%A9.png',
      light: 'https://6a5246ff6f6c51bd39014cef.imgix.net/sandbox/%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A7%D9%A1%D9%A1_%D9%A0%D9%A2%D9%A3%D9%A9%D9%A4%D9%A9.png',
      alt: 'صورة محمد الذاهبي'
    },
    meetingLink: 'https://cal.com/',
    email: 'modweeb3@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `موقع ModWeeb • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/modweeb',
      'target': '_blank',
      'aria-label': 'حساب ModWeeb على GitHub'
    }, {
      'icon': 'i-simple-icons-gmail',
      'to': 'mailto:modweeb3@gmail.com',
      'target': '_blank',
      'aria-label': 'البريد الإلكتروني'
    }, {
      'icon': 'i-simple-icons-whatsapp',
      'to': 'https://wa.me/967779244322',
      'target': '_blank',
      'aria-label': 'واتساب'
    }]
  }
})
