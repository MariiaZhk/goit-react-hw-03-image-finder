import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import {
  fetchImages,
  onFetchImagesError,
  onSubmitImagesError,
} from './services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Section } from './ImageGallery/ImageGallery.styled';

// const perPage = 12;

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    loadMoreBtn: true,
  };
  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     const data = await fetchAllImages();
  //     this.setState({ searchResult: data.hits });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );
        this.setState({ images: [...hits], loading: false });
      } catch (error) {
        onFetchImagesError();
        // } finally {
        //   this.setState({ loading: false });
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          loading: false,
        }));
      } catch (error) {
        onFetchImagesError();
        // } finally {
        //   this.setState({ loading: false });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const searchValue = event.currentTarget.elements.searchQuery.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '' || searchValue === this.state.searchQuery) {
      this.setState({ loading: false });
      onSubmitImagesError();
      return;
    }
    this.setState({
      searchQuery: searchValue,
    });
    event.currentTarget.reset();
  };

  incrementPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { loading, images, loadMoreBtn } = this.state;
    console.log(this.state);
    return (
      <Section>
        <SearchBar handleSubmit={this.handleSubmit}></SearchBar>
        {loading && <Loader />}

        <ImageGallery images={images}></ImageGallery>

        {images.length > 0 && loadMoreBtn && (
          <LoadMoreButton incrementPage={this.incrementPage}></LoadMoreButton>
        )}
      </Section>
    );
  }
}
