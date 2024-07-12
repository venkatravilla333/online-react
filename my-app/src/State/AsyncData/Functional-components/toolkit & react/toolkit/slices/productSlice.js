import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'

export var fetchProducts = createAsyncThunk('product/fetchProducts', async() => {
  var res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
   
})



var initialState = {
  loading: false,
  products: [],
  error: ''
}


var productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default productSlice.reducer