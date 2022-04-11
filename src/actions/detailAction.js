import axios from "axios";
import { gameDetailsURL, gameScreenshotsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotsData = await axios.get(gameScreenshotsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotsData.data,
    },
  });
};
