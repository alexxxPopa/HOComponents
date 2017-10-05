import { App, Resources } from '../components';
import requireAuth from '../components/require_auth';

const routes = [
  {
    path: "/resources",
    component: requireAuth(Resources),
    exact:true,
  },
  {
    path: "/",
    component: App,
    exact:true,
  }
]

export default routes;