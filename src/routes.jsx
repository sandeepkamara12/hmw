import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithPhone from './pages/VerificationWithPhone';
import VerificationWithEmail from './pages/VerificationWithEmail';

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
   {
      path: "/verification-email",
      component: <VerificationWithEmail />,
   },
]

export default routes;
