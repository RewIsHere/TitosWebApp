import axios from "axios";
import {
  PROMOS_CREATE_FAIL,
  PROMOS_CREATE_REQUEST,
  PROMOS_CREATE_RESET,
  PROMOS_CREATE_SUCCESS,
  PROMOS_DELETE_FAIL,
  PROMOS_DELETE_REQUEST,
  PROMOS_DELETE_SUCCESS,
  PROMOS_LIST_REQUEST,
  PROMOS_LIST_SUCCESS,
  PROMOS_LIST_FAIL,
} from "../constants/promosConstants";

export const createPromo = (promo, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: PROMOS_CREATE_REQUEST,
    });

    const { data } = await axios.post(
      `https://pzgkuy-5000.csb.app/api/v1/promos`,
      promo
    );

    dispatch({
      type: PROMOS_CREATE_SUCCESS,
      payload: data,
    });
    navigate("/admin/promos");
  } catch (error) {
    dispatch({
      type: PROMOS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePromo = (promo, id) => async (dispatch) => {
  try {
    dispatch({
      type: PROMOS_CREATE_REQUEST,
    });

    const { data } = await axios.put(
      `https://pzgkuy-5000.csb.app/api/v1/promos/${id}`,
      promo
    );

    dispatch({
      type: PROMOS_CREATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: PROMOS_CREATE_RESET,
    });
  } catch (error) {
    dispatch({
      type: PROMOS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePromo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROMOS_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `https://pzgkuy-5000.csb.app/api/v1/promos/${id}`
    );
    dispatch({
      type: PROMOS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROMOS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPromos = () => async (dispatch) => {
  try {
    dispatch({ type: PROMOS_LIST_REQUEST });

    const { data } = await axios.get(
      `https://pzgkuy-5000.csb.app/api/v1/promos`
    );
    /* const data = [
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
    ];*/

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
