import { LegacyRef } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import img2 from "../../../assets/gallery/2.jpg"
import img4 from "../../../assets/gallery/4.jpg"
import img7 from "../../../assets/gallery/7.jpg"
import img14 from "../../../assets/gallery/14.jpg"
import img15 from "../../../assets/gallery/15.jpg"
import img18 from "../../../assets/gallery/18.jpg"
import img19 from "../../../assets/gallery/19.jpg"
import img20 from "../../../assets/gallery/20.jpg"
import img22 from "../../../assets/gallery/22.jpg"
import img23 from "../../../assets/gallery/23.jpg"
import "photoswipe/dist/photoswipe.css"
import styles from "./LightboxGallery.module.css"

type ImgRef = LegacyRef<HTMLImageElement>

export const LightboxGallery = () => {
  return (
    <div className={styles.root}>
      <Gallery withCaption>
        <div className={styles.itemsContainer}>
          <div className={styles.item}>
            <Item
              original={img2}
              thumbnail={img2}
              width='513'
              height='683'
              caption='ss'
            >
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img2}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img4} thumbnail={img4} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img4}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img7} thumbnail={img7} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img7}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img14} thumbnail={img14} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img14}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img15} thumbnail={img15} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img15}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img18} thumbnail={img18} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img18}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img19} thumbnail={img19} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img19}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img20} thumbnail={img20} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img20}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img22} thumbnail={img22} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img22}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
          <div className={styles.item}>
            <Item original={img23} thumbnail={img23} width='513' height='683'>
              {({ ref, open }) => (
                <img
                  ref={ref as ImgRef}
                  className={styles.image}
                  onClick={open}
                  src={img23}
                  alt='Michael Tandy - Software Engineer'
                />
              )}
            </Item>
          </div>
        </div>
      </Gallery>
    </div>
  )
}
