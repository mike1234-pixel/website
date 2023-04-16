import { useEffect, useRef } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import "./VideoJS.css"

interface VideoJSProps {
  options: any
  onReady?: (player: any) => void
}

export const VideoJS = ({ options, onReady }: VideoJSProps) => {
  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any | null>(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video")

      videoElement.classList.add("video-js")
      videoElement.classList.add("vjs-big-play-centered")
      videoRef.current?.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready")
        onReady && onReady(player)
      }))
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef, onReady])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}
