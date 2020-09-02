import React from 'react'
import './Header.scss'
import Button from "../../components/Button/Button"
import add from '../../images/person_add-24px.svg'


export default function Header(props) {


    function onInputSearch(e) {
        props.setsearchValue(e.target.value)
    }
    
    return (
        <header className='header'>
            <h2 className='header__title visually-hidden'>Hello World</h2>
            <div className='header__actions'>
                <input className='header__search' onChange={(e) => onInputSearch(e)} type="text" placeholder='Что будем искать?' value={props.searchValue}/>
                <Button type='add' onClick={() => props.setmodal('add')}  icon={add} className='header__button'>Добавить</Button>
            </div>
        </header>
    )
}
