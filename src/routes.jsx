import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithPhone from './pages/VerificationWithPhone';
import VerificationWithEmail from './pages/VerificationWithEmail';
import Profile from './pages/Profile';

const routes = [
   {
      path: "/sign-in-email",
      component: <SigninEmail />,
   },
   {
      path: "/",
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
   {
      path: "/profile",
      component: <Profile />,
   },
]

export default routes;
