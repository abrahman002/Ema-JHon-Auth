import { getShoppingCart } from "../utilities/fakedb"

const cartPRoductsLoader=async()=>{
    const productsLoaded=await fetch('products.json')
    const loaded=await productsLoaded.json()
    // console.log(loaded)

    const storedCart=getShoppingCart();
    const saveCart=[];

    for (const id in storedCart){
        const addedProduct=loaded.find(pd =>pd.id===id)
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            saveCart.push(addedProduct)
        }
    }

    return saveCart;
}


export default cartPRoductsLoader;