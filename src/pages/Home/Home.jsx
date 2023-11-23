import React, { useEffect } from 'react'

import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fetchFilms, increment } from '../../store/slices/filmsSlice'
import FilmCard from '../../components/FilmCard/FilmCard'
import Loading from '../../components/Loading/Loading'

function Home() {
    const { films, pageNumber, isFetching } = useSelector(state => state.filmsData)
    const { lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchFilms({pageNumber, lang}))
    }, [pageNumber, lang])

    return (
        <div className={`home ${!isDarkTheme && 'home_light'}`}>
            {
                isFetching
                    ?
                    <Loading />
                    :
                    <>
                        <div className="films_div">
                            {
                                films.map(film => {
                                    return <FilmCard key={film.id} film={film} />
                                })
                            }
                        </div>
                        <div className="btns_div">
                            <button
                                disabled={isFetching || pageNumber == 1}
                                onClick={() => dispatch(decrement())}
                                className='previos_btn'
                            >
                                {lang == 'ru' ? 'Предыдущий' : 'Previous'}
                            </button>
                            <button
                                disabled={isFetching || pageNumber == 500}
                                onClick={() => dispatch(increment())}
                                className='next_btn'
                            >
                                {lang == 'ru' ? 'Следующий' : 'Next'}
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Home
