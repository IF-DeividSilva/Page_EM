
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://if-deividsilva.github.io/Page_EcoMuseu/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/sobre-component"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/acervo-component"
  },
  {
    "renderMode": 1,
    "route": "/Page_EcoMuseu/detalhes-component/*"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/visite-nos-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1339, hash: 'cfd15e2a175facebeffc6ad64f55b91b66fb4a8591311f06e7bfc1b5b6ea4b54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'a7d53dbe3e12e18f716f4bb3f80627c2b250567dd9ef8e557309d68fccdb92ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8564, hash: 'c86475a1b343858b02d3406786dc747bc9559c14c2f982f2abbf12b99e2328d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10700, hash: '687709fe01bbc2694fe7a0d7b51ae278b76d63b98efaac11e21135831c1b7be1', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 8169, hash: 'b8864e40f505d20dd968a5eca35467a603cfe317894689544a09721ae0f4ca5f', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 27142, hash: 'ef050765be37a67552de23dbb979dd7c49d259437d1993d964a4e7cf898f8498', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
