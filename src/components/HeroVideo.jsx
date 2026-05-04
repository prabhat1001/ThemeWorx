
import VidPoster from '../assets/HeroVideoPoster2.png'


const HeroVideo = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <video
        style={{ width: '100%', height: '100%', borderRadius: '1.5rem' }}
        controls
        playsInline
        preload="metadata"
        poster={VidPoster}
      >
        <source
          src="https://res.cloudinary.com/dvkjm6742/video/upload/v1777484509/promo-compressed-final_xv5tc3.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dvkjm6742/video/upload/v1777466360/promo-compressed-final_lsijo9.webm"
          type="video/webm"
        />
      </video>
    </div>
  )
}

export default HeroVideo