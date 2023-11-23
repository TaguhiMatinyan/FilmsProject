import { useDispatch, useSelector } from 'react-redux'
import { imgUrl } from '../../api/api'
import { NavLink } from 'react-router-dom'
import { changeInputValue, closeResultsDiv } from '../../store/slices/genresSlice'
import './SearchResults.css'

function SearchResults() {
    const { searchedFilms, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()

    const onClick = (film) => {
        dispatch(changeInputValue(film?.title))
        dispatch(closeResultsDiv())
    }

    return (
        <div className={`result_div ${!isDarkTheme && 'result_div_light'}`}>
            {
                !searchedFilms.length
                    ?
                    <p>no results</p>
                    :
                    searchedFilms.map(film => {
                        return <NavLink
                            to={`/films/${film.id}`}
                            key={film?.id}
                            className={`searched_film ${!isDarkTheme && 'searched_film_light'}`}
                            onClick={() => onClick(film)}
                        >
                            <img src={imgUrl + film?.poster_path} alt="" />
                            <p>{film?.title}</p>
                        </NavLink>
                    })
            }
        </div>
    )
}

export default SearchResults
