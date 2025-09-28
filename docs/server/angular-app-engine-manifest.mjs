
export default {
  basePath: 'https://if-deividsilva.github.io/Page_EcoMuseu',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
