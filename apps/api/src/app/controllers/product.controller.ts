import { Firebase } from "../config/Firebase"

export const getProducts = async (req, res) => {
    try {
        const firestore = new Firebase().firestore()
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

export const getProductById = async (req, res) => {
    try {
        const firestore = new Firebase().firestore()
        const id = req.params.id;
        const doc = await firestore.collection("products").doc(id).get()
        const product = {
            id: doc.id,
          ...doc.data()
        }
        res.send(product)
    } catch (error) {
        console.log(error)
    }
}