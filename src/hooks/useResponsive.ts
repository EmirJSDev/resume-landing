import { useTheme, useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();

  return {
    isXs: useMediaQuery(theme.breakpoints.only("xs")),
    isSm: useMediaQuery(theme.breakpoints.only("sm")),
    isMd: useMediaQuery(theme.breakpoints.only("md")),
    isLg: useMediaQuery(theme.breakpoints.only("lg")),
    isXl: useMediaQuery(theme.breakpoints.up("xl")),
    isUpSm: useMediaQuery(theme.breakpoints.up("sm")), // >= sm
    isUpMd: useMediaQuery(theme.breakpoints.up("md")), // >= md
    isDownMd: useMediaQuery(theme.breakpoints.down("md")), // ✅ <= 900px (нужный брейкпоинт)
  };
};

export default useResponsive;
