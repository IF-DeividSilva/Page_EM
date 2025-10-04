
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
    "route": "/Page_EcoMuseu/pagina1-component"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/acervo-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1339, hash: 'e830c6d5136115c155c9fcdd17be39dc3190e0d79b51f312c1419647bdf27f45', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'a62adcac50af743dc47cf9d62a48e77aa179261f566902acb7e23a73c33541fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 5604, hash: '68462060a573df5fca580a8e90af50b53254b50644f38e1ec4d9ad8c4faf9be5', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5834, hash: '1d51295d90964c4083c1fa3218fb64cade6f2c6d8ddf2814d2e69c2cf89c1479', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 9781, hash: '765802215de1e1f82f8052ef462a01799bf62b9d3e6e39d0a4c4ead9bcf06440', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
