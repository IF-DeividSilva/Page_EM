
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
    'index.csr.html': {size: 479, hash: '071c3297c1b821bfce5ee67717eb7f340c2485c7f926bd6310cef27b091fb188', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '55dbff2f111b0940a80d274d42c95a07e4d7a865672ebe712f1d47aab4915a0e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22581, hash: 'b8dd3a5f7b386b6d04513d756892e2912a08afba77a4ae1549210daa9e1195ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'museu/pagina1-component/index.html': {size: 21725, hash: 'a4bb6c4012c2968279b28ada2fce6958bcd1668ee8566f7bca776e9e6730a052', text: () => import('./assets-chunks/museu_pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
