import React from 'react'
import { Link } from 'react-router-dom';
import './New.css'
import banner from '../../pictures/banner-left.jpg'
import heart from "../../pictures/heart1.png";
import list from "../../pictures/bumaga.jpg";
import pen from "../../pictures/karandash.jpg";
import line from "../../pictures/lineyka.jpg";

const New = () => {
    const posts = [
        {
            id: 1,
            title: "Подарочная бумага",
            price: "219",
            // desc: "Летняя резиденция",
            heart: `${heart}`,
            img: `${list}`
        },
        {
            id: 2,
            title: "Карандаши цветные",
            price: "649",
            // desc: "Берег",
            heart: `${heart}`,
            img: `${pen}`
        },
        {
            id: 3,
            title: "Линейка",
            price: "49",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${line}`
        }
    ];

    return (
        <div className="content-width">
            <div className="ban-window">
                {/* <!-- Картинка слева в основе сайта --> */}
                <div className="banner-left">
                    <Link>
                        <img className="banner-photo" src={banner} />
                    </Link>
                </div>
                {/* <!-- Ссылки справа от картинки --> */}
                <div className="banner-items">
                    {posts.map((post) => (
                        <div className="b-item_main" key={post.id}>
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
    )
}

export default New