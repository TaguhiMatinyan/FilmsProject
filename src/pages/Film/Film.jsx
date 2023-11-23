import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmById, fetchVideo } from '../../store/slices/filmsSlice'
import { imgUrl } from '../../api/api'
import './Film.css'

function Film({ iframeRef }) {
    const { film } = useSelector(state => state.filmsData)
    const { lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchFilmById({ id, lang }))
        dispatch(fetchVideo({ id, iframeRef, lang }))
    }, [lang, id])

    return (
        <div className={`film_page ${!isDarkTheme && 'film_light'}`}>
            <button onClick={() => navigate(`/`)} className={`backBtn ${!isDarkTheme && 'backBtn_light'}`}>X</button>
            <div className={`film ${!isDarkTheme && 'film_light'}`}>
                <img className='film_img' src={imgUrl + film.poster_path} alt="" />
                <div className="film_info">
                    <div className="info">
                        <h2>{film.title}</h2>
                        <h3>Release date: <span>{film.release_date}</span> </h3>
                        <h3>Rating: <span>{film.vote_average}</span></h3>
                        <h3>Votes: <span>{film.vote_count}</span></h3>
                        <h3>About: <span>{film.overview}</span></h3>
                    </div>
                    <iframe
                        ref={iframeRef}
                        >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Film
