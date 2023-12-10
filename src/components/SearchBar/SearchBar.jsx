import {
  SearchBtnStyled,
  SearchFormStyled,
  SearchInputStyled,
} from './SearchBar.styled';

export const SearchBar = ({ searchQuery, handleSubmit }) => {
  return (
    <header>
      <SearchFormStyled onSubmit={handleSubmit}>
        <SearchBtnStyled type="submit">
          <span>Search</span>
        </SearchBtnStyled>

        <SearchInputStyled
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormStyled>
    </header>
  );
};
