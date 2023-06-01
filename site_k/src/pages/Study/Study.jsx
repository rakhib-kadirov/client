import React from 'react'
import { Link } from 'react-router-dom';
import './Study.css'

import heart from "../../pictures/heart1.png";
// import list from "../../pictures/bumaga.jpg";
import pen from "../../pictures/karandash.jpg";
import line from "../../pictures/lineyka.jpg";
import lola from "../../pictures/lola.jpg";
import book from "../../pictures/eghedn.jpg";
import box from "../../pictures/penal.jpg";
import gift from "../../pictures/podarok.jpg";
import plasticine from "../../pictures/plastilin.jpg";

const Study = () => {
    const posts = [
        {
            id: 2,
            title: "Карандаши цветные",
            price: "649",
            // desc: "Берег",
            heart: `${heart}`,
            img: `${pen}`,
            cat: "/marker"
        },
        {
            id: 3,
            title: "Линейка",
            price: "49",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${line}`,
            cat: `/marker`
        },
        {
            id: 4,
            title: 'Мягкая игрушка "Soft Bunny"',
            price: "1 949",
            // desc: "Летняя резиденция",
            heart: `${heart}`,
            img: `${lola}`,
            cat: `/marker`
        },
        {
            id: 5,
            title: 'Ежедневник "Lola"',
            price: "699",
            // desc: "Берег",
            heart: `${heart}`,
            img: `${book}`,
            cat: `/sketch`
        },
        {
            id: 6,
            title: 'Пенал "Cold"',
            price: "379",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${box}`,
            cat: `/sketch`
        },
        {
            id: 7,
            title: 'Подарочный набор "Lola & Bugs"',
            price: "2 750",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${gift}`,
            cat: `/tet`
        },
        {
            id: 8,
            title: "Набор цветных карандашей",
            price: "199",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${pen}`,
            cat: `/marker`
        },
        {
            id: 9,
            title: "Пластилин",
            price: "449",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${plasticine}`,
            cat: `/marker`
        }
    ];

    return (
        <div className="content-wrap">
            <div className="content-width">
                <span className="content-fav-text">
                    Категория:
                    <Link href="/study">
                        &emsp;Учёба
                    </Link>
                </span>
                <div className="list">
                    <div className="list-left">
                        <Link to={`/study/tet`}>Тетради</Link>
                        <Link to={`/study/sketch`}>Скетчбуки</Link>
                        <Link to={`/study/album`}>Альбомы</Link>
                        <Link to={`/study/marker`}>Маркеры</Link>
                    </div>
                    <div className="b-item-list">
                        {posts.map((post) => (
                            <div className="b-item" key={post.id}>
                                {/* <!-- Кнопки корзины и избранного --> */}
                                <div className="b-item-btn">
                                    <div className="b-item-btn-fav">
                                        <button className="b-item-btn-fav-button" type="button" >
                                            <span className="b-item-btn-fav-button-span">
                                                <img className="btn-img" src={post.heart} />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Ссылка, в которой фото товара --> */}
                                <Link to={`/post/${post.id}`}>
                                    <img className="b-item-link" src={post.img} />
                                </Link>
                                {/* <!-- Стоимость и описание товара --> */}
                                <div className="b-item-opis">
                                    <Link to={`/post/${post.id}`}>
                                        <div className="b-item-opis-prod">
                                            <div className="b-item-opis-sell">
                                                <span className="b-item-opis-sell-span">{post.price} ₽</span>
                                            </div>
                                            <span className="b-item-opis-name">{post.title}</span>
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="b-item-opis-bag">
                                    <button id="one1" type="button" className="b-item-opis-bag-btn1">
                                        <span className="b-item-opis-bag-btn-span">В корзину</span>
                                    </button>
                                </div> */}
                            </div>
                        ))}
                        {/* <!-- Первый блок -->
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> 
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={list} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> 
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Подарочная бумага</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Второй блок --> 
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> 
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={line} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> 
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">649 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Карандаши цветные</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="two2" type="button" tabIndex="0" className="b-item-opis-bag-btn2">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Третий блок --> 
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> 
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={lola} />
                            </Link>
                            {/* <!-- Стоимость и описание товара -->
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Линейка</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Четвёртый блок --> 
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного -->
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={book} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> 
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Мягкая игрушка "Soft Bunny"</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Пятый блок --> *}
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> *
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> *
                            <Link href="">
                                <img className="b-item-link" src={box} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> *
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Ежедневник "Lola"</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Шестой блок --> 
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> 
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={gift} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> *
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Пенал "Cold"</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Седьмой блок --> *
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного --> *
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара --> 
                            <Link href="">
                                <img className="b-item-link" src={pen} />
                            </Link>
                            {/* <!-- Стоимость и описание товара --> 
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Подарочный набор "Lola & Bugs"</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Восьмой блок --> 
                        <div className="b-item">
                            {/* <!-- Кнопки корзины и избранного -->
                            <div className="b-item-btn">
                                <div className="b-item-btn-fav">
                                    <button className="b-item-btn-fav-button" type="button" tabIndex="0">
                                        <span className="b-item-btn-fav-button-span">
                                            <img className="btn-img" src={heart} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Ссылка, в которой фото товара -->
                            <Link href="">
                                <img className="b-item-link" src={plasticine} />
                            </Link>
                            {/* <!-- Стоимость и описание товара -->
                            <div className="b-item-opis">
                                <Link href="">
                                    <div className="b-item-opis-prod">
                                        <div className="b-item-opis-sell">
                                            <span className="b-item-opis-sell-span">219 ₽</span>
                                        </div>
                                        <span className="b-item-opis-name">Набор цветных карандашей</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="b-item-opis-bag">
                                <button id="one1" type="button" tabIndex="0" className="b-item-opis-bag-btn1">
                                    <span className="b-item-opis-bag-btn-span">В корзину</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Study