/** @jsx jsx */
import { jsx, Container, Box, Image, Heading } from "theme-ui";
import SectionHeader from "components/section-header";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Member1 from "assets/pdfs/rut-fundacion-1.png";
import Member2 from "assets/pdfs/rut-fundacion-2.png";
import Member3 from "assets/pdfs/rut-fundacion-3.png";
import Member4 from "assets/pdfs/rut-fundacion-4.png";

import Camara1 from "assets/pdfs/camara-comercio-junio-1.png";
import Camara2 from "assets/pdfs/camara-comercio-junio-2.png";
import Camara3 from "assets/pdfs/camara-comercio-junio-3.png";
import Camara4 from "assets/pdfs/camara-comercio-junio-4.png";
import Camara5 from "assets/pdfs/camara-comercio-junio-5.png";
import Camara6 from "assets/pdfs/camara-comercio-junio-6.png";
import Camara7 from "assets/pdfs/camara-comercio-junio-7.png";
import Camara8 from "assets/pdfs/camara-comercio-junio-8.png";
import Camara9 from "assets/pdfs/camara-comercio-junio-9.png";

import Esal1 from "assets/pdfs/documentos-esal-01.png";
import Esal2 from "assets/pdfs/documentos-esal-02.png";
import Esal3 from "assets/pdfs/documentos-esal-03.png";
import Esal4 from "assets/pdfs/documentos-esal-04.png";
import Esal5 from "assets/pdfs/documentos-esal-05.png";
import Esal6 from "assets/pdfs/documentos-esal-06.png";
import Esal7 from "assets/pdfs/documentos-esal-07.png";
import Esal8 from "assets/pdfs/documentos-esal-08.png";
import Esal9 from "assets/pdfs/documentos-esal-09.png";
import Esal10 from "assets/pdfs/documentos-esal-10.png";
import Esal11 from "assets/pdfs/documentos-esal-11.png";

import Otros1 from "assets/pdfs/100066004282432-1.png";
import Otros2 from "assets/pdfs/100066004282432-2.png";
import Otros3 from "assets/pdfs/100066004276851-1.png";
import Otros4 from "assets/pdfs/100066004276851-2.png";
import Otros5 from "assets/pdfs/100066004276272-1.png";
import Otros6 from "assets/pdfs/100066004276272-2.png";
import Otros7 from "assets/pdfs/100066004276122-1.png";
import Otros8 from "assets/pdfs/100066004276122-2.png";
import Otros9 from "assets/pdfs/52451001237663-1.png";
import Otros10 from "assets/pdfs/52451001237663-2.png";
import Otros11 from "assets/pdfs/52451001237663-3.png";

const data = [
  {
    id: 1,
    title: "Member1",
    avatar: Member1,
  },
  {
    id: 2,
    title: "Member2",
    avatar: Member2,
  },
  {
    id: 3,
    title: "Member3",
    avatar: Member3,
  },
  {
    id: 4,
    title: "Member4",
    avatar: Member4,
  },
];

const camara = [
  {
    id: 1,
    title: "Camara1",
    avatar: Camara1,
  },
  {
    id: 2,
    title: "Camara2",
    avatar: Camara2,
  },
  {
    id: 3,
    title: "Camara3",
    avatar: Camara3,
  },
  {
    id: 4,
    title: "Camara4",
    avatar: Camara4,
  },
  {
    id: 5,
    title: "Camara5",
    avatar: Camara5,
  },
  {
    id: 6,
    title: "Camara6",
    avatar: Camara6,
  },
  {
    id: 7,
    title: "Camara7",
    avatar: Camara7,
  },
  {
    id: 8,
    title: "Camara8",
    avatar: Camara8,
  },
  {
    id: 9,
    title: "Camara9",
    avatar: Camara9,
  },
];
const esal = [
  {
    id: 1,
    title: "Esal1",
    avatar: Esal1,
  },
  {
    id: 2,
    title: "Esal2",
    avatar: Esal2,
  },
  {
    id: 3,
    title: "Esal3",
    avatar: Esal3,
  },
  {
    id: 4,
    title: "Esal4",
    avatar: Esal4,
  },
  {
    id: 5,
    title: "Esal5",
    avatar: Esal5,
  },
  {
    id: 6,
    title: "Esal6",
    avatar: Esal6,
  },
  {
    id: 7,
    title: "Esal7",
    avatar: Esal7,
  },
  {
    id: 8,
    title: "Esal8",
    avatar: Esal8,
  },
  {
    id: 9,
    title: "Esal9",
    avatar: Esal9,
  },
  {
    id: 10,
    title: "Esal10",
    avatar: Esal10,
  },
  {
    id: 11,
    title: "Esal11",
    avatar: Esal11,
  },
];
const otros = [
  {
    id: 1,
    title: "Otros1",
    avatar: Otros1,
  },
  {
    id: 2,
    title: "Otros2",
    avatar: Otros2,
  },
  {
    id: 3,
    title: "Otros3",
    avatar: Otros3,
  },
  {
    id: 4,
    title: "Otros4",
    avatar: Otros4,
  },
  {
    id: 5,
    title: "Otros5",
    avatar: Otros5,
  },
  {
    id: 6,
    title: "Otros6",
    avatar: Otros6,
  },
  {
    id: 7,
    title: "Otros7",
    avatar: Otros7,
  },
  {
    id: 8,
    title: "Otros8",
    avatar: Otros8,
  },
  {
    id: 9,
    title: "Otros9",
    avatar: Otros9,
  },
  {
    id: 10,
    title: "Otros10",
    avatar: Otros10,
  },
  {
    id: 11,
    title: "Otros11",
    avatar: Otros11,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlay: true,
  autoPlaySpeed: 6000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

export default function PdfCards() {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Fundación Domus Colombia" title="Documentos" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Box sx={styles.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            Rut
          </Heading>
        </Box>
        <Carousel {...carouselParams}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={item.id}>
              <Image src={item.avatar} alt="Rut" />
            </Box>
          ))}
        </Carousel>
      </Box>

      <Box sx={styles.carouselWrapper}>
        <Box sx={styles.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            Cámara y Comercio Junio
          </Heading>
        </Box>
        <Carousel {...carouselParams}>
          {camara.map((item) => (
            <Box sx={styles.reviewCard} key={item.id}>
              <Image src={item.avatar} alt="Cámara y Comercio Junio" />
            </Box>
          ))}
        </Carousel>
      </Box>

      <Box sx={styles.carouselWrapper}>
        <Box sx={styles.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            Documentos Esal
          </Heading>
        </Box>
        <Carousel {...carouselParams}>
          {esal.map((item) => (
            <Box sx={styles.reviewCard} key={item.id}>
              <Image src={item.avatar} alt="Documentos Esal" />
            </Box>
          ))}
        </Carousel>
      </Box>

      <Box sx={styles.carouselWrapper}>
        <Box sx={styles.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            Otros Documentos
          </Heading>
        </Box>
        <Carousel {...carouselParams}>
          {otros.map((item) => (
            <Box sx={styles.reviewCard} key={item.id}>
              <Image src={item.avatar} alt="Otros Documentos" />
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    /* mt: "-30px", */
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
  contentBox: {
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mx: "auto",
    textAlign: "center",
    mb: ["40px", null, null, null, null, 7],
  },
};
