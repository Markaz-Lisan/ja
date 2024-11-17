import { QuartzConfig } from './quartz/cfg'
import * as Plugin from './quartz/plugins'

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: 'مركز لسان: 日本語',
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: 'ar',
    baseUrl: 'lisan.center/ja',
    ignorePatterns: ['private', 'templates', '.obsidian'],
    defaultDateType: 'modified',
    theme: {
      fontOrigin: 'googleFonts',
      cdnCaching: true,
      typography: {
        header: 'Schibsted Grotesk',
        body: 'Source Sans Pro',
        code: 'IBM Plex Mono'
      },
      colors: {
        lightMode: {
          light: '#faf8f8',
          lightgray: '#e5e5e5',
          gray: '#b8b8b8',
          darkgray: '#4e4e4e',
          dark: '#2b2b2b',
          secondary: '#284b63',
          tertiary: '#84a59d',
          highlight: 'rgba(143, 159, 169, 0.15)'
        },
        darkMode: {
          light: '#161618',
          lightgray: '#393639',
          gray: '#646464',
          darkgray: '#d4d4d4',
          dark: '#ebebec',
          secondary: '#7b97aa',
          tertiary: '#84a59d',
          highlight: 'rgba(143, 159, 169, 0.15)'
        }
      }
    }
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ['frontmatter', 'git', 'filesystem']
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ collapseByDefault: true }),
      Plugin.CrawlLinks({ markdownLinkResolution: 'shortest' }),
      Plugin.Description()
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableRSS: true,
        enableSiteMap: true,
        includeEmptyFiles: false,
        rssFullHtml: false,
        rssLimit: 40
      }),
      Plugin.Assets(),
      Plugin.NotFoundPage(),
      Plugin.CNAME()
    ]
  }
}

export default config
