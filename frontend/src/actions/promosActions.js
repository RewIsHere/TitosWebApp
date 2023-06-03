import axios from "axios";
import {
  PROMOS_LIST_REQUEST,
  PROMOS_LIST_SUCCESS,
  PROMOS_LIST_FAIL,
} from "../constants/promosConstants";

export const listPromos = () => async (dispatch) => {
  try {
    dispatch({ type: PROMOS_LIST_REQUEST });

    //    const { data } = await axios.get(`localhost:5000/api/v1/pizzas`)
    const data = [
      {
        id: 1,
        image:
          "https://titos-pizza-web.rewishere.repl.co/assets/bg_slider1.png",
      },
      {
        id: 2,
        image:
          "https://titos-pizza-web.rewishere.repl.co/assets/bg_slider2.jpg",
      },
    ];

    dispatch({
      type: PROMOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROMOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
