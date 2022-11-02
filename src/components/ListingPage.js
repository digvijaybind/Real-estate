import React, { Component } from "react";
import "../components/ListingPage.css";
import Footer from "./Footer";
import Listing from "./Listing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetailPage from "./DetailPage";
import ListingTopSearch from "./ListingTopSearch";

function ListingPage() {
  return (
    <>
      <ListingTopSearch />
      <section className="listing-page mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-12 listing-p-tile">
              <h1>All properties</h1>
              <span className="sub">Showing 46 results</span>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 serch-form">
              <div className="form-control-sr">
                <input
                  type={"text"}
                  placeholder="Search with name, location or type..."
                />
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00015 15.0003C11.8662 15.0003 15.0003 11.8662 15.0003 8.00015C15.0003 4.13407 11.8662 1 8.00015 1C4.13407 1 1 4.13407 1 8.00015C1 11.8662 4.13407 15.0003 8.00015 15.0003Z"
                      stroke="#888888"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.95 12.9504L17.0001 17.0006"
                      stroke="#888888"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <ul>
                <li>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.20007 4.22314L10.6001 1.82315L13.0001 4.22314"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.8824 13.1174L10.8824 1.82336"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.79998 10.2943L3.39999 12.6943L1 10.2943"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.40015 1.40027L3.40015 12.6943"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <a href="#">Popularity</a>
                </li>
                <li>
                  <a href="#">Price</a>
                </li>
                <li>
                  <a href="#">Relevence</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="listing-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
              <Link to="/detail-page">
                <Listing />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingPage;
