import React from 'react';
import Header from './Header';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <>
        <div class="screen">
          <div class="header">
            <Header/>
          </div>
          <div class="lower-body">
            <Body />
          </div>
        </div>
      </>
    </div>
  );
}
export default App;
