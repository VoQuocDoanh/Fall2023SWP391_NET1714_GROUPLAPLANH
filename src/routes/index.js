import Home from "../Pages/Home";
import listBeat from "../Pages/ListBeat";
import ListUser from "../Pages/ListUser/ListUser";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateBeat from "../Pages/UpdateBeat";
import UploadBeat from "../Pages/UploadBeat";
import ViewBeat from "../Pages/ViewBeat";
import ViewCart from "../Pages/ViewCart";


const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/updatebeat",
    component: UpdateBeat,
  },
  {
    path: "/uploadbeat",
    component: UploadBeat,
  },
  {
    path: "/viewbeat",
    component: ViewBeat,
  },
  {
    path: "/listuser",
    component: ListUser,
  },
  {
    path: "/viewcart",
    component: ViewCart,
  },
  {
    path: "/listbeat",
    component: listBeat,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
