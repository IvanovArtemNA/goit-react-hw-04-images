import { SearchBar } from './Searchbar/Searchbar';
import { fetchPictureByHits } from '../api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Spinner } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchPictureByHits(query, page)
        .then(images => {
          setImages(prevImages => [...prevImages, ...images]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {isLoading && <Spinner />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <Button onClick={handleLoadMore} />
        </>
      )}
    </div>
  );
};
