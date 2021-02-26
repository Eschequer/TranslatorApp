import React from "react";
import style from "./ImageList.module.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className={style.imageList}>{images}</div>;
};

export default ImageList;
