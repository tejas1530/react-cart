import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
	const [data, setData] = useState([]);
	const getProducts = async () => {
		const res = await axios.get("http://localhost:3000/products");
		setData(res.data);
		const respond = res.data;
		console.log(respond);
	};
console.log(data)
	useEffect(() => {
		getProducts();
	}, []);

	return (
        <>
        
      <main className="py-4 space-y-6 z-10 " >
      {
        
        data.map((e,index)=>(
            <div className=" flex justify-center   " >
            <div key={e.id} className="p-3 space-y-3    shadow-lg w-80 " >
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.desc}</p>
                <p>$ {e.price}</p>
                <button className="bg-sky-300 rounded-md w-fit h-fit p-3 hover:scale-105 active:bg-sky-500 " >Add to cart</button>
            </div>
            </div>
        ))

        }
      </main>
        
        </>
    )
};

export default Home;
