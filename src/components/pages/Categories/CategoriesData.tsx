import { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
//import IMAGES from "@assets/images/images";
import { useDispatch } from "react-redux";
//import { BiShowAlt } from "react-icons/bi";
import { setAllCategories } from "src/redux/categoriesSlice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CategoriesData.scss";

const handleDelete = (id) => {
  // Your delete logic here
  console.log(`Delete row with id: ${id}`);
};
const columns: GridColDef[] = [
  //{ field: "_id", headerName: "ID", width: 300 },
  { field: "title", headerName: "book title", width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const CategoriesData = () => {
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
    <div className="container_bx">
      <h3>Categories</h3>

      <div className="mb-5">
        <DataGrid
          rows={categories}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 4 },
            },
          }}
          pageSizeOptions={[4, 10]}
          checkboxSelection
        />
      </div>

      {/* {categories?.map((item) => (
        <div className="Category_item" key={item._id}>
          <Link to={`/home/category-details/${item._id}`}>
            <img src={IMAGES.category_1} />
            <div className="text">{item.title}</div>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default CategoriesData;
