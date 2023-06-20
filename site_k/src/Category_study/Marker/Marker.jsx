import React from 'react'
import { Link } from 'react-router-dom';
import './Marker.css'

import heart from "../../pictures/heart1.png";
// import list from "../../pictures/bumaga.jpg";
import pen from "../../pictures/karandash.jpg";
import line from "../../pictures/lineyka.jpg";
import lola from "../../pictures/lola.jpg";
// import book from "../../pictures/eghedn.jpg";
// import box from "../../pictures/penal.jpg";
// import gift from "../../pictures/podarok.jpg";
import plasticine from "../../pictures/plastilin.jpg";

const Marker = () => {
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
                    <span>
                        <Link to={`/study/`}>&emsp;Учёба&emsp;</Link>
                        /
                        <Link to={`/study/sketch`}>&emsp;Маркеры&emsp;</Link>
                    </span>
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
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Marker