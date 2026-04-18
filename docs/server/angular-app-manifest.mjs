
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
    'index.csr.html': {size: 1339, hash: 'b533ec00e2c44b99530575045323ec80f3dee5468ca7e0bebcc02171fd786a28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'bd1d09fe92e2a791ea7384b213df7d15cafff95c321ccde17fc739ab3932729e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10840, hash: '93e7b78c73337366cc5fefce2102887c2bc7642384b152ee2550e38083089472', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 8609, hash: '537645fb93a719d3af292a205b20fcfa2cdcd3dd64806c8c9119b9af0869eca1', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 10860, hash: '69e6b1f1affc42b45642d364cdbebc5d3971a0fc8ae48e710e9242ca1f5aa8f1', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 28832, hash: 'e2aeb1ef1e9216c17cd05382c20b81936d58cbe10f4b7f6e96b2ebf908bbab7f', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
