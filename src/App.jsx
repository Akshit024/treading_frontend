/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Navbar from "./page/navbar/Navbar";
import Portfolio from "./page/portfolio/Portfolio";
import Activity from "./page/activity/Activity";
import Wallet from "./page/wallet/Wallet";
import Withdrawal from "./page/withdrawal/Withdrawal";
import PaymentDetails from "./page/payment details/PaymentDetails";
import StockDetails from "./page/stock details/StockDetails";
import WatchList from "./page/watchlist/WatchList";
import Profile from "./page/profile/Profile";
import SearchCoin from "./page/search/SearchCoin";
import NotFound from "./page/notFound/NotFound";
import Auth from "./page/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./state/Auth/Action";

function App() {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <>
      {auth.user ? (
                <div>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/activity" element={<Activity />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/withdrawal" element={<Withdrawal />} />
                  <Route path="/payment-details" element={<PaymentDetails />} />
                  <Route path="/market/:id" element={<StockDetails />} />
                  <Route path="/watchlist" element={<WatchList />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/search" element={<SearchCoin />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
