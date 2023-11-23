import { useDispatch, useSelector } from 'react-redux'
import { changeActiveBtn, changeInputValue } from '../../../store/slices/genresSlice'
import { NavLink } from 'react-router-dom'
import './GenresBtn.css'

function GenresBtn({ genre, index }) {
    const { active, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(changeInputValue(''))
        dispatch(changeActiveBtn(index))
    }

    return <NavLink
        to={`/genres/${genre.id}`}
        className={`genres_btn ${active == index ? 'active' : ''} ${!isDarkTheme && 'genres_btn_light'}`}
        onClick={onClick}>
    {genre.name}
    </NavLink>
}

export default GenresBtn
