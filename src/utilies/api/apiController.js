import { post_request, get_request } from "./requests";

const SearchApi = async ({ navigation, params }) => {
    const data = await get_request({ target: "/autocomplete", navigation, params });
    return data;
}
const SearchResultApi = async ({ params, navigation }) => {
    const data = await get_request({ params, navigation });
    return data;
}
const SearchResultBarCodeApi = async ({ params, navigation }) => {
    const data = await get_request({ target: "/search_by_barcode", params, navigation });
    return data;
}
const AddItemsApi = async ({ name, barCode, composition, navigation }) => {
    const data = await post_request({ target: "?name=" + name + "&barcode_number=" + barCode + "&material=" + composition, navigation });
    return data;
}



export { SearchApi, SearchResultApi, SearchResultBarCodeApi, AddItemsApi }