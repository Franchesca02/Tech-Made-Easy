import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Footer from "../Components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [developer, setDeveloper] = useState({});
  const [favorite, setFavorite] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  // const [activetab, setActiveTab] = useState()

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
      )
      .then((response) => {
        setDeveloper(response.data.data);
        setIsLoading(false);
        // console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const addFavorite = (item) => {
    setFavorite([...favorite, item]);
  };

  console.log(favorite);
  return (
    <div className="homepage">
      <h1 className="head">Hire Top Developers</h1>
      <div className="cards-holder">
        {developer === {}
          ? "LOADING"
          : developer &&
            developer?.service_search_results?.hits.map((data, index) => (
              <div className="cards" key={index}>
                <div className="card-icon" onClick={() => addFavorite(data)}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="cards-img">
                  <img src={data._source.service_photo} alt="poster" />
                </div>
                <div className="card-avatar">
                  <img src={data._source.avatar} alt="poster" />
                </div>
                <div className="card-footer">
                  <div className="">
                    <h4 className="names">{data?._source?.display_name}</h4>
                    <p
                      style={{
                        marginTop: "-1.3rem",
                        color: "#0000007D",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      #{data._source?.starting_from}
                    </p>
                  </div>
                  <p
                    style={{
                      paddingTop: "1rem",
                      color: "#1D9BF0",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Hire
                  </p>
                </div>
              </div>
            ))}
      </div>
      <div>
        <h1 className="head">Favorite Developers</h1>
        <div className="cards-holder">
          {favorite.length === 0 ? (
            <h2>No Data found</h2>
          ) : (
            favorite &&
            favorite?.map((data, index) => (
              <div className="cards" key={index}>
                <div
                  className="favorite-card-icon"
                  onClick={() => addFavorite(data)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="cards-img">
                  <img src={data._source.service_photo} alt="poster" />
                </div>
                <div className="card-avatar">
                  <img src={data._source.avatar} alt="poster" />
                </div>
                <div className="card-footer">
                  <div className="">
                    <h4 className="names">{data?._source?.display_name}</h4>
                    <p
                      style={{
                        marginTop: "-1.3rem",
                        color: "#0000007D",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      #{data._source?.starting_from}
                    </p>
                  </div>
                  <p
                    style={{
                      paddingTop: "1rem",
                      color: "#1D9BF0",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Hire
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
