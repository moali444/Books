//import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import { BiSolidTrash } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import { clear } from "../../../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
import "./Details.scss";

const Details = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartItems, amount } = useSelector((state) => state.cart);

  return (
    <>
      <div id="Details_bx">
        <Card className="cost_container">
          <CardContent className="content_bx">
            <div className="flex justify-between">
              <h3>{t("products_detailes")}</h3>
              <HiTrash
                className="cursor-pointer text-3xl"
                onClick={() => dispatch(clear())}
              />
            </div>

            <div className="mt-4">
              <div className="p-6">
                <div className="flex items-center justify-end">
                  <div>shopping bag ({amount})</div>
                </div>

                <div className="mt-8">
                  {cartItems.length === 0 ? (
                    <div className="uppercase text-center text-3xl">
                      your cart is empty
                    </div>
                  ) : (
                    <>
                      {cartItems.map((cartItem) => {
                        return (
                          <CheckOutItems
                            key={cartItem._id}
                            cartItem={cartItem}
                          />
                        );
                      })}

                      {/* <div className="flex justify-between items-center mt-12">
                        <div>total cost : ${total.toFixed(2)}</div>
                      </div>

                      <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">
                        checkOut
                      </div> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Details;
