import type { Pizza } from '../components/PizzaCard/PizzaCard'
import diavola from '../assets/diavola.jpg'
import burrata from '../assets/burrata.jpg'
import prosciutto from '../assets/prosciutto.jpg'
import margherita from '../assets/margherita.jpg'
import capricciosa from '../assets/capricciosa.jpg'
import verde from '../assets/verde.jpg'

export const pizzas: Pizza[] = [
  {
    name: 'Diavola',
    badge: 'Ostra',
    price: 39,
    image: diavola,
    imageHeight: 558,
    description: 'sos pomidorowy, mozzarella fior di latte, spianata piccante, jalapeño',
  },
  {
    name: 'Burrata',
    badge: 'Bestseller',
    price: 45,
    image: burrata,
    imageHeight: 1220,
    description: 'sos pomidorowy, mozzarella, burrata, pomidorki cherry, pesto, rukola',
  },
  {
    name: 'Prosciutto',
    badge: 'Klasyka',
    price: 43,
    image: prosciutto,
    imageHeight: 1350,
    description: 'sos pomidorowy, mozzarella, prosciutto crudo, grana padano, rukola',
  },
  {
    name: "Margherita",
    badge: "Vege",
    price: 31,
    image: margherita,
    imageHeight: 720,
    description: "sos pomidorowy San Marzano, mozzarella fior di latte, bazylia",
  },
  {
    name: "Capricciosa",
    badge: "Klasyka",
    price: 40,
    image: capricciosa,
    imageHeight: 1350,
    description: "sos pomidorowy, mozzarella, szynka cotto, pieczarki, oliwki",
  },
  {
    name: "Verde",
    badge: "Vege",
    price: 42,
    image: verde,
    imageHeight: 1350,
    description: "krem z cukinii, mozzarella, kozi ser, szpinak, pistacje",
  },
]

export const categories = ['Pizza', 'Burgery', 'Pasta', 'Sałatki', 'Napoje'] as const
export type MenuCategory = typeof categories[number]

