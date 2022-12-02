import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Upcoming from "./components/projects/Backlog";
import EmptyTask from "./components/tasks/EmptyTask";

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
    path: "/tasks",
    component: <Tasks />,
  },
  {
    path: "/empty-task",
    component: <EmptyTask />,
  },
];

export default routes;
