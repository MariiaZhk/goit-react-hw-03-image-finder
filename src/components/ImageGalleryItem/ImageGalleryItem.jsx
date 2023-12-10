import { GalleryImgStyled, GalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <GalleryItemStyled>
      <GalleryImgStyled src={webformatURL} alt={tags} id={id} />
    </GalleryItemStyled>
  );
};
