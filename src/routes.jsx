import Profile from "./pages/Profile";
import Projects from "./pages/Projects/Index";
import EmptyTask from "./components/tasks/EmptyTask";
import ProjectStatus from "./pages/Projects/ProjectStatus";
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
    path: "/project/:slug/:name",
    component: <ProjectDetails />,
  },
  {
    path: "/project/:slug",
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
  {
    path: "/project-status",
    component: <ProjectStatus />,
  },
];

export default routes;
