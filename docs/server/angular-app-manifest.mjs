
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
    'index.csr.html': {size: 530, hash: '2603cbf13cd4f8ef19b1cd4631dba8a3c59c1e170cc1e49a57f1cd1aae75aee6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '2ef7ecf5138e50f192d2f40116be4411746d390b29c3dd41722321943495c80c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 239122, hash: '61a57846539565ac9c173b51b58f6bf3755de20fff353e9fcb20cd89d5b74520', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 243069, hash: 'b4c6cec8781ac694ce84dbc00492d07d3d656a5832212a551c175d35c5e9609c', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 238892, hash: 'b3ec85b571fb73e5853e733a9284b092c2bba2926459531d07b82c21e6d643dc', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
