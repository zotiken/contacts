import React from 'react'
import './Header.scss'
import Button from "../../components/Button/Button"
import add from '../../images/person_add-24px.svg'

export default function Header() {
    return (
        <header className='header'>
            <h2 className='header__title visually-hidden'>Hello World</h2>
            <div className='header__actions'>
                <input className='header__search' type="text" placeholder='Что будем искать?'/>
                <Button type='add'  icon={add} className='header__button'></Button>
            </div>
        </header>
    )
}
