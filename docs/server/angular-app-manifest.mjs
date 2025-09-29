
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://if-deividsilva.github.io/Page_EcoMuseu/1',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/1"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/1/pagina1-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 480, hash: '865b4c9c44c3f790d7696e9ee83130abc6494f6934afe4df074d4847e855f5f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 993, hash: '818b95f41f5b85932f471daa6c1360003d30b8961e556ed4ccf7f2649e8f66be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 237277, hash: 'bdd86c1b0e9477f5d1f0bf5485a13fcc3d441a3e2b9c460305c840a873243c2c', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 237507, hash: 'bc8fed6e2064e6da1fc8bf56eb53fa2e131e2648efc64e3f159b38fefb0bcc01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
