import { InfinitySpin } from 'react-loader-spinner';
import { Component } from 'react';
import style from './Loader.module.css';
export class Spinner extends Component {
  render() {
    return (
      <div className={style.Loader}>
        <InfinitySpin width="300" color="#3f51b5" />;
      </div>
    );
  }
}
