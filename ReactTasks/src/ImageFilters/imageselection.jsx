import "./styles.css";
// import { saveAs } from "file-saver";
import { useState } from "react";

const FilterComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [picture, setPicture] = useState(null);

  const filters = [
    "none",
    "grayscale(100%)",
    "sepia(100%)",
    "blur(5px)",
    "brightness(0.5)",
    "contrast(200%)",
    "hue-rotate(90deg)",
    "invert(100%)",
    "saturate(200%)",
    "drop-shadow(16px 16px 20px blue)",
    "opacity(25%)",
  ];

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // const downloadImage = () => {
  //   saveAs(picture, "image.jpg"); // Put your image URL here.
  // };

  return (
    <div className="container">
      <h1 className="main-heading">Instagram-like Image Filter</h1>
      <div className="sub-container">
        <div className="previewImage">
          {picture === null ? (
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={onChangePicture}
            />
          ) : (
            <img
              width="700px"
              height="400px"
              src={picture && picture}
              style={{ filter: selectedFilter, maxWidth: "100%" }}
            />
          )}
        </div>
        <div className="filtersSelection">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="filtersbutton"
              onClick={() => handleFilterChange(filter)}
            >
              {filter === "none" ? "Original" : filter}
            </button>
          ))}
        </div>
      </div>
      <button>Download!</button>
    </div>
  );
};

export default FilterComponent;
