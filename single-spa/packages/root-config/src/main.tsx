
import './index.css'

import { registerApplication, start } from 'single-spa'

const app1 = '@gocontact/app1';
const app2 = '@gocontact/app2';

registerApplication({
    name: 'app1',
    app: () => import(/* @vite-ignore */ app1),
    activeWhen: (location) => location.pathname === "/",

});

registerApplication({
  name: 'app2',
  app: () => import(/* @vite-ignore */ app2),
  activeWhen: '/app2'
});

start();

/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */