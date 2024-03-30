import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  // const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  // console.log("data=", data);

  // useEffect(() => {
  //   const bg =
  //     url.backdrop +
  //     data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
  //   setBackground(bg);
  // }, [data]);

  // console.log("url=", url);

  let bg = "";

  if (data) {
    bg =
      url?.backdrop +
      data?.results[Math?.floor(Math?.random() * 20)]?.backdrop_path;
  } else {
    bg = "https://image.tmdb.org/t/p/original/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg";
  }

  // setBackground(bg);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  const searchQueryOnClickHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={bg} />
          </div>
        )}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore Now
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or TV shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button onClick={searchQueryOnClickHandler}>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
