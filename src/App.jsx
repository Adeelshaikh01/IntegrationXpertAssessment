import { Box, CssVarsProvider, extendTheme } from "@mui/joy";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "@/routes/RouteComponent";
import SideNav from "./layout/SideNav";
import colors from "./theme/colors";
import Header from "./layout/Header";

const customTheme = extendTheme({
  fontFamily: {
    display: "Poppins",
    body: "Poppins",
  },
});

function App() {
  return (
    <BrowserRouter>
      <CssVarsProvider theme={customTheme}>
        <Box sx={appStyles.container}>
          <SideNav />
          <Box sx={appStyles.content}>
            {/* ========== Header ========== */}
            <Header />
            <Box sx={{ padding: 3 }}>
              <RouteComponent />
            </Box>
          </Box>
        </Box>
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;

const appStyles = {
  container: {
    display: "flex",
  },
  sidebar: {
    flex: 0.2,
    height: 100,
  },
  content: {
    flex: 1,
    bgcolor: colors.lightGray,
  },
};
