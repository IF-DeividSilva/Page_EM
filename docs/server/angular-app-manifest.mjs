
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
    'index.csr.html': {size: 1339, hash: '785f49ce6342c071a0008e693605043bc5e5e8515689249d075f9ad83eb2d81c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'b34948e36d2fd938de74cb81435850b4104c033de29a2283177dcd084a9eab41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 8169, hash: '1e1d6aeff9e459df29ffdacb2139f50e6fd7f6a117296007f96f540c7de1cc00', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10700, hash: '8506e7e6f61d3d36ff5983e40ddc64f6c4819e774bfc327d29224a9cb8dccb94', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8564, hash: '8ca4cef48fac3565b4fe70445e1ffc2f798166706993c3111a9f30d1b8519858', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 27142, hash: 'e6414550a6650a19f9d8d4af3de3f3f9661647432ff8425118ca139f09454fb8', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
