
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
    'index.csr.html': {size: 1339, hash: 'a584988588db9b6b7545805a04977f7a7e88f5e71fb4e56ca435d3b57b3c4091', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'b53f6713768d6b149f5722d22b0275e2cc8343bece2e1d1fae24db53bdab290c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10487, hash: 'a301816eedacb7a5cf717ce04c88dd32adb87097c638ea4db53e8e93e01aeb72', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: '8e43baf4e0342ed944c531f26f5b04d54467f5f9f5cb74ba2cb3f62e407f05c9', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: '072ea5e89b5854914fd89ab5c039546093dbbeccbcae78e4a21e47a73af21918', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 29139, hash: 'd1e831904f659843e69d02523b28a2b4d4e8ef64b3bc4ab9ce7c95ed87876062', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
