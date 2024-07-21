import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderSlice";

import TopHeader from "@components/shared/baseShared/TopHeader/TopHeader";
import Footer from "@components/shared/baseShared/Footer/Footer";
import { Outlet } from "react-router-dom";
import MainLoader from "../../components/shared/Loaders/MainLoader";

const BaseLayout = () => {
  const dispatch = useDispatch();
  const fireLoader = () => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(hideLoader());
    }, 800);
  };

  useEffect(() => {
    fireLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainLoader />
      <TopHeader />
      <div className="pt-[84px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
