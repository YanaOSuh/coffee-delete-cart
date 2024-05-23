import cappuccino from './cappuccino.jpg';
import doppio from './doppio.jpg';
import espresso from './espresso.jpg';
import americano from './americano.jpg';
import frappe from './frappe.jpg';
import irishCoffee from './irish coffee.jpg';
import latteCream from './latte with cream.jpg';
import latte from './latte.jpg'
import macchiato from './macchiato.jpg';

export const data = [
    {
        id: 1,
        type: 'Espresso',
        description: 'Concentrated type of coffee made with specially roasted beans and an espresso machine.',
        price: '3.5 $',
        image: espresso,
    },
    {
        id: 2,
        type: 'Doppio',
        description: 'A double shot of espresso with no added hot water or milk.',
        price: '5 $',
        image: doppio,
    },
    {
        id: 3,
        type: 'Americano',
        description: 'A coffee drink made by adding hot water to a shot of espresso',
        price: '4 $',
        image: americano,
    },
    {
        id: 4,
        type: 'Macchiato',
        description: 'An espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.',
        price: '4.5 $',
        image: macchiato,
    },
    {
        id: 5,
        type: 'Latte with Cream',
        description: 'A milky drink, when the espresso, steamed milk and ice-cream are mixed together, it creates a creamy, smooth texture.',
        price: '5 $',
        image: latteCream,
    },
    {
        id: 6,
        type: 'Cappucino',
        description: 'An espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam.',
        price: '4.25 $',
        image: cappuccino,
    },
    {
        id: 7,
        type: 'Irish coffee',
        description: 'A caffeinated drink consisting of Irish whiskey, hot coffee and sugar, which has been stirred and topped with cream.',
        price: '6 $',
        image: irishCoffee,
    },
    {
        id: 8,
        type: 'Latte',
        description: 'A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.',
        price: '4.75$',
        image: latte,
    },
    {
        id: 9,
        type: 'Frappe',
        description: 'A blended iced beverage with a tasty foam which is made of espresso shot, coffee syrup, ice cream and milk.',
        price: '5 $',
        image: frappe,
    }
]

