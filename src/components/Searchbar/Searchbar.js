import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import style from './Searchbar.module.css';

export class SearchBar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Empty search field');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </form>
      </header>
    );
  }
}
