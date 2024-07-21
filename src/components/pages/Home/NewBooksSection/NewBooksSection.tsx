import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ReleaseBookCart } from "@components/index";
import IMAGES from "@assets/images/images";
import "./NewBooksSection.scss";

const NewBooksSection = () => {
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
    <section id="new_books_section" className="container_bx">
      <div className="section_title">
        <div className="subtitle">{t("books_section_sub_title")}</div>
        <h3>{t("books_section_title")}</h3>
      </div>

      <div className="content_bx">
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          spaceBetween={10}
          id="new_books_slider"
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
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {books?.map((item) => (
            <SwiperSlide key={item._id}>
              <ReleaseBookCart
                name={item.name}
                auther={item.auther}
                price={item.price}
                item={item}
                LinkPath={`/home/product-details/${item._id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="view_all">
          <Link
            to="/home/all-products"
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            View all products <img src={IMAGES.orangeRightArrow} alt="pic" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewBooksSection;
