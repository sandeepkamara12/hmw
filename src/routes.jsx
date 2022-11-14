import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';

const routes = [
   {
      path: "/signin-email",
      component: <SigninEmail />,
   },
   {
      path: "/signin-phone",
      component: <SigninPhone />,
   },
]

export default routes;
