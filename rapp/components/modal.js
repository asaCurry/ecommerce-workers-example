import { useSelector, useDispatch } from "react-redux";
import { urlFor, PortableText } from "@lib/sanity";
import { modalHide } from '@store/modal/modalSlice'
import { addItem, selectCartCount } from '@store/cart/cartSlice'


export default function Modal() {

    const product = useSelector((state) => state.modal.product)
    const { title } = product;
    const prodImg = product.defaultProductVariant.images[0];
    const dispatch = useDispatch()

    const handleOutSideClick = (e) => {
        e.target.classList.contains('outer-modal') && dispatch(modalHide())
    }

    // handle global hide    
    return (
        <>
            <div onClick={handleOutSideClick} className="modal outer-modal fixed inset-0 flex justify-center items-top">
                <div className="glass opaque w-4/6 mt-24 mb-auto p-12 bg-white rounded-lg my-auto">
                    <div onClick={() => dispatch(modalHide())} className=" text-24 absolute top-8 right-8 cursor-pointer">X</div>
                    <div className="flex flex-col justify-center items-top h-full">
                        <div className="summary py-4">
                            <h2 className="text-center font-bold mb-4">{title}</h2>
                            <PortableText blocks={product.body.en} />
                            <figure>
                                <img src={urlFor(prodImg).url()} className="object-contain h-56 w-full pt-4" />
                            </figure>
                        </div>
                        <button onClick={ () => dispatch(addItem(product)) } className="py-4 px-6 mx-auto mt-4 bg-accentone rounded-xl text-white w-56" >Add to Cart</button>
                    </div>
                </div>
            </div >
        </>

    )
}