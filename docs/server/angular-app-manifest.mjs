
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
    "route": "/Page_EcoMuseu/museu/pagina1-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 479, hash: 'eb28de1fcb5a78f8850a0de3a6d5f32882a525e43b30370b5106e6f13813687e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '2e1885f2eb4313e7efed030635a9e2f8b8653714cfad39acf59842ec0d1e367d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2058, hash: 'e302a21a67c4ef579ab3a876b2e2ab001af9b0b1ad163d88e0643590dca47e51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'museu/pagina1-component/index.html': {size: 1202, hash: '03a4bcc8ec6743b331096f5c46278a9364ade9ed6ea671dfb00b21525d3ab952', text: () => import('./assets-chunks/museu_pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
