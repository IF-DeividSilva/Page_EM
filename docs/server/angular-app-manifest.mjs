
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
    'index.csr.html': {size: 1339, hash: '49ee79983ddfcd871e05c69332e9b26afe1c09d9ad922dfd5ce32976f77b0fde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '18dfed594f801318c1ec9d3d191dfd4b264f02bcd90fb6a5106db46b25be4236', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: '0a4b44c1c3da7dc48405d2b38db48ef8ea7fa7f2853b768b564e1720dd0699b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: '74153ae29635cd22225b771659ba2fa04f3453b47f8b61aa6227fb9616b60be4', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10487, hash: 'e91eb435d156122ee2883b5ea121c81d1c929e0386b6040f922197e19ddab02a', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 29139, hash: '3e1be639c0700ba905241cd9614a988727656b78980887603a7f76f5463cc0ef', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
