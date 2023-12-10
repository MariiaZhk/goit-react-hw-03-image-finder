import { nanoid } from 'nanoid';
import { GalleryImgStyled, GalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <GalleryItemStyled key={nanoid()}>
      <GalleryImgStyled
        onClick={() => onImageClick(largeImageURL)}
        src={webformatURL}
        alt="#"
      />
    </GalleryItemStyled>
  );
};
