import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import {
  SecondHeader,
  BreadCrumb,
  Details,
  TotalCost,
  ShippingData,
} from "@components/index";
import "./Cart.scss";

const Cart = () => {
  const { t } = useTranslation();

  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("cart")} />

      <section id="data_books_section" className="container_bx">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Details />
          </Grid>
          <Grid item xs={12} md={4}>
            <TotalCost />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <ShippingData />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Cart;
