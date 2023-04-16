import styles from "./Video.module.css"
import { VideoJS } from "./VideoJS"

interface Props {
  src: string
}

export const Video = ({ src }: Props) => {
  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: src,
        type: "video/mp4",
      },
    ],
  }

  return (
    <div className={styles.root}>
      <VideoJS options={options} />
    </div>
  )
}
