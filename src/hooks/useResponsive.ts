import { useTheme, useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();

  return {
    isXs: useMediaQuery(theme.breakpoints.down("xs")),
    isSm: useMediaQuery(theme.breakpoints.down("sm")),
    isMd: useMediaQuery(theme.breakpoints.down("md")),
    isLg: useMediaQuery(theme.breakpoints.down("lg")),
    isXl: useMediaQuery(theme.breakpoints.up("xl")),
  };
};

export default useResponsive;
