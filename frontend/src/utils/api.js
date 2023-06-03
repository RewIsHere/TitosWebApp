import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + "f712d141e31aad3b5d310d73de3211055201a0e6baa1b1465ed4f71b7b66d2fabea49de77d5cb2f41fa6b466049feb0caea8f68cfa5dca2a46fec0b9a559d603f9433ce0eb733b06fcb3646e9110cc523ce96222a33504ca03deeb3521a5be2d95f38e652e53a95c05f732e35cd3fb584b3dff808cd723a31fbb3f1b1c356547",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      'localhost:1337' + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};