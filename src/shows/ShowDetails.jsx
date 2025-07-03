import "./shows.css";

/*
1. `<ShowDetails>` takes a `show` as a prop.
2. `<ShowDetails>` keeps the selected episode in a state variable.
3. If no show is provided, `<ShowDetails>` renders a message encouraging the user to select a show.
4. If a show is provided, `<ShowDetails>` renders `<EpisodeList>` and `<EpisodeDetails>`.
5. `<EpisodeList>` and `<EpisodeDetails>` are provided the correct props. Read the source code of these 
components to figure out what props they expect!
*/

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails() {
  return <div className="show-details"></div>
}
