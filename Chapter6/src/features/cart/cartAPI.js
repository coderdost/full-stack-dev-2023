// A mock function to mimic making an async request for data
import axios from 'axios'
export function fetchItems() {
     return axios.get('http://localhost:8080/cart')
}
export function addItem(item) {
     return axios.post('http://localhost:8080/cart',item)
}
export function updateItem(id,itemUpdate) {
     console.log({id,itemUpdate})
     return axios.patch(`http://localhost:8080/cart/${id}`,itemUpdate)
}
export function deleteItem(id) {
     return axios.delete(`http://localhost:8080/cart/${id}`)
}

