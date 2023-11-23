import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveBtn, changeInputValue } from '../../store/slices/genresSlice';
import { NavLink } from 'react-router-dom';
import filmLogo from '../../assets/pagelogo.jpg';
import './Logo.css'

function Logo() {
    const { inputValue } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    const logoOnClick = () => {
        window.scrollTo(0, 0)
        dispatch(changeActiveBtn(null))
        if (inputValue.length) {
            dispatch(changeInputValue(''))
        }
    }
    return (
        <NavLink
            className={`logo}`}
            to={'/'}
            onClick={logoOnClick}>
            <img src={filmLogo} alt="filmLogo" className='filmLogo' />
        </NavLink>
    )
}

export default Logo
