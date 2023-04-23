import img2 from "../../assets/gallery/2.jpg"
import img4 from "../../assets/gallery/4.jpg"
import img7 from "../../assets/gallery/7.jpg"
import img14 from "../../assets/gallery/14.jpg"
import img15 from "../../assets/gallery/15.jpg"
import img18 from "../../assets/gallery/18.jpg"
import img19 from "../../assets/gallery/19.jpg"
import img20 from "../../assets/gallery/20.jpg"
import img22 from "../../assets/gallery/22.jpg"
import img23 from "../../assets/gallery/23.jpg"

interface Photo {
  imgSrc: string
  caption?: string
  altText: string
}

export const photos: Photo[] = [
  {
    imgSrc: img2,
    caption:
      "I love to travel and have been seeing a lot of Eastern Europe recently. This is me in Belgrade.",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img4,
    caption: "caption",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img7,
    caption: "caption",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img14,
    caption:
      "I love museums... any museum. Historical museums, quirky museums, you name it. This is from the Museum of Illusions in Zagreb.",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img15,
    caption: "caption",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img18,
    caption: "caption",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img19,
    caption: "caption",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img20,
    caption:
      "I love museums... any museum. Historical museums, quirky museums, you name it. This is from the Museum of Illusions in Zagreb.",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img22,
    caption:
      "I love museums... any museum. Historical museums, quirky museums, you name it. This is from the Museum of Illusions in Zagreb.",
    altText: "Michael Tandy - Software Engineer",
  },
  {
    imgSrc: img23,
    caption:
      "I love museums... any museum. Historical museums, quirky museums, you name it. This is from the Museum of Illusions in Zagreb.",
    altText: "Michael Tandy - Software Engineer",
  },
]
