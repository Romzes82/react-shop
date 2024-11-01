import { useState, useEffect } from 'react';
import { API_URL, API_KEY, NUM_ITEMS_IN_PAGE } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Basket } from './Basket';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { Pagination } from './Pagination';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const lastItemIndex = currentPage * NUM_ITEMS_IN_PAGE;
    const firstItemIndex = lastItemIndex - NUM_ITEMS_IN_PAGE;
    const currentItems = goods.slice(firstItemIndex, lastItemIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    const addToBasket = (item) => {
        // console.log(item)
        const itemIndex = order.findIndex(
            (elemOfOrderInBasket) => {
                return elemOfOrderInBasket.id === item.id
            }
        );
        //если такой id не найдем, то в ответе получим -1, иначе findIndex выдаст номер индеса элемента в массиве

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else { 
            const newOrder = order.map((orderItem, index) => { 
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else { 
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromBasket = (itemId) => { 
        const newOrder = order.filter((el) => {
            return el.id !== itemId;
            // у того эл-та у которого id равен переданному в ф-ю id вернется false и он не будет добавлен в новоиспеченный массив newOrder
        })
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => { 
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                    };
            } else {
                return el;
            }
        });
        setOrder(newOrder)
    };

    const handleBasketShow = () => { 
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        }).then(response => response.json()).then((data) => { 
            data.shop && setGoods(data.shop);
            setLoading(false);
        });
    }, []);

    return (
        <main className="container content">
            <Basket
                quantity={order.length}
                handleBasketShow={handleBasketShow}
            />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={currentItems} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
            {<Pagination totalCauntItems={goods.length} paginate={paginate} />}
        </main>
    );
}

export { Shop };
