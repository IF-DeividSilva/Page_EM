
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
    'index.csr.html': {size: 1339, hash: 'd9905ede4726ebbcd94a0071f12be858b01d19a2a8b9dfd7c29468c244cc0b8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '87534300a0e635b8d1a4c949db644be88cd321d3ed554e4ee6d1f85087409c13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10700, hash: 'd1dd7132feedbe53c9b6d1e3337aa7e2834c973498e20035410d94ab33c24ca3', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8564, hash: '9492d8086b8bcb7c58d35050498af10580081ceb61541a5734a4e0e9a2c9dfa4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 8169, hash: '8e6168467514f0c42fa2fb3160f58e903f975980c66078eaf9955da94198325f', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 27142, hash: '42022b7137d0d01b32fda593f45e292d0847ea23285b772a783de0d26f75edf3', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
