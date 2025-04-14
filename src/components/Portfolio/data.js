import image0 from "../../images/deer-img.jpg";
import image1 from "../../images/giraffe-img.avif";
import image2 from "../../images/lepord-img.avif";
import image3 from "../../images/parrot-img.webp";
import image4 from "../../images/tiger-img.jpeg";

const caroselImages = [
  { img: image0, header: "Deer Image", description: "Image Discription", video: false, idx: 0, active: true},
  { img: image1, header: "Giraffe Image", description: "Image Discription", video: false, idx: 1, active: true },
  { img: image2, header: "Lepord Image", description: "Image Discription", video: false, idx: 2, active: true },
  { img: image3, header: "Parot Image", description: "Image Discription", video: false, idx: 3, active: false },
  { img: image4, header: "Tiger Image", description: "Image Discription", video: false, idx: 4, active: false }
];

export default caroselImages;