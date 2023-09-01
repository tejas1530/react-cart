import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetAllProductQuery } from "../features/productsApi";

const Home = () => {

 const {data,isLoading,error}= useGetAllProductQuery()

// 	const [dataS, setDataS] = useState([]);
// 	const getProducts = async () => {
// 		const res = await axios.get("http://localhost:3000/products");
// 		setDataS(res.data);
// 		const respond = res.data;
// 		console.log(respond);
// 	};
// console.log(data)
// 	useEffect(() => {
// 		getProducts();
// 	}, []);

// 	return (
//         <>
        
//       <main className="py-40 z-10 md:flex md:space-x-6 justify-center " >
//       {
        
//         data.map((e,index)=>(
//             <div className=" flex justify-center   " >
//             <div key={e.id} className="p-3 space-y-3    shadow-lg w-80 " >
//                 <img src={e.image} className="h-60   " alt="" />
//                 <p>{e.name}</p>
//                 <p>{e.desc}</p>
//                 <p>$ {e.price}</p>
//                 <button className="bg-sky-300 rounded-md w-fit h-fit p-3 hover:scale-105 active:bg-sky-500 " >Add to cart</button>
//             </div>
//             </div>
//         ))

//         }
//       </main>
        
//         </>
//     )
};

export default Home;
