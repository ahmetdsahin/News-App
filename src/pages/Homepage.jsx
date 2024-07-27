import React from "react";
import Main from "../components/Main.jsx";
import { Link } from "react-router-dom";

// Placeholder resim yolu
const placeholderImage = "https://via.placeholder.com/150";

const Homepage = ({ generalData }) => {
  return (
    <Main>
      <div className="flex flex-wrap justify-center">
        {generalData.map((article, index) => (
          <div
            key={index}
            className=" bg-grey text-whiteTwo flex flex-col w-full max-w-xs md:max-w-sm lg:max-w-xl h-auto bg-blue-200 shadow-lg rounded-xl m-4 relative p-2 "
          >
            <div className="flex flex-col lg:flex-row lg:gap-4 ">
              <div className="flex-shrink-0 ">
                <img
                  src={article.urlToImage || placeholderImage}
                  alt={article.title || "No title"}
                  className="h-48 w-48 object-cover rounded-lg mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="mt-4 text-wrap">
                <h2 className="text-xl font-bold foto-sans">{article.title}</h2>
                <p className="py-3 font-sans">{article.description}</p>
                <Link to={`${article.url}`} target="_blank">
                  {" "}
                  {/* Ayrıntı sayfasına yönlendiren Link */}
                  <button className="bg-nav-red p-2 text-whiteTwo rounded-lg cursor-pointer">
                    Habere Git
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Homepage;
