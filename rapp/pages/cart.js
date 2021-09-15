import { useDispatch, useSelector} from 'react-redux'
import { urlFor } from "@lib/sanity";


export default function Cart(){

        const selectCartItems = useSelector((state) => state.cart.currentCart);

        return (
            <div className="">
                <div className="inner-wrapper flex flex-col justify-center items-center">    
                    {
                        Object.keys(selectCartItems).map((item, itemInd) => {
                            const {quantity, name, desc, imgRef} = selectCartItems[item];

                            return (
                                <div className="flex min-w-lg w-3/4 glass justify-between p-8 my-8" id={item} key={itemInd}>
                                    <div >
                                        <h3>{name}</h3>
                                        <p>{desc}</p>
                                        <span>{quantity}</span>
                                    </div>    
                                    <figure>
                                        <img src={urlFor(imgRef).url()} className="object-contain h-48 w-full pt-4" />
                                    </figure>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        )
}