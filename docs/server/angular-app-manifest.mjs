
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
    'index.csr.html': {size: 1339, hash: '248c99dfc49d1459b1be1255e7dfb92b86425e8b94b3bbe5fea70eb9c49a7291', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'bb71d02210c92fcd0ddbde43b8a723955b6d9325a71bed0dd699d312be82a0a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8322, hash: '34b37451a7c3ab2296de45ee710a51489b9c98dcb6b0094495a752d66e2a93c0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 7927, hash: '3075e56aa732a41f83be404dccb09d751a9ee1e8fcc8377094ffd1973e58c7fc', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10458, hash: '3c07ce48ec9f0bf2f6c5d0ad8bd582c3be79d7b7beb7a27162b86c829e64fcf9', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 26777, hash: '0ad4d452ce4ecedfb1670e4657c55d8a7436bd2a62e09b571f50fe72ddc63ba2', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
