
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
    'index.csr.html': {size: 1339, hash: '3f5c4f0bad9ead80520c274fb8323097af41f310d4077a2c4e22498093090e13', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'd8237fcc29bfd6e2488bc7fbecc875d897001cbd9839aec50c871ca758f41551', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5938, hash: '0ffa706435cdcb1e0b685a70c943e9962c231ccb24e141960bf75ef26714f81b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 7839, hash: '1d24cc0f1f2f86121d9dada469a2208fc74f9651b86753351963aa53cc513dbc', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 5597, hash: '4f3435108e461e2e51f55cb42d8a4d8e120a293972cbedda969e4c8b72a178cd', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 24423, hash: '34b01b684f635ea071671f15089bd092482bcc0cbaac2d3ee271cf35b70feb7a', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
