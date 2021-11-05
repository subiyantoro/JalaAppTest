import { combineReducers } from "redux";
import price from "./price";
import news from "./news";
import diseases from "./diseases";
import region from "./region";

const reducer = {
    priceStore: price,
    newsStore: news,
    diseasesStore: diseases,
    regionStore: region
}

const rootReducers = combineReducers(reducer)
export default rootReducers