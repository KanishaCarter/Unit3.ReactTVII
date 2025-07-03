/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

/*
9. `<App>` imports the array from `data` into a state variable. Look very carefully at the
   location of `data.js`! It is not a sibling of `App.jsx`.
10. `<App>` keeps the selected show in a state variable.
11. `<App>` renders `<ShowSelection>` within the `<header>` and `<ShowDetails>` within the `<main>`.
12. `<ShowSelection>` and `<ShowDetails>` are provided the correct props. You just wrote these components, 
so you should know what props they expect!
*/

export default function App() {
 return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
      </main>
    </>
  );
}
