import "./shows.css";
import {EpisodeList} from './episodes/EpisodeList.jsx'

/*

 
with the name of the show as both the key and the text of the anchor.
8. When a show is clicked, the selected show is updated in state to the show that was clicked.
*/

/** A navbar that allows users to choose between a list of shows */

/*6. `<ShowSelection>` takes two props: a list of `shows` and a function to `setSelectedShow`.*/
export default function ShowSelection({shows, setSelectedShow}) {
  return <nav className="shows">
    {shows.map((show) => (
      <a key={show.name} class="show" onClick={()=>setSelectedShow(show)}>{show.name}</a>
    ))}
  </nav>;
}
