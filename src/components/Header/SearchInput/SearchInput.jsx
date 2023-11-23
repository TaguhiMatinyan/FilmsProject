import { useDispatch, useSelector } from 'react-redux';
import { closeResultsDiv, searchByInput } from '../../../store/slices/genresSlice';
import SearchResults from '../../SearchResults/SearchResults';
import { useEffect, useRef } from 'react';
import './SearchInput.css'


function SearchInput() {
    const { resultShown, lang, inputValue } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target != inputRef.current || e.target != inputRef.current.closest('div')) {
                dispatch(closeResultsDiv())
            }
        })
    }, [])

    return (
        <div className='input_div'>
            <input
                type="text"
                ref={inputRef}
                placeholder={lang == 'ru' ? 'Поиск...' : 'Search...'}
                value={inputValue}
                onChange={(e) => dispatch(searchByInput({ e, lang }))}
            />
            {resultShown && <SearchResults />}
        </div>
    )
}

export default SearchInput
