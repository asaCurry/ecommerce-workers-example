import { urlFor } from "@lib/sanity";
import { useDispatch } from 'react-redux'
import { modalShow, setModalProduct } from '../store/features/modal/modalSlice'

const shortenBody = (str) => {
    if (str.length > 80) {
        let shortString = str.slice(0, 80);
        return `${shortString}...`;
    } else {
        return str;
    }
}

export default function Product({ product, productInd }) {

    const { title } = product;
    const prodImg = product.defaultProductVariant.images[0];
    const prodShortBody = shortenBody(product.body.en[0].children[0].text);

    const dispatch = useDispatch()

    const handleProductClick = () => {
        dispatch(setModalProduct(product))
        dispatch(modalShow())
    }

    return (
        <>
            <div className="product glass col-span-1 p-8 rounded-lg">
                <article className="py-4" key={productInd} onClick={handleProductClick}>
                    <h3 className="text-center text-accentone font-bold text-lg pb-4"> {title} </h3>
                    <p>{prodShortBody}</p>
                    <figure>
                        <img src={urlFor(prodImg).url()} className="object-contain h-56 w-full pt-4" />
                    </figure>
                </article>
            </div>
        </>


    )
}