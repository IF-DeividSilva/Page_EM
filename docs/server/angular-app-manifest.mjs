
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
    "route": "/Page_EcoMuseu/pagina1-component"
  },
  {
    "renderMode": 2,
    "route": "/Page_EcoMuseu/acervo-component"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1339, hash: '9801aeb4a637123a62a20dcf3739580acc71f194fe27e5d0295926bbb3de15e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '485bafdfd0b29d63be86fa70945515bc228fd6ea571b311b1dd24dcf5716dfb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 10405, hash: '27cf97933fec50715d4a4942d43db438c539c4e12652d13f357add1c0085f7e9', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6336, hash: '67d69507988e040b3ff0d792f4044bdf5dc4bf9c1e0bd1f0a526302f64e79c35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 6072, hash: 'bacb6c31fc6bf0715c65a9d95f52cd2a98b422df9cb1b62e5aa461b9dddd43f7', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
