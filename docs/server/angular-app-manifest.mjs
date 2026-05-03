
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
    'index.csr.html': {size: 1339, hash: '928cc95855776f5752af48da6d9f3f690f391fb4fca30f7f1fe2d55747523ce1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '5bff91fa35760cd4acb1ef554d3e4841100704092e2d6aff3ac3442b02b2508b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10487, hash: 'e4ad362616012890303d87ddc7c6160913266d19514f5451448e305ff16e477e', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: 'e304a455db7a78b239e731f9de04c77d6b6211aacaf413cd26c4b704840fd08d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: 'd762e50e49c94e5f9bd6c3bcd2e66dafaf382de25ef8217b206f49bc2175bb7e', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 29301, hash: '1bb4a6257479520ae73cd22da8983a4c71652407d489e72e770245db67ad0dea', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
