import axios from "axios";

const url = 'https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments';

export const getAll = axios.get(url)