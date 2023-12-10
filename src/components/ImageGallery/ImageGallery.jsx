import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <GalleryList>
      {images.map(({ webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={nanoid()}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
          />
        );
      })}
    </GalleryList>
  );
};
