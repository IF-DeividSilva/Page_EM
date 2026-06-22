
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
    'index.csr.html': {size: 1339, hash: '78bcbb7fc46b64ba7d3ed8612839fa8d74f9dd7386cb29a2c164d3cc9a172cca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '91788e0a6ef33ee12bf3a129d31da18ef22f6f18750f29387d36916c499c2c87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10716, hash: '58fac89ced27673701552548b0b94eecc6b230fba1d25a84d35ddcdc8a6c2d59', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10696, hash: 'dbf303f655344bdc33f8074e44bb87742a36e6859e17b947ac71efa1bb1e16cd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10187, hash: '5211037fdf67ce7845258d5956cc3323f659122870ad1ec0039c75ae3a88a155', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 33312, hash: '76fa28cb33835b3cbb0b256a0057375a31be1d0ebce87f9333b445d4b9424583', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
