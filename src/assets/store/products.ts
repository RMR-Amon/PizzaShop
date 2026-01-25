import italian from "/src/assets/images/menu_italian.png";
import venecia from "/src/assets/images/menu_venecia.png";
import meat from "/src/assets/images/menu_meat.png";
import cheese from "/src/assets/images/menu_cheese.png";
import argentina from "/src/assets/images/menu_argentina.png";
import gribnaya from "/src/assets/images/menu_gribnaya.png";
import tomato from "/src/assets/images/menu_tomato.png";
import italian_x2 from "/src/assets/images/menu_italian_x2.png";

interface IProduct_size {
  id: number;
  type: string;
  size: number;
  active: boolean;
}
interface IMenu_products {
  id: number;
  img: string;
  title: string;
  text: string;
  size: IProduct_size[];
  price: number;
  amount: number;
}
export const menu_products: IMenu_products[] = [
  {
    id: 1,
    img: italian,
    title: "Italian",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 8.35,
    amount: 0,
  },
  {
    id: 2,
    img: venecia,
    title: "Venecia",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 7.35,
    amount: 0,
  },
  {
    id: 3,
    img: meat,
    title: "Meat",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 9.35,
    amount: 0,
  },
  {
    id: 4,
    img: cheese,
    title: "Cheese",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 8.35,
    amount: 0,
  },
  {
    id: 5,
    img: argentina,
    title: "Argentina",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 7.35,
    amount: 0,
  },
  {
    id: 6,
    img: gribnaya,
    title: "Gribnaya",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 6.35,
    amount: 0,
  },
  {
    id: 7,
    img: tomato,
    title: "Tomato",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 7.35,
    amount: 0,
  },
  {
    id: 8,
    img: italian_x2,
    title: "Italian x2",
    text: " Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    size: [
      {
        id: 1,
        type: "small",
        size: 22,
        active: false,
      },
      {
        id: 2,
        type: "medium",
        size: 28,
        active: true,
      },
      {
        id: 3,
        type: "big",
        size: 33,
        active: false,
      },
    ],
    price: 8.35,
    amount: 0,
  },
];
