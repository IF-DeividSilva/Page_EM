
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Page_EcoMuseu/',
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
    'index.csr.html': {size: 447, hash: 'c808551dbf13ab850800c32e2a7233f609849e3f90697a2b56876489e3256461', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'f1337436784ffd36663976a586e1b14f045c80c44a3fd68af7bc733ad21e54ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home-component/index.html': {size: 1918, hash: '7d2a7a2c308d401ec43708939ce57765688a213f0b93f26a99a59bd60b0fa09e', text: () => import('./assets-chunks/home-component_index_html.mjs').then(m => m.default)},
    'pagina1-component/index.html': {size: 1705, hash: '09c7908678cee7b1a29b3c1643c83c1bb1e76b80b81c8ab9f55a697b8f052775', text: () => import('./assets-chunks/pagina1-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
