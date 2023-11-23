import React from 'react';
import { NavLink } from 'react-router-dom';
import { imgUrl } from '../../api/api';
import { useSelector } from 'react-redux';
import './FilmCard.css';

function FilmCard({ film }) {
    const { isDarkTheme } = useSelector(state => state.genresData)
    return (
        <NavLink to={`/films/${film.id}`} className={`film_card ${!isDarkTheme && 'film_card_light'}`}>
            <img src={imgUrl + film.poster_path} alt="" />
            <h3>{film.title}</h3>
        </NavLink>
    )
}
export default FilmCard
