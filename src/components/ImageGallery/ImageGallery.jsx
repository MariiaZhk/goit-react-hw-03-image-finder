import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            //   tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </GalleryList>
  );
};
