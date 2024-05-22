import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "零叉cafebabe",
  description: "零叉cafebabe",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './logo.jpg',
    nav: [
      {text:'我的博客', link: 'https://misakatang.cn'},
      {text:'Uptime-Kuma', link: 'https://uptime.oxcafebabe.cn'},
      {text:'Traefik', link: 'https://traefik.oxcafebabe.cn/dashboard/'},
      {text:'YARR', link: 'https://yarr.oxcafebabe.cn'},
      {text:'Portainer', link: 'https://portainer.oxcafebabe.cn'},
      // {text:'Dozzle', link: 'https://dozzle.oxcafebabe.cn'},
      // {text:'Plausible', link: 'https://plausible.oxcafebabe.cn'},
      {text:'青龙面板', link: 'https://qinglong.oxcafebabe.cn'},
      {text:'Bitwarden', link: 'https://bitwarden.oxcafebabe.cn'},
      {text:'RSS Hub', link: 'https://rsshub.oxcafebabe.cn'},
      // {text:'V2rayA', link: 'https://v2raya.bilibifun.cn'},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TangMisaka23001' }
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2021036320号-2</a>',
      // copyright: 'Copyright © 2019-present Evan You'
    },
  }
})
