import image0 from "../../images/deer-img.jpg";
import image1 from "../../images/giraffe-img.avif";
import image2 from "../../images/lepord-img.avif";
import image3 from "../../images/parrot-img.webp";
import image4 from "../../images/tiger-img.jpeg";

// import video0 from "../Videos/from_earth_to_earth__the_lost_art_of_dying_in_america_.mp4"
// import video2 from "../Videos/rx_experience.mp4"
// import video3 from "../Videos/DShaffer_Assn2_Knives_Out.mp4"
// import video4 from "../Videos/superMarioBros.mp4"

import video0 from "../Videos/video.mp4"
import video2 from "../Videos/video.mp4"
import video3 from "../Videos/video.mp4"
import video4 from "../Videos/video.mp4"
const strikeVideo = "https://www.youtube.com/embed/p71ghByHb3E?si=GRzNYLdARTyKbD-e"
const afterVideo = "https://www.youtube.com/embed/02WzKIVfdy0?si=pNN1qm2MtgitcASD"
const comensmentVideo = "https://www.youtube.com/embed/FeQMQJ7SiQ8?si=-5PirCVpcrToYAnf"

export const images = [
  { img: image0, video: video0, button: true, header: "From Earth to Earth: The Lost Art of Dying in America", description: "Sound Designer/Re-recording Mixer - This documentary explores the death industry in America and more specifically natural burial and how it is better for our environment and ourselves. I was lucky enough to be a part of this project as this doc has gone on to be recognized in various film festivals as well as win a Webby Award for Best Short Form Documentary in the Student Division." },
  { img: image1, video: strikeVideo, button: true, header: "Strike!", description: "This was a project I completed for a motion graphics and animation course. I was quite proud of it so I submitted it to the Broadcast Education Association’s On Location Creative Competition where I won Best Short Narrative."},
  { img: image2, video: video2, button: true, header: "RX Experiance", description: "I was given a short scene from a film for a class  where the location sound was quite messy. I utilized Izotope RX to assist in cleaning lots of the audio."},
  { img: image3, video: video3, button: true, header: "Motion Graphics Title Sequence", description: "I created a 2D graphic title sequence for the film Knives Out in Adobe After Effects."},
  { img: image4, video: video4, button: true, header: "Super Mario Bros Trailer Remix", description: "ADR Recordist/Sound Designer - This was a project I completed with the goal of remixing the audio of a popular trailer for a movie that was in theaters during the time of class."},
  { img: image1, video: afterVideo, button: true, header: "After", description: "This was one of my favorite projects I’ve ever worked on. I enjoyed getting to enhance the story of these two ghosts through the use of sound."},
  { img: image2, video: comensmentVideo, button: true, header: "Ithaca College Spring Commencement 2024", description: "Technical Lead and Technical Director - For this ceremony and livestream, I was largely responsible for establishing all of the signal flow within the control room and the stadium to ensure a smooth "},
  { img: image3, video: video0, button: true, header: "Or Best Offer", description: "Sound Designer - Description"}
];

export default images;