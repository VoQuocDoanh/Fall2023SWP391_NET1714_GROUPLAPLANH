import Home from "../Pages/Home";
import listBeat from "../Pages/ListBeat";
import ListUser from "../Pages/ListUser/ListUser";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateBeat from "../Pages/UpdateBeat";
import UploadBeat from "../Pages/UploadBeat";
import UploadFile from "../Pages/UploadFile";
import ViewBeat from "../Pages/ViewBeat";
import ViewCart from "../Pages/ViewCart";
import OwlCarousel from "../components/OwlCarousel";
import ViewDetailBeat from "../Pages/ViewDetailBeat";
import ListBeat2 from "../Pages/ListBeat2";
import ChordsDetails from "../Pages/ChordsDetails";
import Songs from "../Pages/Songs";
import ViewBeatsAll from "../Pages/ViewBeatsAll";
import CustomerBeats from "../Pages/CustomerBeats";
import ListSong from "../Pages/ListSong";
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
    path: "/updatebeat/:id",
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
    path: "uploadfile",
    component: UploadFile,
  },

  {
    path: "OwlCarousel",
    component: OwlCarousel,
  },
  {
    path: "/listbeat",
    component: listBeat,
  },
  {
    path: "/viewcart",
    component: ViewCart,
  },
  {
    path: "/viewdetailbeat",
    component: ViewDetailBeat,
  },
  {
    path: "/listbeat2",
    component: ListBeat2,
  }
  ,{
    path: "/chordsdetails",
    component: ChordsDetails,
  }
  ,{
    path: "/songs",
    component: Songs,
  },
  {
    path: "/viewbeatsall",
    component: ViewBeatsAll,
  },
  {
    path: "/customerbeats",
    component: CustomerBeats,
  },
  {
    path: "/listsong",
    component: ListSong,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };