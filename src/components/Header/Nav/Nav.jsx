import { useEffect } from 'react'
import { fetchGenres } from '../../../store/slices/genresSlice'
import { useDispatch, useSelector } from 'react-redux'
import GenresBtn from '../GenresBtn/GenresBtn'
import './Nav.css'

function Nav() {
    const { genres, lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGenres(lang))
    }, [lang])

    return (
        <nav className={`${!isDarkTheme && 'nav_light'}`}>
            <div className={`genres_div ${!isDarkTheme && 'genres_div_light'}`}>
                {
                    genres.map((genre, index) => {
                        return <GenresBtn index={index} key={genre.id} genre={genre} />
                    })
                }
            </div>
        </nav>
    )
}

export default Nav
