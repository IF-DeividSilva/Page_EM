
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
    'index.csr.html': {size: 1390, hash: 'd38d7cf4ea583b55223cf1701cb9f5d652e5c6fed63feb31f5507b74cfadc36c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1903, hash: 'e7c3961c4072edea51971be9d06a6f48fd49bbb2e93a57d6ed7e9055cd021167', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 9832, hash: '4a47311a52976aeb252c16b2cbf3aa584afed60dc1cdeafca46746694f26e088', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 5655, hash: 'f07d204cadecdb9d9d7ed46a86accd9e36efffdfbdcfb85be4501f558f2b4dcc', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5885, hash: '5e4132aad40aeccfd5bf44e424062cee2d5347e0dcd8430b077ef5b38ec30c6a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
