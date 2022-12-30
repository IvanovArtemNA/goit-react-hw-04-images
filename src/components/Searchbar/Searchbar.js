import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import style from './Searchbar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [imageName, setState] = useState('');

  const handleImageNameChange = event => {
    setState(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      alert(`Empty search field`);
      return;
    }

    onSubmit(imageName);
    setState('');
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <IconContext.Provider
            value={{
              color: 'black',
              size: '40px',
              className: 'global-class-name',
            }}
          >
            <div>
              <BsSearch />
            </div>
          </IconContext.Provider>
          ;<span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={imageName}
          onChange={handleImageNameChange}
        />
      </form>
    </header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
