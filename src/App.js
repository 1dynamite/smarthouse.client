import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, amber } from "@mui/material/colors";
import Main from "./pages/welcome/main";
import Footer from "./pages/_components/footer";
import GlobalStyles from "@mui/material/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/details";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
      light: red[300],
    },
    secondary: {
      main: amber[500],
    },
  },
});

const styles = {
  "&::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px grey",
    borderRadius: "10px",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: "10px",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.primary.dark,
  },
};

const welcomePage = (
  <div>
    <Main></Main>
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ div: styles, body: styles }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={welcomePage} />
          <Route path="/garderobnie-napolnenie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
