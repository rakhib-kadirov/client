import React from 'react'
import './Footer.css'
import icon from '../../pictures/loon-icon.svg'
import icon1 from '../../pictures/loon-icon1.svg'

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="content-width">
                <div className="footer-info-in">
                    {/* <!-- Перывя колонна --> */}
                    <div className="column">
                        <span className="column-span">Сервис</span>
                        <a href="contacts.html">Программа лояльности</a>
                        <a href="contacts.html">Способы оплаты</a>
                        <a href="contacts.html">Доставка товара</a>
                        <a href="contacts.html">Возврат товара</a>
                    </div>
                    {/* <!-- Вторая колонна --> */}
                    <div className="column">
                        <span className="column-span">О компании</span>
                        <a href="contacts.html">Об Bunny Office</a>
                        <a href="contacts.html">Резвизиты (денюшку сюда)</a>
                        <a href="cont.html">Контакты</a>
                    </div>
                    {/* <!-- Третья колонна --> */}
                    <div className="column">
                        <span className="column-span">Помощь</span>
                        <a href="contacts.html">Как сделать заказ</a>
                        <a href="contacts.html">Как вернуть заказ и деньги</a>
                        <a href="contacts.html">Гарантии</a>
                    </div>
                    {/* <!-- Четвёртая колонна со ссылками на соц. сети --> */}
                    <div className="column-info">
                        <div>
                            <span>© 2022 ООО "Bunny Office". <a className="link-info-col" href="contacts.html">Все права защищены.</a></span>
                        </div>
                        <div className="ci-aset">
                            <a title="VK" href="https://vk.com">
                                <img className="icon" src={icon} />
                            </a>
                            <a title="Telegram" href="https://t.me">
                                <img className="icon" src={icon1} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer