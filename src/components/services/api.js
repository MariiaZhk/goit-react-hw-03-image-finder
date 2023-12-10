import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const KEY = '40710997-4253618bc3055cabfb83eaf18';
axios.defaults.baseURL = 'https://pixabay.com';

const paramsNotify = {
  width: '600px',
  position: 'center-center',
  fontSize: '30px',
};

export async function fetchImages(query, page) {
  // const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;

  const { data } = await axios.get('/api/', {
    params: {
      key: KEY,
      image_type: 'photo',
      page,
      q: query,
      per_page: 12,
      orientation: 'horizontal',
    },
  });
  return data;
}

export function onFetchImagesError() {
  Notify.failure(
    'Oops, something went wrong.Try to refresh this page or make another search.',
    paramsNotify
  );
}

export function onSubmitImagesError() {
  Notify.warning(
    'Your search query is empty or the same. Enter new search query, please',
    paramsNotify
  );
}

// export async function fetchAllImages() {
//   // const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;

//   const { data } = await axios.get('/api/', {
//     params: {
//       key: KEY,
//       image_type: 'photo',
//       page: 1,
//       per_page: 12,
//       orientation: 'horizontal',
//  //     },
//   });
//   return data;
// }
