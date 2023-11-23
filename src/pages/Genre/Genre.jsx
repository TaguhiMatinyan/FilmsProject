import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changePageNumber, fetchFilmsByGenre, fetchMoreGenreFilms } from '../../store/slices/genresSlice'
import FilmCard from '../../components/FilmCard/FilmCard'
import Loading from '../../components/Loading/Loading'
import './Genre.css'

function Genre() {
    const { genresFilms, pageNumber, isFetching, lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    const { genreId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchFilmsByGenre({ genreId, lang }))
    }, [genreId, lang])

    useEffect(() => {
        if (pageNumber > 1) {
            dispatch(fetchMoreGenreFilms({ genreId, pageNumber, lang }))
        }
    }, [pageNumber, lang])

    const onClick = () => dispatch(changePageNumber())

    return (
        <div className={`genres_films ${!isDarkTheme && 'genres_films_light'}`}>
            <div className='films_div'>
                {
                    genresFilms.map(film => {
                        return <FilmCard key={film.title} film={film} />
                    })
                }
            </div>
            <button
                disabled={isFetching}
                onClick={onClick}
                className='more_btn'>{isFetching ? <Loading /> : lang == 'ru' ? 'Еще' : 'More...'}</button>
        </div>
    )
}

export default Genre
