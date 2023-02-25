import { Firebase } from "../config/Firebase"

export const getProducts = async (req, res) => {
    try {
        const firebase = new Firebase()
        const firestore = firebase.firestore()
        const ref = await firestore.collection("products").get()
        
        const products = ref.docs.map((product) => {
            return {
                id: product.id,
            ...product.data()
            }
        })
        res.send(products)
    } catch (error) {
        console.log(error)
    }
}