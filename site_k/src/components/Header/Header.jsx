import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../pictures/bunny_office.png'
import lupa from '../../pictures/lupa.png'

const Header = () => {
    return (
        <div id="aLL">
            <div className="header-wrap">
                <div className="header-info">
                    <div className="content-width">
                        <div className="header-info-in">
                            <div className="header-info-in-left">
                                <a href="/">
                                    <img className="logotype" src={logo} />
                                </a>
                            </div>
                            {/* Центральная часть шапки (Меню) */}
                            {/* Строка поиска */}
                            <div className="header-info-in-center1">
                                <div className="header-search">
                                    <div className="header-search-lupa">
                                        <div className="search-write">
                                            <input className="search-write-input" placeholder="Начните искать" type="text" name="text" autoCorrect="off" maxLength="255"/>
                                        </div>
                                        <div className="search-lupa">
                                            <button className="header-search-lupa-btn" type="button" name="button">
                                                <img className="header-search-lupa-btn-span-img" src={lupa} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Кнопка-гамбургер в шапке для ссылок --> */}
                            {/* <div id="header-wrap-burger" className="header-wrap-burger">
                                <button className="header-burger" id="header-burger">
                                    <span></span>
                                </button>
                            </div>
                            <div id="header-wrap-burger-close" className="header-wrap-burger-close" style={{display: 'none'}}></div> */}
                            {/* <!-- Меню со ссылками в шапке --> */}
                            <div className="header-info-in-center2">
                                <div className="center-block">
                                    <div className="wrap-menu">
                                        <div className="center-block-list">
                                            <ul id="menu">
                                                <li>
                                                    <Link className="text-span" to="/study">Учёба</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-span" to="/office">Офис</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-span" to="/gift">Подарки</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-span" to="/chat">Чат</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Правая часть шапки (Избранное, Корзина, Регистрация)
                            <div className="header-info-in-right">
                                Избранное-Корзина-Регистрация
                                <div className="bottom-block">
                                    <div className="favorite">
                                        <a href="/favorite/fav.html" style="margin-left: 20px;">
                                            <img className="fa-heart" src="pict/heart2.png" />
                                            <span id="heart">0</span>
                                        </a>
                                    </div>
                                    <div className="card">
                                        <a className="card-bag" style="margin-left: 20px;">
                                            <img className="fa-bag" src="pict/basket1.png" />
                                            <span id="bag">0</span>
                                        </a>
                                    </div>
                                    Регистрация
                                    <div className="login-reg ">
                                        <a style={{ marginLeft: 'px' }} className="reg-win" id="reg-win">
                                            <img className="fa-user" src="pict/user.png" />
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header