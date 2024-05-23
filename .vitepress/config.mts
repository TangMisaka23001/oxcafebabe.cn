import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "零叉cafebabe",
  description: "零叉cafebabe",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './logo.jpg',
    nav: [
      {
        text: 'Self Hosted',
        items: [
          { text: 'Memos', link: 'https://memo.oxcafebabe.cn' },
          { text: 'Excalidraw', link: 'https://board.oxcafebabe.cn' },
          { text: 'Yarr', link: 'https://yarr.oxcafebabe.cn' },
          { text: 'Traefik', link: 'https://traefik.oxcafebabe.cn/dashboard/' },
          { text: 'Portainer', link: 'https://portainer.oxcafebabe.cn' },
          { text: 'Qinglong', link: 'https://qinglong.oxcafebabe.cn' },
          { text: 'Bitwarden', link: 'https://bitwarden.oxcafebabe.cn' },
          { text: 'RSS Hub', link: 'https://rsshub.oxcafebabe.cn' },
        ]
      },
      { text: '开源生活', link: 'https://doc.misakatang.cn' },
      { text: 'LobeChat', link: 'https://chat.oxcafebabe.cn' },
      { text: `MisakaTang's Blog`, link: 'https://misakatang.cn' },
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
