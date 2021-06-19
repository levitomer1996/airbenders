import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Indexpage from "./Index/Indexpage";
import Contactus from "./Contactus/Contactus";
import VideosPage from "./Videos/VideosPage";
import ManagingPage from "./Managing/ManagingPage";
import abserver from "../api/abserver";
import AuthContext from "../Context/AuthContext";
import getToken from "../Hooks/getToken";
import AnnouncementPage from "./Announcement/AnnouncementPage";
import getLocationTitle from "../Helpers/getLocationTitle";

const Main = () => {
  const { Signin, Signout } = useContext(AuthContext);
  const [initialzingDone, setInitialzingDone] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(`Air Benders`);
  const location = useLocation();
  //Uses as is connected resolver
  useEffect(async () => {
    if (getToken()) {
      try {
        const res = await abserver.post("auth/validatuserbytoken", {
          token: getToken(),
        });
        Signin(res.data);
        setInitialzingDone(true);
      } catch (error) {
        Signout();
        setInitialzingDone(true);
      }
    } else {
      setInitialzingDone(true);
    }
  }, []);

  //Changes title by location's name
  useEffect(() => {
    setCurrentLocation(getLocationTitle(location.pathname));
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>{currentLocation}</title>
      </Helmet>

      <Switch>
        <Route exact path="/">
          <Indexpage />
        </Route>
        <Route path="/contactus">
          <Contactus />
        </Route>
        <Route path="/videos">
          <VideosPage />
        </Route>
        <Route path="/managing">
          <ManagingPage initialzingDone={initialzingDone} />
        </Route>
        <Route path="/announcements">
          <AnnouncementPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
