import React, {FormEvent, useRef, useState} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {addProduct} from "../store/reducer/BasketSlice";
import {useDispatch} from "react-redux";

const Home = () => {
    const [home, setHome] = useState({
            name: "",
            price: NaN
        })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHome({...home, [e.target.name] : e.target.value})
    }

    const handleRef = useRef<any>()

    const [file, setFile] = useState<any>("")

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setFile(fileReader.result)
    }

    const dispatch = useDispatch()
    const {product} = useAppSelector(state => state.BasketSlice)

    const handleFile = (e: any) => setFile(fileReader.readAsDataURL(e.target.files[0]))

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newHome = {
            id: Math.round(Math.random() * 1000),
            image: file,
            name: home.name,
            price: home.price,
            count: 1,

        }
        dispatch(addProduct(newHome))
        home.price = NaN
        home.name = ""
    }

    return (
        <div className="container p-10">
          <div className="flex  justify-around items-start">
              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly">
                  <div onClick={() => handleRef.current.click()} className="b   g-blue-400 rounded p-1">Choose file</div>
                  <input onChange={handleFile} ref={handleRef} style={{display: "none"}} type="file"/>
                  <input onChange={handleChange} value={home.name} className="rounded mt-4 mb-4 ml-2 p-1 border-2 border-red-700" type="name" name={"name"} placeholder={"name"}/>
                  <input onChange={handleChange} value={home.price} className="rounded ml-2 p-1 border-2 border-red-700 " type="number" name={"price"} placeholder={"price"}/>
                      <button className="bg-green-600  px-4 py-2 m-4 rounded-lg">ADD</button>
              </form>
          </div>
        </div>
    );
};

export default Home;