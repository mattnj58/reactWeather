/* https://youtu.be/GuA0_Z1llYU?t=856 */

import React from 'react';

const apiKey = {
  key: '7b7154eb47e573afde1536472685b7fb',
  base: 'api.openweathermap.org/data/2.5/'
}

function App() {

  const currentDate = (d) => {

  }



  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder="Enter a zip code"></input>
        </div>
        <div className='location'> New York City</div>
        <div className='currentDate'> {currentDate(new Date())} </div>
        <div className='weather'> 69 F </div>
      </main>
    </div>
  );
}

export default App;
