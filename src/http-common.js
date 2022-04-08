import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/19eea68b6b88444d8111b78c96766153",
  headers: {
    "Content-type": "application/json"
  }
});