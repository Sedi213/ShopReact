import  Home  from "./Pages/Home";
import SinglePhone from "./Pages/SinglePhone";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/page/:id',
    element: < SinglePhone/>
  }
];

export default AppRoutes;
