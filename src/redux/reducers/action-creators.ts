import { DetailsActionCreators } from "./details/action-creators";
import { MovieActionCreators } from "./movies/action-creators";

export const allActionCreators = {
  ...DetailsActionCreators,
  ...MovieActionCreators
}