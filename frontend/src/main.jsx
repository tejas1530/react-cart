import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, { productFetch } from "./features/productSlice.jsx";
import { productApi } from "./features/productsApi.jsx";

const store = configureStore({
	reducer: {
		product: productReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(productFetch());
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
