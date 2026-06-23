
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
    'index.csr.html': {size: 1339, hash: 'fe55eec930015894c75661466e6fc30d19e4cf3b6ae1f1f3f9fec7131f58e525', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'cbd8c029bdd18c497e42b6ebc7a4a5f815ebaf937c27a0fed698bc4aab6526d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10690, hash: '4c03cd06a42b8d4d14c3fe7f2401a3380bfac35b619d59099657f19cde5ec9dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10181, hash: '0e64177f2d1a68008fad248011f75b0b669f7be893513f97ab429a8c41cdd685', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10710, hash: 'e1bb1281401f9169ba24ba9219977a3d8ee23535e26223bf4eb8a55995564bb4', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 33310, hash: '7a30c9fcf0e8b333b56e7f4716e0f8487af92935d417ad0a59e786dc86d82eb4', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
