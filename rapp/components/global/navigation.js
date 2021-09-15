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
        slug: 'about-me'
    },
    {
        name: 'Get in Touch',
        slug: 'contact'
    },
    {
        name: 'Cart',
        slug: 'cart'
    }
]

export default function Navigation() {

    const cartCount = useSelector(selectCartCount)

    return (
        <div className="flex items-center justify-center">
            <div className="inner-wrapper flex flex-row items-center justify-center py-12">
                {navItems.map((item, itemInd) => {
                    return <div className="text-accentone px-4 font-medium" key={itemInd}>
                                <Link href={item.slug}>
                                    <a >{item.name}</a>
                                </Link>
                            </div>
                })}
                { cartCount > 0 && <div>{ cartCount} </div> }
                
            </div>
        </div>
    )
}