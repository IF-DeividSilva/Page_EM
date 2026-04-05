import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'detalhes-component/:id',
    renderMode: RenderMode.Client, // renderiza no browser, não no build
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // o resto continua pré-renderizando
  },
];