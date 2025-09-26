
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://if-deividsilva.github.io/Page_EcoMuseu/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Page_EcoMuseu/home-component",
    "route": "/Page_EcoMuseu"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/home-component"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/pagina1-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 479, hash: '2f092ba2955189edcbe72af66f14e598cfd4e9f85fff46e1879c8d7b06fa80a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '3bfcb4361f9ad65285d0450648cb9ee77f4fb6005d103271cee1ee323cc3cadc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home-component/index.html': {size: 1884, hash: 'e0377b0ababd82317908df342171962611b838e07d100ba29ef4bcd958086e23', text: () => import('./assets-chunks/home-component_index_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 1045, hash: '3a9ba8174b2420d23b631069e8353e7171f953c4311697c0bdb3ed9a057be17a', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
