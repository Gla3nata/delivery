const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () => {
        modal.classList.add('open')
    }
    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        console.log(cartBtn);
        openModal();
    })

    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }

    })
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            raiting: 4.8,
            price: 900,
            type: 'Пицца',
            image: 'image-4.jpg'
        }
        ,
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            raiting: 4.8,
            price: 1000,
            type: 'Пицца',
            image: 'image-5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            raiting: 4.8,
            price: 1000,
            type: 'Пицца',
            image: 'image-6.jpg'
        }
        
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center;">загрузка</p>'
    }

    const renderRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a class="products-card" href="./goods.html?id=${card.id}">
                            <div class="products-card__image">
                                <img src="images/restaurant/${card.image}" alt="Изображение ${card.title}" width="384"
                                    height="250">
                            </div>
                            <div class="products-card__desription">
                                <div class="products-card__desription--row">
                                    <h4 class="products-card__desription--title">${card.title}</h4>
                                    <div class="products-card__desription--bage">
                                        ${card.time}
                                    </div>
                                </div>
                                <div class="products-card__desription-info">
                                    <div class="products-card__desription-info--reiting">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.6515 6.24221C14.5553 5.94476 14.2915 5.73349 13.9793 5.70536L9.73947 5.32038L8.06292 1.39623C7.9393 1.10864 7.65776 0.922485 7.34495 0.922485C7.03215 0.922485 6.75061 1.10864 6.62699 1.39691L4.95043 5.32038L0.709893 5.70536C0.398319 5.73417 0.135163 5.94476 0.0384405 6.24221C-0.0582818 6.53966 0.0310434 6.86592 0.266741 7.07158L3.47158 9.88224L2.52655 14.0451C2.45739 14.3512 2.5762 14.6676 2.83016 14.8512C2.96667 14.9498 3.12638 15 3.28744 15C3.4263 15 3.56404 14.9626 3.68766 14.8886L7.34495 12.7028L11.0009 14.8886C11.2684 15.0495 11.6057 15.0349 11.8591 14.8512C12.1131 14.667 12.2318 14.3505 12.1627 14.0451L11.2177 9.88224L14.4225 7.07214C14.6582 6.86592 14.7482 6.54022 14.6515 6.24221Z"
                                                fill="#FFC107" />
                                        </svg>
                                         ${card.raiting}
                                    </div>
                                    <div class="products-card__desription-info--price"> ${card.price}</div>
                                    <div class="products-card__desription-info--group">${card.type} </div>
                                </div>

                            </div>
                        </a>
                `)
        });
    }
    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray)
        }, 1000)
    }

}
modalFunc();
restsFunc();