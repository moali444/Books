import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { Paginate } from "@components/index";
import SearchItems from "./SearchItems";
import IMAGES from "@assets/images/images";
import { ReleaseBookCart } from "@components/index";
import "./ResultBx.scss";

const ResultBx = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState("");
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3007/api/book?page=${
          currentPage + 1
        }&limit=${itemsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setBooks(response.data.data);
      setPageCount(Math.ceil(response.data.total / itemsPerPage));
    } catch (erroe) {
      console.log(erroe);
    }
  };
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    getAllBooks();
  }, [currentPage]);

  return (
    <div id="result_bx">
      <div className="search_items">
        <SearchItems />
        <div className="item">
          <div className="grid_icons">
            <span>
              <img
                src={IMAGES.grid_icon}
                alt="pic"
                className={selectedType === "grid" ? "grid_chicked" : ""}
                onClick={() => setSelectedType("grid")}
              />
            </span>
            <span>
              <img
                src={IMAGES.list_icon}
                alt="pic"
                className={selectedType === "list" ? "list_chicked" : ""}
                onClick={() => setSelectedType("list")}
              />
            </span>
          </div>
        </div>
      </div>

      <Grid container spacing={2}>
        {books.map((item) => (
          <Grid
            item
            xs={12}
            md={selectedType === "list" ? "12" : "4"}
            key={item._id}
            className={selectedType === "list" ? "list_bx" : ""}
          >
            <ReleaseBookCart
              name={item.name}
              auther={item.auther}
              price={item.price}
              LinkPath={`/home/product-details/${item._id}`}
            />
          </Grid>
        ))}
      </Grid>

      <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
        <Paginate pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
    </div>
  );
};

export default ResultBx;
