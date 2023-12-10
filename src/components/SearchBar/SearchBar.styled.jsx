import styled from 'styled-components';

export const SearchBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background: #5daef1;
  color: #fff;
  border: 1px solid #999797;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(241, 234, 234, 0.323),
    0 4px 4px 0 rgba(189, 188, 188, 0.19);
  text-shadow: none;
  font-size: 24px;

  &:hover {
    background: #016abc;
    color: #fff;
    border: 1px solid #999797;
    border-radius: 20px;
    text-shadow: none;
  }
`;

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 800px;
  margin: 40px auto;
`;

export const SearchInputStyled = styled.input`
  height: 60px;
  flex-grow: 1;
  font-size: 24px;
  padding: 0 15px;
  border: 1px solid #999797;
  border-radius: 20px;
  background-color: #cccaca;
  box-shadow: 0 4px 4px 0 rgba(241, 234, 234, 0.323),
    0 4px 4px 0 rgba(189, 188, 188, 0.19);
  text-shadow: none;
  outline: none;
  color: #2f2e2e;

  &:hover {
    background-color: #ffffff;
  }
`;
