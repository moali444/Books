import { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../AuthStyles.module.scss";

const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  // const [otp, setOtp] = useState("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/reset-password",
        data
      );
      navigate("/login");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const registerNavigate = () => {
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div className={styles.auth_form_bx}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12} md={12}>
              <FormControl className={styles.form_item} variant="filled">
                <label>{t("email")}</label>
                <FilledInput
                  hiddenLabel
                  className={styles.btn_bg}
                  id="filled-adornment-amount"
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
            </Grid>

            <Grid item xs={12} md={12}>
              <FormControl className={styles.form_item} variant="filled">
                <label>{t("otp")}</label>
                <Controller
                  control={control}
                  rules={{ validate: (value) => value.length === 6 }}
                  render={({ field, fieldState }) => (
                    <Box>
                      <MuiOtpInput className={styles.otp_bx} sx={{ gap: 1 }} {...field} length={6} />
                      {fieldState.invalid ? (
                        <Alert className="mt-3" severity="error">
                          OTP is required
                        </Alert>
                      ) : null}
                    </Box>
                  )}
                  name="otp"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <FormControl className={styles.form_item} variant="standard">
                <label>{t("password")}</label>
                <FilledInput
                  hiddenLabel
                  className={styles.btn_bg}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 7,
                      message: "password not matching",
                    },
                  })}
                />
                {errors.password && (
                  <Alert className="mt-3" severity="error">
                    {errors?.password?.message}
                  </Alert>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <FormGroup>
                  <FormControlLabel
                    className={styles.remember_check}
                    control={<Checkbox />}
                    label={t("remember_me")}
                  />
                </FormGroup>
              </Stack>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className={styles.form_btns}>
                <Button
                  className={styles.fill_btn}
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  {t("send")}
                </Button>
                <Button
                  className={styles.outline_btn}
                  fullWidth
                  size="large"
                  variant="outlined"
                  onClick={registerNavigate}
                >
                  {t("login")}
                </Button>
              </div>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
};

export default ResetPasswordForm;
