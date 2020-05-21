import React from 'react';
import './Loading.scss';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading color={"#0288D1"} height={50} width={50} type={"spin"} />
    </div>
  )
}

export default Loading;
