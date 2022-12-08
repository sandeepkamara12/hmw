import Profile from "./pages/Profile";
import Projects from "./pages/Projects/Index";
import EmptyTask from "./components/tasks/EmptyTask";
import ProjectDetails from "./pages/Projects/Details";

const routes = [
  {
    path: "/profile-setup",
    component: <Profile />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/backlog",
    component: <backlog />,
  },
  {
    path: "/projects/:slug/:name",
    component: <ProjectDetails />,
  },
  {
    path: "/task/:slug/:name",
    component: <EmptyTask />,
  },
  {
    path: "/empty-task",
    component: <EmptyTask />,
  },
];

export default routes;
