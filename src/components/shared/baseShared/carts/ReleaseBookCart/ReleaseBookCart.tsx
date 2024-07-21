import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { add, total } from "src/redux/CartSlice";
import IMAGES from "@assets/images/images";
import "./ReleaseBookCart.scss";

interface Item {
  name: string;
  auther: string;
  price: number;
  LinkPath: string;
}
const ReleaseBookCart = ({ name, auther, price, LinkPath, item }: Item) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="book_item">
      <div className="img_holder">
        <img src={IMAGES.book_3} alt="pic" />
      </div>
      <div className="text">
        <div className="name"> {name} </div>
        <div className="writer"> {auther} </div>
        <div className="price"> {price} </div>
      </div>
      {/* <Link
        className="add_to_cart_btn"
        to="/home/cart"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {t("add_to_cart")}
      </Link> */}
      <div
        className="add_to_cart_btn cursor-pointer"
        onClick={() => {
          dispatch(add(item));
          dispatch(total());
        }}
      >
        {t("add_to_cart")}
      </div>
      <Link
        className="see_more_btn"
        to={LinkPath}
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {t("see more")}
      </Link>
    </div>
  );
};

export default ReleaseBookCart;
