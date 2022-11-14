import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithPhone from './pages/VerificationWithPhone';

const routes = [
   {
      path: "/signin-email",
      component: <SigninEmail />,
   },
   {
      path: "/signin-phone",
      component: <SigninPhone />,
   },
   {
      path: "/verification-phone",
      component: <VerificationWithPhone />,
   },
]

export default routes;
