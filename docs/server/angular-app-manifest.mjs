
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
    'index.csr.html': {size: 1339, hash: '19c5ba29709a6f19f2b2dc5091e5826d4db4f3728fe28ce2dc38b058706f76b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '1ea55667305c6343f995f81f71c65038383027f679d736e5ce86ef05dfa71757', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 8169, hash: 'de7c5b05e14cd3bb500f2c8e176c5a23d7101150063795e5b7f7e7d1a3f6ca12', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8564, hash: 'f7e94a33e94562298e7d70a34f5d6a6923ff965cc3d0fe2634c88d05f8fe870c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10700, hash: '376f33b94e4deefaa9ff8ffac74280738c69ac0f61d84100994c101c93abcd19', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 27142, hash: '5b7831edfd7a13c495fd49a11dd084d158ff14ea0ffe26c43f142e8631d8539d', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
