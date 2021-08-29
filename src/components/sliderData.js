import { v4 as uuidv4 } from "uuid";

const sliderData = [
  {
    id: uuidv4(),
    img: process.env.PUBLIC_URL + `/imgs/img1.jpg`,
    text: "Fjell med hus",
  },

  {
    id: uuidv4(),
    img: process.env.PUBLIC_URL + `/imgs/img2.jpg`,
    text: "Brygga i Bergen",
  },

  {
    id: uuidv4(),
    img: process.env.PUBLIC_URL + `/imgs/img3.jpg`,
    text: "Fjell med landsby",
  },

  {
    id: uuidv4(),
    img: process.env.PUBLIC_URL + `/imgs/img4.jpg`,
    text: "Innsjø med hus",
  },

  {
    id: uuidv4(),
    img: process.env.PUBLIC_URL + `/imgs/img5.jpg`,
    text: "Barcode i Oslo",
  },
];

export default sliderData;
