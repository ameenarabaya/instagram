import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Container } from "@mui/material";
import "./search.css";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    // Simulate API call with setTimeout
    const timeoutId = setTimeout(() => {
      axios
        .get(
          `https://instagram-cloneapi.onrender.com/users/searchUser/${searchQuery}`
        )
        .then((response) => {
          setSearchResults(response.data.users);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }, 1000); // Simulated delay of 1 second

    // Cleanup function to cancel the timeout
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          className="inputClass"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {loading ? (
        <span class="searchLoader"></span>
        ) : (
          <div
            className="results"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {searchResults.map((result) => (
              <Link
                className="userDiv"
                to={`user/${result._id}`}
                key={result.id}
              >
                <Avatar
                  className="avatar"
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={result.avatar}
                ></Avatar>
                <h3>{result.userName}</h3>
                {/* Render other details of the search result */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchPage;
