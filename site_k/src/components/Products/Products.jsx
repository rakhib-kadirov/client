import React from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import heart from "../../pictures/heart1.png";
import lola from "../../pictures/lola.jpg";
import book from "../../pictures/eghedn.jpg";
import box from "../../pictures/penal.jpg";
import gift from "../../pictures/podarok.jpg";
import pen from "../../pictures/karandash1.jpg";
import plasticine from "../../pictures/plastilin.jpg";

const Products = () => {
    const posts = [
        {
            id: 4,
            title: 'Мягкая игрушка "Soft Bunny"',
            price: "1 949",
            // desc: "Летняя резиденция",
            heart: `${heart}`,
            img: `${lola}`
        },
        {
            id: 5,
            title: 'Ежедневник "Lola"',
            price: "699",
            // desc: "Берег",
            heart: `${heart}`,
            img: `${book}`
        },
        {
            id: 6,
            title: 'Пенал "Cold"',
            price: "379",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${box}`
        },
        {
            id: 7,
            title: 'Подарочный набор "Lola & Bugs"',
            price: "2 750",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${gift}`
        },
        {
            id: 8,
            title: "Набор цветных карандашей",
            price: "199",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${pen}`
        },
        {
            id: 9,
            title: "Пластилин",
            price: "449",
            // desc: "Отражение",
            heart: `${heart}`,
            img: `${plasticine}`
        }
    ];

    return (
        <div className="content-width">
            <div className="content-list-items">
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
    )
}

export default Products;