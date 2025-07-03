import "./shows.css";
import {EpisodeList} from './episodes/EpisodeList.jsx'
import {EpisodeDetails} from './episodes/EpisodeDetails.jsx'

/** Allows users to browse through 
 * the episodes of the given show */

/* 1. `<ShowDetails>` takes a `show` as a prop.*/
export default function ShowDetails({ show }) {

  /*2. `<ShowDetails>` keeps the selected 
  episode in a state variable.*/
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  /*3. If no show is provided, `<ShowDetails>` renders 
  a message encouraging the user to select a show.*/
  if (!show) {
    return (
      <div className="show-details">
        <p>Select a Show</p>
      </div>
    )
  }

  /*4. If a show is provided, `<ShowDetails>` 
  renders `<EpisodeList>` and `<EpisodeDetails>`.*/
  return (
  <div className="show-details">
    <h2>{show.name}</h2>
    <EpisodeList name={show.name} episodes={show.episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
    <EpisodeDetails episode={selectedEpisode} />
  </div>
  )
}
