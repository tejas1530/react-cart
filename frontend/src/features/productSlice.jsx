import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	items: [],
	status: null,
	
};

export const productFetch = createAsyncThunk(
	"productSlice/productFetch",
	async ( ) => {
		try {
			const res = await axios.get("http://localhost:3000/products");
			const data = res?.data;
			return data;
		} catch (error) {
			console.log(error)
		}
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[productFetch.pending]: (state, action) => {
			state.status = "pending";
		},
		[productFetch.fulfilled]: (state, action) => {
			(state.status = "fulfilled"), (state.items = action.payload);
		},
		[productFetch.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export default productSlice.reducer;
