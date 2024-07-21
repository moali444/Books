import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import IMAGES from "@assets/images/images";
import "./CategorieSection.scss";
import { useDispatch } from "react-redux";
import { setAllCategories } from "src/redux/categoriesSlice";

const CategorieSection = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/category",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setCategories(response.data);
      dispatch(setAllCategories(response?.data));
    } catch (erroe) {
      console.log(erroe);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section id="categories_section" className="container_bx">
      <div className="section_title">
        <div className="sub_title">{t("categories")}</div>
        <h3>{t("categories_section_title")}</h3>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={10}
        id="Category_slider"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {categories?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="Category_item">
              <Link to={`/home/category-details/${item._id}`}>
                <img src={IMAGES.category_1} />
                <div className="text">{item.title}</div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="more_btn">
        <Link
          to="/home/categories"
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          View more <img src={IMAGES.rightArrow} alt="pic" />
        </Link>
      </div>
    </section>
  );
};

export default CategorieSection;
