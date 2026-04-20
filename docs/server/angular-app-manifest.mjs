
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
    'index.csr.html': {size: 1339, hash: 'ab193d5b9d2cd97a8d311a877e9d26966fb917f707a72bea1576bd3a3f97d044', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '95cbfce45a7d356bb067ea11acd36031d3b285683c9f6ebac30e499dba946f48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: '7d4275e16c52ba952e5c0be3ff795c884f51715a7a3a60b91903269b7af6fbee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: '6f8943c3c9eaa5a765c729918d575a619b82f36d267e347cb03a30fc23ac4abd', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10487, hash: '63bdf2c672cfd6929e4baebdb0cc2789e391326d572cab46193f85d1d165f3dd', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 28975, hash: 'bcf40013a44af88a0709e9c75e1eded6ef84484c04d6bfd120a12b3a22e67b2b', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
