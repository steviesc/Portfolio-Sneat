// ** React Imports
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../request";
import { useNavigate } from "react-router-dom";

// ** MUI Components
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery";
import OutlinedInput from "@mui/material/OutlinedInput";
import { createTheme, styled, useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";

// ** Icon Imports
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Hooks
// import { useAuth } from "src/hooks/useAuth";
// import useBgColor from "src/@core/hooks/useBgColor";
// import { useSettings } from "src/@core/hooks/useSettings";

// ** Configs
// import themeConfig from "src/configs/themeConfig";

// ** Layout Import
import BlankLayout from "../Components/Auth/BlankLayout";
import { ThemeProvider } from "styled-components";

// ** Styled Components
const styles = {
  link: {
    fontSize: "0.875rem",
    textDecoration: "none",
    color: "rgb(105, 108, 255)",
  },
};

const customTheme = createTheme({
  typography: {
    fontFamily: [
      "Public Sans",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(50, 71, 92, 0.22)", // 默认边框颜色
    },
    "&:hover fieldset": {
      borderColor: "rgba(50, 71, 92, 0.35)", // 悬停时的边框颜色
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(105, 108, 255)", // 点击（获得焦点）后的边框颜色
    },
  },
  input: {
    color: "rgba(50, 71, 92, 0.87)", // 输入文本颜色
  },
}));

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  color: "rgba(50, 71, 92, 0.6)", // 标签颜色
  "&.Mui-focused": {
    color: "rgb(105, 108, 255)", // 标签聚焦时颜色
  },
}));

const LoginIllustration = styled("img")({
  height: "auto",
  maxWidth: "100%",
});

const RightWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("lg")]: {
    maxWidth: 480,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 635,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(12),
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: "admin",
  email: "admin@sneat.com",
};

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // ** Hooks
  // const auth = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  // const { settings } = useSettings();
  // const bgColors = useBgColor();
  const hidden = useMediaQuery(theme.breakpoints.down("lg"));

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    e.stopPropagation();
    const { email, password } = data;
    await axiosInstance
      .get(`/login`)
      .then((res) => {
        console.log(res.data);
        const user = res.data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          navigate("/dashboards/analytics");
        } else {
          setError("email", {
            type: "manual",
            message: "Email or Password is invalid",
          });
        }
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        className="content-right"
        sx={{
          display: "flex",
          overflow: "hidden",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {!hidden ? (
          <Box
            sx={{
              p: 8,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginIllustration
              width={700}
              alt="login-illustration"
              src={`https://greakproject.vercel.app/images/pages/boy-with-rocket-light.png`}
            />
          </Box>
        ) : null}
        <RightWrapper
          // sx={{
          //   ...(skin === "bordered" &&
          //     !hidden && { borderLeft: `1px solid ${theme.palette.divider}` }),
          // }}
          sx={{
            ...(!hidden && {
              borderLeft: `1px solid ${theme.palette.divider}`,
              padding: "50px !important",
              maxWidth: "380px !important",
            }),
          }}
        >
          <Box sx={{ mx: "auto", maxWidth: 400 }}>
            <Box sx={{ mb: 2, display: "flex", alignItems: "center", mt: 2 }}>
              <svg
                width={22}
                height={32}
                viewBox="0 0 55 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={"rgb(105, 108, 255)"}
                  d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"
                />
                <path
                  fillOpacity="0.2"
                  fill={theme.palette.common.white}
                  d="M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z"
                />
                <path
                  fillOpacity="0.2"
                  fill={theme.palette.common.white}
                  d="M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z"
                />
              </svg>
              <Typography
                variant="h5"
                sx={{
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.45px",
                  textTransform: "lowercase",
                  fontSize: "1.75rem !important",
                }}
              >
                sneat
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Welcome to Sneat! 👋🏻
            </Typography>
            <Typography sx={{ mb: 2, color: "rgba(50, 71, 92, 0.6)" }}>
              Please sign-in to your account and start the adventure
            </Typography>
            <Alert
              icon={false}
              sx={{
                py: 1,
                mb: 3,
                backgroundColor: "rgba(105, 108, 255, 0.16)",
                "& .MuiAlert-message": { p: 0 },
              }}
            >
              <Typography
                variant="caption"
                sx={{ mb: 1, display: "block", color: "rgb(105, 108, 255)" }}
              >
                Admin: <strong>admin@sneat.com</strong> / Pass:{" "}
                <strong>admin</strong>
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "rgb(105, 108, 255)" }}
              >
                Client: <strong>client@sneat.com</strong> / Pass:{" "}
                <strong>client</strong>
              </Typography>
            </Alert>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label="Email"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder="admin@sneat.com"
                      sx={{
                        // 设置默认输入框的颜色
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(50, 71, 92, 0.22)", // 输入框默认边框颜色
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(50, 71, 92, 0.35)", // 悬停时边框颜色
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(105, 108, 255)", // 点击时边框颜色
                          },
                        },
                        // 设置输入框文本的颜色
                        "& .MuiInputBase-input": {
                          color: "rgba(50, 71, 92, 0.87)", // 输入框文本颜色
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "rgba(50, 71, 92, 0.6)", // 标签颜色
                          "&.Mui-focused": {
                            color: "rgb(105, 108, 255)", // 标签聚焦时颜色
                          },
                        },
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.email.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 1 }}>
                <CustomInputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                  sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                >
                  Password
                </CustomInputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomOutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label="Password"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityIcon fontSize="small" />
                            ) : (
                              <VisibilityOffIcon fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: "error.main" }} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  label="Remember Me"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.875rem",
                      color: "rgba(50, 71, 92, 0.6)",
                    },
                  }}
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{
                        color: "rgba(50, 71, 92, 0.38)",
                        "&.Mui-checked": {
                          color: "rgb(105, 108, 255)",
                        },
                      }}
                    />
                  }
                />
                <Link style={styles.link} to="/forgot-password">
                  Forgot Password?
                </Link>
              </Box>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  mb: 2,
                  backgroundColor: "rgb(105, 108, 255)",
                  "&:hover": {
                    backgroundColor: "rgba(85, 88, 255)", // 悬停时的背景颜色
                  },
                  transition: "0.2s ease-in-out",
                }}
              >
                Sign in
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" sx={{ mr: 2 }}>
                  New on our platform?
                </Typography>
                <Typography>
                  <Link to="/register" style={styles.link}>
                    Create an account
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ my: `${theme.spacing(3)} !important` }}>
                or
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  href="/"
                  // component={Link}
                  sx={{ color: "#497ce2" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="/"
                  // component={Link}
                  sx={{ color: "#1da1f2" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  href="/"
                  // component={Link}
                  onClick={(e) => e.preventDefault()}
                  sx={{
                    color:
                      theme.palette.mode === "light" ? "#272727" : "grey.300",
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="/"
                  // component={Link}
                  sx={{ color: "#db4437" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <GoogleIcon />
                </IconButton>
              </Box>
            </form>
          </Box>
        </RightWrapper>
      </Box>
    </ThemeProvider>
  );
};
LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
LoginPage.guestGuard = true;

export default LoginPage;
