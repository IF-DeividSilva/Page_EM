
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
    'index.csr.html': {size: 1339, hash: '54ee0c967b9258148d1ab1ae8a0241b856eae10a3816012614723d12c244abec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'fcbf020f661e3fd60ab90cfb5b2b01a21e0c917c1e8515c2431b28dbf98ef41d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 5597, hash: 'dfb272da36906d886584b39458c9f5aca05076829adaa6eb06ccc03a490c3dc4', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5938, hash: 'bdebf337709065978229d1179c75302a83074779e71b92d6c7bfcd8fcc77ac6f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 7839, hash: 'b7fd9ff12ee68a084fc11c8abd664e717820ddeea4e2d5de35ecd64b46d8dabd', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 24423, hash: '5c55a6ee918233f30a6a1a2e4932c9fac735a786ad18a20e5ec1e2e4083242ec', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
