import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img1.png";
import image5 from "../assets/img1.png";
import image6 from "../assets/img4.png";
import styles from "./imgGrid.module.css";

const images = [image1, image2, image3, image4, image5, image6];

const ImgGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {images.map((image, index) => (
        <img
          className={styles.image}
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImgGrid;
