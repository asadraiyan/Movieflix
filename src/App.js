import { useEffect, useState } from "react";
import { fetchApiData } from "./utils/api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import NetworkError from "./pages/404/NetworkError";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);

  const [isNetworkError, setIsNetworkError] = useState(false);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchApiData("/configuration").then((res) => {
      console.log(res);
      if (res.code === "ERR_NETWORK") {
        setIsNetworkError(true);
        return;
      }

      const url = {
        backdrop: res.images?.secure_base_url + "original",
        poster: res.images?.secure_base_url + "original",
        profile: res.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchApiData(`/genre/${url}/list`));
    });

    const data = Promise.all(promises);
    console.log("data=", data);
    (await data)?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });
    // console.log("allGenres=", allGenres);
    dispatch(getGenres(allGenres));
  };

  console.log("isNetworkError =", isNetworkError);

  if (isNetworkError) {
    return (
      <Router>
        <Header />
        <NetworkError />
        <Footer />
      </Router>
    );
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/networkError" element={<NetworkError />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
