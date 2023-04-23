import { LegacyRef } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import { photos } from "../../../data/gallery"
import "photoswipe/dist/photoswipe.css"
import styles from "./LightboxGallery.module.css"

type ImgRef = LegacyRef<HTMLImageElement>

export const LightboxGallery = () => {
  return (
    <div className={styles.root}>
      <Gallery withCaption>
        <div className={styles.itemsContainer}>
          {photos.map((photo, index) => {
            const { imgSrc, caption, altText } = photo

            return (
              <div className={styles.item} key={index}>
                <Item
                  original={imgSrc}
                  thumbnail={imgSrc}
                  width='513'
                  height='683'
                  caption={caption ? caption : ""}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as ImgRef}
                      className={styles.image}
                      onClick={open}
                      src={imgSrc}
                      alt={altText}
                    />
                  )}
                </Item>
              </div>
            )
          })}
        </div>
      </Gallery>
    </div>
  )
}
