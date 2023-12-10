import styled from 'styled-components';

export const GalleryItemStyled = styled.li`
  margin: 5px;
  padding: 15px;
  background-color: #242424;
  border-radius: 8px;
`;

export const GalleryImgStyled = styled.img`
  min-width: 360px;
  min-height: 260px;
  max-width: 360px;
  max-height: 260px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
`;
