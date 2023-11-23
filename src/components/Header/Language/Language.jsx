import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../../store/slices/genresSlice'
import './Language.css'

function Language() {
    const { lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    return (
        <select
            name="lang"
            id='lang'
            className={`lang ${!isDarkTheme && 'lang_light'}`}
            value={lang}
            onChange={(e) => dispatch(changeLang(e.target.value))}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>
    )
}
export default Language
