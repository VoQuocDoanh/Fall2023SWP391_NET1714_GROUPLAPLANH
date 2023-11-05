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
import ChordsDetails from "../Pages/ChordsDetails";
import Songs from "../Pages/Songs";
import ViewBeatsAll from "../Pages/ViewBeatsAll";
import Uploadsong from "../Pages/UploadSong";
import MusicianProfile from "../Pages/MusicianProfile";
import AdminProfile from "../Pages/AdminProfile";
import ViewDetailSong from "../Pages/ViewDetailSong";
import MyProfile from "../Pages/MyProfile";
import RegisterActivation from "../Pages/RegisterActivation";
import ListBeatPurchased from "../Pages/listBeatPurchased";
import ViewDetailBeatPurchased from "../Pages/ViewDetailBeatPurchased";
import PaymentSuccess from "../Pages/PaymentSuccess";
import PaymentCancel from "../Pages/PaymentCancel";
import ViewDetailsUser from "../Pages/ViewDetailsUser";
import ViewDetailsMusician from "../Pages/ViewDetailsMusician";
import ViewDetailBeatMusician from "../Pages/ViewDetailBeatMusician";
import ListOfSong from "../Pages/ListOfSong";
import FeedbackMusician from "../Pages/FeedbackMusician";
import UpdateProfile from "../Pages/UpdateProfile";
import ReportUser from "../Pages/ReportUser";
import ViewDetailsUserByAdmin from "../Pages/ViewDetailsUserByAdmin";
import ListBeatSoldOut from "../Pages/ListBeatSoldOut";
import Contact from "../Pages/Contact";
import MyCollection from "../Pages/MyCollection";
import MyPlayListChordDetail from "@/Pages/MyPlaylistChordetail";
import MyPLayListDetail from "@/Pages/MyPlaylistSongDetail";
import SongDetail from "@/Pages/SongDetails";
import ListAllUserBan from "../Pages/listAllUserBan";
import UserSong from "@/Pages/UserSong";
import ReportSong from "@/Pages/ReportSong";
import ListUserReport from "@/Pages/ListUserReport";
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
    path: "/updatebeat/:beatId",
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
    path: "/listuserreport",
    component: ListUserReport,
  },
  {
    path: "/listAllUserBan",
    component: ListAllUserBan,
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
    path: "/viewdetailbeat/:beatId",
    component: ViewDetailBeat,
  },
  {
    path: "/viewdetailbeatpurchased/:beatId",
    component: ViewDetailBeatPurchased,
  },
  {
    path: "/viewdetailbeatmusician/:beatId",
    component: ViewDetailBeatMusician,
  },
  {
    path: "/chordsdetails",
    component: ChordsDetails,
  },
  {
    path: "/songs",
    component: Songs,
  },
  {
    path: "/usersong",
    component: UserSong,
  },
  {
    path: "/reportsong",
    component: ReportSong,
  },
  {
    path: "/viewbeatsall",
    component: ViewBeatsAll,
  },
  {
    path: "/uploadsong",
    component: Uploadsong,
  },
  {
    path: "/musicianprofile",
    component: MusicianProfile,
  },
  {
    path: "/adminprofile",
    component: AdminProfile,
  },
  {
    path: "/viewdetailsong",
    component: ViewDetailSong,
  },
  {
    path: "/myprofile",
    component: MyProfile,
  },

  {
    path: "/registeractivation",
    component: RegisterActivation,
  },
  {
    path: "/listbeatpurchased",
    component: ListBeatPurchased,
  },
  {
    path: "/listbeatsoldout",
    component: ListBeatSoldOut,
  },
  {
    path: "/payment/cancel",
    component: PaymentCancel,
  },
  {
    path: "/payment/success",
    component: PaymentSuccess,
  },
  {
    path: "/ViewDetailsUserByAdmin/:id",
    component: ViewDetailsUserByAdmin,
  },
  {
    path: "/ViewDetailsMusician/:id",
    component: ViewDetailsMusician,
  },
  {
    path: "ViewDetailsUser/:id",
    component: ViewDetailsUser,
  },
  {
    path: "/listofsong",
    component: ListOfSong,
  },
  {
    path: "/FeedbackMusician",
    component: FeedbackMusician,
  },
  {
    path: "/UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/ReportUser",
    component: ReportUser,
  },
  {
    path: "/Contact",
    component: Contact,
  },
  //////////////////////
  {
    path: "/MyCollection",
    component: MyCollection,
    customLayout: true,
  },
  {
    path: "/my-playlist-chord/:id",
    component: MyPlayListChordDetail,
    customLayout: true,
  },
  {
    path: "/my-playlist-song/:playListName",
    component: MyPLayListDetail,
    customLayout: true,
  },
  {
    path: "/song/:id",
    component: SongDetail,
    customLayout: true,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
