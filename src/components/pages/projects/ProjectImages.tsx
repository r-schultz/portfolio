import { PhotoProvider, PhotoView } from "react-photo-view";
import './ProjectImages.scss';

export interface Image {
  src: string;
  thumb: string;
  alt: string;
  caption: string;
}

export default function ProjectImages({ images }: { images: Image[] }) {
  return (
    <PhotoProvider overlayRender={(props) =>
      <div className='overlay-image-caption'>{images[props.index].caption}</div>
    }>
      {images.map((image, index) => 
        <PhotoView src={image.src} key={index}>
          <img src={image.thumb} alt={image.alt} height={75} />
        </PhotoView>
      )}
    </PhotoProvider>
  );
}