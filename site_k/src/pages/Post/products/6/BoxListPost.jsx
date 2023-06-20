import React from 'react'
import { Link } from 'react-router-dom';

import heart from "../../../../pictures/heart1.png";
import lola from "../../../../pictures/lola.jpg";
import book from "../../../../pictures/eghedn.jpg";
import box from "../../../../pictures/penal.jpg";
import gift from "../../../../pictures/podarok.jpg";
import pen from "../../../../pictures/karandash1.jpg";
import plasticine from "../../../../pictures/plastilin.jpg";
import list from "../../../../pictures/bumaga.jpg";
import line from "../../../../pictures/lineyka.jpg";

import '../../Post.css'

const BoxListPost = () => {
    return (
        <div className="post">
            <div className="title">
                <Link to={-1}>
                    <h2 className='back'> ← НАЗАД</h2>
                </Link>
                <h1>Пенал "Cold".</h1>
            </div>
            <div className="content">
                <div className="imagePost">
                    <img src={box} />
                </div>
                <div className="content_desc">
                    <div className="desc">
                        <h3>Характеристики</h3>
                        <div className="character">
                            <dl>
                                <dt>
                                    <span>Тип</span>
                                </dt>
                                <dd>
                                    <Link>Мягкая игрушка</Link>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <span>Материал</span>
                                </dt>
                                <dd>
                                    <Link>Плюш</Link>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <span>Вид мягкой игрушки</span>
                                </dt>
                                <dd>
                                    <Link>Герои мультфильмов</Link>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <span>Высота, см</span>
                                </dt>
                                <dd>
                                    <span>30</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <span>Бренд</span>
                                </dt>
                                <dd>
                                    Бумага
                                </dd>
                            </dl>
                        </div>
                        <h3>Описание</h3>
                        <p>Герои американских мультфильмов и комиксов; находчивые, бесстрашные и с ними нахальный кролик. Для нас они знакомы из детства из популярных комиксов, мультсериалов и фильмов того времени.
                            <br></br>
                            <br></br>
                            Багз Банни.&emsp;&emsp;&emsp;Лола Банни.
                            <br></br>
                            Даффи Дак.&emsp;&emsp;&emsp;Тасманский дьявол.
                            <br></br>
                            Твити.&emsp;&emsp;&emsp;&emsp;&emsp;Кот Сильвестр.
                            <br></br>
                            <br></br>
                            Игрушки станут отличным подарком для взрослых и детей любого возраста на любой праздник . Наши игрушки выполнены из мягкого плюша и холлофайбера, что делает их невероятно мягкими и приятными на ощупь. Героев фильма и мультсериала есть целая коллекция, вы можете собрать шесть персонажей.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxListPost