import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img1.png";
import image5 from "../assets/img1.png";
import image6 from "../assets/img4.png";
import instagramImage from "../assets/ig.PNG";
import styles from "./imgGrid.module.css";
import { StyledH2, StyledParagraph } from "../reusable";

const images = [image1, image2, image3, image4, image5, image6];

const ImgGrid = () => {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.headingSection}>
          <StyledH2>Follow us on Instagram</StyledH2>
          <StyledParagraph>tattoo_arty_studio</StyledParagraph>
          <StyledParagraph>tattoo_arty_studio</StyledParagraph>
          <StyledParagraph>tattoo_arty_studio</StyledParagraph>
        </div>
        {images.map((image, index) => (
          <img
            className={styles.image}
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}

        <img
          className={styles.instagramImg}
          src={instagramImage}
          alt="Instagram Image"
        />
      </div>
    </div>
  );
};

export default ImgGrid;
