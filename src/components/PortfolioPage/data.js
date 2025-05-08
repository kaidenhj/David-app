import EtE_img from "../../images/Earth_to_Earth_img.png";
import Strike_img from "../../images/Strike_img.png";
import after_img from "../../images/After_img.png";
import Commencement_img from "../../images/Commencement_img.png";
import RX_experience_img from "../../images/RX_experience_img.png";
import knifes_out_img from "../../images/Knives_out_img.png"
import Mario_img from "../../images/Mario_img.png"
import or_best_offer_img from "../../images/Or_best_offer_img.png"

import EtE_vid from "../Videos/earth_to_earth.mp4"
import RX_experience_vid from "../Videos/rx_experience.mp4"
import knifes_out_vid from "../Videos/knives_out.mp4"
import Mario_vid from "../Videos/mario.mp4"
const strikeVideo = "https://www.youtube.com/embed/p71ghByHb3E?si=GRzNYLdARTyKbD-e"
const afterVideo = "https://www.youtube.com/embed/02WzKIVfdy0?si=pNN1qm2MtgitcASD"
const comensmentVideo = "https://www.youtube.com/embed/FeQMQJ7SiQ8?si=-5PirCVpcrToYAnf"
const or_best_offer_vid = "https://www.youtube.com/embed/yPReuaJwvgA?si=hlNQaxPcV9dn7O4P"

export const images = [
  { img: EtE_img, video: EtE_vid, button: true, header: "From Earth to Earth: The Lost Art of Dying in America", description: "Sound Designer/Re-recording Mixer - This documentary explores the death industry in America and more specifically natural burial and how it is better for our environment and ourselves. I was lucky enough to be a part of this project as this doc has gone on to be recognized in various film festivals as well as win a Webby Award for Best Short Form Documentary in the Student Division." },
  { img: Strike_img, video: strikeVideo, button: true, header: "Strike!", description: "This was a project I completed for a motion graphics and animation course. I was quite proud of it so I submitted it to the Broadcast Education Association’s On Location Creative Competition where I won Best Short Narrative."},
  { img: RX_experience_img, video: RX_experience_vid, button: true, header: "RX Experience", description: "I was given a short scene from a film for a class  where the location sound was quite messy. I utilized Izotope RX to assist in cleaning lots of the audio. (For Educational Purposes Only)"},
  { img: knifes_out_img, video: knifes_out_vid, button: true, header: "Motion Graphics Title Sequence", description: "I created a 2D graphic title sequence for the film Knives Out in Adobe After Effects."},
  { img: Mario_img, video: Mario_vid, button: true, header: "Super Mario Bros Trailer Remix", description: "ADR Recordist/Sound Designer - This was a project I completed with the goal of remixing and rerecording the audio of a popular trailer for a movie. I was tasked with completing the ADR. (For Educational Purposes Only)"},
  { img: after_img, video: afterVideo, button: true, header: "After", description: "This was one of my favorite projects I’ve ever worked on. I enjoyed getting to enhance the story of these two ghosts through the use of sound."},
  { img: Commencement_img, video: comensmentVideo, button: true, header: "Ithaca College Spring Commencement 2024", description: "Technical Lead and Technical Director - For this ceremony and livestream, I was largely responsible for establishing all of the signal flow within the control room and the stadium as well as maintaining organization of the equipment and connections to ensure a smooth program."},
  { img: or_best_offer_img, video: or_best_offer_vid, button: true, header: "Or Best Offer", description: "Sound Designer"}
];

export default images;