import { useSelector } from "react-redux"
import { selectCartCount } from '@store/cart/cartSlice'
import Link from 'next/link'

const navItems = [
    {
        name: 'Home',
        slug: '/'
    },
    {
        name: 'About Me',
        slug: '/about-me'
    },
    {
        name:'Projects',
        slug: '/projects'
    },
    {
        name: 'Get in Touch',
        slug: '/contact'
    },

]

export default function Navigation() {

    const cartCount = useSelector(selectCartCount)

    return (
        <div className="flex items-center justify-center">
            <div className="inner-wrapper flex flex-row flex-wrap items-center justify-center py-12 highlight-underline">
                {navItems.map((item, itemInd) => {
                    return <div className="text-white py-2 t:py-0 px-4 text-lg font-display" key={itemInd}>
                                <Link href={item.slug}>
                                    <a >{item.name}</a>
                                </Link>
                            </div>
                })}
                <Link href="/cart">
                    <a className="relative">
                        <i className="fas fa-shopping-cart text-white text-2xl w-8 h-8"></i>
                        { cartCount > 0  && <div className="absolute bottom-0 -right-1.5 text-white bg-white bg-opacity-40 rounded-full text-center bg-highlightone flex justify-center text-sm items-center h-4 w-4">{cartCount}</div>  }
                    </a>
                </Link>
                
            </div>
            <div className="highlight-underline"></div>
        </div>
    )
}