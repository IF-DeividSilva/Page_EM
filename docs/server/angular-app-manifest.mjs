
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
    'index.csr.html': {size: 1339, hash: 'b4fdfaab8b28e90dae2017e704fbeb3b010671cb43880c139a8d35a0667e3ec2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: '0ec183a26302a3b11010afd85b62fa07e5f1bfb4196350912424fe97cd53e70a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre-component/index.html': {size: 11016, hash: 'fc254cc455e4884ec39faa1e46139537c503fb5e658b8639648a0d202a8e841f', text: () => import('./assets-chunks/sobre-component_index_html.mjs').then(m => m.default)},
    'visite-nos-component/index.html': {size: 10475, hash: '62e3d9d860614481c8973b1d9268b38006126cbb4730e62abbe1043f2c3e05f6', text: () => import('./assets-chunks/visite-nos-component_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10996, hash: '844ab3fb8dc11abc769d08af9f5962021bd7e6245255ce254cf2d95e0078af0d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'acervo-component/index.html': {size: 28975, hash: 'daf1c7c8da7e0267974ce272e9572d2c377f58d7c2803291ff43ab97e88e9562', text: () => import('./assets-chunks/acervo-component_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
