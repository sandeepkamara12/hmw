
import Terms from './pages/TermsOfService';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Upcoming from './components/projects/Upcoming';
import EmptyTask from './components/tasks/EmptyTask';

const routes = [

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
