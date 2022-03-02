import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001";

export const GetPosts = createAsyncThunk(
  "post/getPosts",
  async () => await await (await axios.get(`${BASE_URL}/post`)).data
);

export const CreatePost = createAsyncThunk(
  "post/createPost",
  async (post) => await (await axios.post(`${BASE_URL}/post`, post)).data
);

export const DeletePost = createAsyncThunk(
  "post/deletePost",
  async (post) => await (await axios.post(`${BASE_URL}/post`, post)).data
);
