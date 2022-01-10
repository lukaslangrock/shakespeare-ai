// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
library.add(faHome, faArrowRight)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Use fontawesome
  Vue.component('font-awesome', FontAwesomeIcon)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Playfair+Display|Libre+Baskerville&display=swap',
  })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Lukas Langrock',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Shakespeare,AI,OpenAI,GTP-3,English',
  })

  head.meta.push({
    name: 'description',
    content: 'AI-Generated Shakespeare Sonnets',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'AI-Generated Shakespeare Sonnets',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'AI-Generated Shakespeare Sonnets',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Shakespeare AI-Sonnets',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Shakespeare AI-Sonnets',
  })
}
