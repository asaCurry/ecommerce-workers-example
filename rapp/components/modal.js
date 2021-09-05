import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { urlFor, PortableText } from "@lib/sanity";
import { modalHide } from '@store/modal/modalSlice'



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
                    <div onClick={() => dispatch(modalHide())} className=" text-24 absolute top-8 right-8">X</div>
                    <div className="flex flex-col justify-center items-top h-full">
                        <div className="summary py-4">
                            <h2>{title}</h2>
                            <PortableText blocks={product.body.en} />
                            <figure>
                                <img src={urlFor(prodImg).url()} className="object-contain h-56 w-full pt-4" />
                            </figure>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div >
        </>

    )
}