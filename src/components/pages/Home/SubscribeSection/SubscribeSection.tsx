import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import Alert from "@mui/material/Alert";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./SubscribeSection.scss";

const SubscribeSection = () => {
  const { t } = useTranslation();

  //   interface Item{
  //     data: string,
  //   }
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section id="subscribe_section" className="container_bx">
      <div className="orange_bg">
        <h3> {t("subscribe_section_title")} </h3>
        <p>{t("subscribe_section_desc")}</p>

        <div className="form_bx">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_items">
              <FormControl className="w-100">
                <TextField
                  id="filled-basic"
                  label="youremail123@gmail.com"
                  variant="standard"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "please inter invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <Alert className="mt-3" severity="error">
                    {errors?.email?.message}
                  </Alert>
                )}
              </FormControl>

              <div className="submit_btn">
                <Button
                  className=""
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  {t("subscribe")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
