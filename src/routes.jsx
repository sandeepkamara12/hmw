import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithPhone from './pages/VerificationWithPhone';
import VerificationWithEmail from './pages/VerificationWithEmail';
import Terms from './pages/TermsOfService';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Upcoming from './components/projects/Upcoming';

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
   {
      path: "/terms",
      component: <Terms />,
   },
   {
      path: "/projects",
      component: <Projects />,
   },
   {
      path: "/upcoming",
      component: <Upcoming />,
   },
]

export default routes;
