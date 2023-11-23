import React from 'react'
import { changeTheme } from '../../../store/slices/genresSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaSun, FaMoon } from 'react-icons/fa'
import './Theme.css'

function Theme() {
    const { isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    
    return (
        <div
            className="theme_parent_div"
            onClick={() => dispatch(changeTheme())}>
            <div className={`theme_child_div ${isDarkTheme ? 'dark' : 'light'}`}>
                {isDarkTheme ? FaMoon() : FaSun()}
            </div>
        </div>
    )
}

export default Theme
