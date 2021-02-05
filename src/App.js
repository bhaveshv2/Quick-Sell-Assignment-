import React from 'react';
import {Img} from 'react-image';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Fail safe image rendering</h1>
        <Img src={
          [
            'https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg',
            'https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_200/-M7q3olCZCehB9AGbn2y.jpg',
            'https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_400/-M7q3olCZCehB9AGbn2y.jpg',
            'https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products/-M7q3olCZCehB9AGbn2y.jpg'
          ]
        }/>
      </div>
    );
  }
}

export default App;
