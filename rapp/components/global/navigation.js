import { useSelector } from "react-redux"

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
    }
]

export default function Navigation() {

    const cart = useSelector((store) => store.cart.currentCart)

    return (
        <div className="flex items-center justify-center">
            <div className="inner-wrapper flex flex-row items-center justify-center py-12">
                {navItems.map((item) => {
                    return <div className="text-accentone px-4 font-medium">
                                <a href={item.slug}>{item.name}</a>
                            </div>
                })}
            </div>
        </div>
    )
}