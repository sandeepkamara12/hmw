import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithPhone from './pages/VerificationWithPhone';
import VerificationWithEmail from './pages/VerificationWithEmail';
import Terms from './pages/TermsOfService';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Upcoming from './components/projects/Upcoming';
import EmptyTask from './components/tasks/EmptyTask';
import { Navigate } from 'react-router-dom';

const routes = [
   {
      path:"/" ,
      component: <Navigate to="/auth" />,
   },
   {
      path: "/auth",
      component: <SigninPhone />,
   },
   {
      path: "/auth/email",
      component: <SigninEmail />,
   },
   {
      path: "/auth/verify",
      component: <VerificationWithPhone />,
   },
   {
      path: "/auth/verify/email",
      component: <VerificationWithEmail />,
   },
   {
      path: "/profile-setup",
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
   {
      path: "/tasks",
      component: <Tasks />,
   },
   {
      path: "/empty-task",
      component: <EmptyTask />,
   },
]

export default routes;
