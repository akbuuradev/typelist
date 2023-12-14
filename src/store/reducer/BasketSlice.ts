import {IBasket, IProduct} from "../../type/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const productLocal: any = localStorage.getItem("productL")
const basketLocal: any = localStorage.getItem("basket")

interface IHome {
    product: IProduct[]
    basket: IBasket[]
}

const initialState: IHome = {
    product: JSON.parse(productLocal) || [],
    basket: []
}

export const BasketSlice = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            localStorage.setItem("product", JSON.stringify(state.product = [{...action.payload}, ...state.product]))
        },
        delMenu(state, action: PayloadAction<IProduct>){
            localStorage.setItem("product", JSON.stringify(state.product = state.product.filter((el) => el.id !== action.payload.id)))
        },
        addBasket(state, action: PayloadAction<any>)
        {
            const bas = state.basket.find((el) => el.id === action.payload.id)
           localStorage.setItem("basket", JSON.stringify([{...action.payload.id}, ...state.basket]))
            if (bas) {
                state.basket= state.basket.map((el) => el.id === bas.id ? {...el, count: el.count + 1} : el)
        }
        else {
                state.basket = [...state.basket, {...action.payload, count: 1}]}
            },
        delBasket(state, action: PayloadAction<IBasket>) {
            localStorage.setItem("basket", JSON.stringify({...state.basket = state.basket.filter((el) => el.id !== action.payload.id)}))
        },
        decBasket(state, action: PayloadAction<IBasket>) {
            localStorage.setItem("basket", JSON.stringify({...state.basket = state.basket.map((el) => el.id === action.payload.id && el.count ? {...el, count: el.count - 1} : el)}))
        }
    }

})

export const {addProduct, delMenu, addBasket, delBasket, decBasket} = BasketSlice.actions
export default BasketSlice.reducer