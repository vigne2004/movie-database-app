import './index.css'

const CastItem = ({details}) => (
  <li className="list-cont">
    <img
      className="cast-img"
      src={`https://image.tmdb.org/t/p/original${details.profile_path}`}
      alt={details.name}
    />
    <div>
      <h1 className="org-name">{details.original_name}</h1>
      <h1 className="name">{details.character}</h1>
    </div>
  </li>
)
export default CastItem
