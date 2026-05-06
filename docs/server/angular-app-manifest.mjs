
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
    'index.csr.html': {size: 1339, hash: '1558c887290f97ef918b74154b59d682c75c22bb3ef204a1a4ee4877bf5fa104', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '2c75a4b3218698d85a2f996f988faf85a3ee6efa6ca42f353e74fd55c9ab034e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10487, hash: 'cefc3ef0338a433c3fbd2b7740d3ea6b92290a4f06d409663556d1421a0cbc13', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: 'eee349d8cd18ce1a444cfa96337c27d97e7eadacc967c74caea3fb66bef2fdcb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: '7396f2f769adfe69d3b5565a3d77d270999ec2b89e7b0025dcbc2f454451a44e', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 30983, hash: 'e36b21c339d4d3992287b0f7c450e752376fcd42de819d8b418cc68ba2987b8a', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
