/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */


import { useState } from 'react';
/*9. `<App>` imports the array from `data` into a state variable.*/
import { tvShows } from './data';
import ShowSelection from './shows/ShowSelection';
import ShowDetails from './shows/ShowDetails';

export default function App() {
  /*10. `<App>` keeps the selected show in a state variable.*/
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        {/* 11. `<App>` renders `<ShowSelection>` within the `<header>`*/}
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow}/>
      </header>

      <main>
        {/* 11. `<App>` renders `<ShowDetails>` within the `<main>`
        12. `<ShowSelection>` and `<ShowDetails>` are provided the correct props.*/}
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
