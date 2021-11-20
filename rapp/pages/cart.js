import { useDispatch, useSelector} from 'react-redux'
import { urlFor } from "@lib/sanity";


export default function Cart(){

        const selectCartItems = useSelector((state) => state.cart.currentCart);

        return (
            <div className="">
                <div className="inner-wrapper flex flex-col justify-start items-center py-8 min-h-screen">    
                    {Object.keys(selectCartItems).length > 0 ?
                        Object.keys(selectCartItems).map((item, itemInd) => {
                            const {quantity, name, desc, imgRef} = selectCartItems[item];

                            return (
                                <div className="flex min-w-lg w-3/4 glass justify-between p-8 my-8" id={item} key={itemInd}>
                                    <div className="flex flex-col justify-between">
                                        <h3 className="text-2xl" >{name}</h3>
                                        <p className="text-2xl" >{desc}</p>
                                        <span className="text-2xl mt-auto">Quantity: {quantity}</span>
                                    </div>    
                                    <figure>
                                        <img src={urlFor(imgRef).url()} className="object-contain h-48 w-full pt-4" />
                                    </figure>
                                </div>    
                            )
                        }) 
                        : <div className="font-bold pt-24 text-accenttwo"> Your cart is empty,<br />do more shopping!</div>
                    }
                </div>
            </div>
        )
}