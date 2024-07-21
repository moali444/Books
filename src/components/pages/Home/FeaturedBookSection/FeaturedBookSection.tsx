import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import IMAGES from "@assets/images/images";
import "./FeaturedBookSection.scss";

const FeaturedBookSection = () => {
  const { t } = useTranslation();

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/book",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setBooks(response.data.data);
    } catch (erroe) {
      console.log(erroe);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <section id="featured_books_section" className="container_bx">
      <div className="slider_title">Featured book</div>
      <Swiper
        // effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        id="featured_books_slider"
      >
        {books?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="slider_item">
            <div className="slider_img">
              <img src={IMAGES.featured_book_png} alt="pic" />
            </div>
            <div className="text">
              <div className="writer"> {item.auther} </div>
              <h3> {item.name} </h3>
              <p>
                {item.description}
              </p>
              <div className="price"> {item.price} </div>
              <Link to="/home" className="slider_btn">
                {t("view_more")} <img src={IMAGES.rightArrow} alt="pic" />
              </Link>
            </div>
          </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
};

export default FeaturedBookSection;
