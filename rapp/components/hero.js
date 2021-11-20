import { useRouter } from 'next/router'

import Navigation from '@global/navigation'

export default function Hero(){
    const router = useRouter();

    return (
        <section className="hero-outer-wrapper min-h-96">
            <Navigation />
            <div className="inner-wrapper">
                {router.pathname == '/' &&
                    <div className="w-full t:w-1/2 text-white text-lg py-16">
                        <p className="mb-4" ><span className="font-bold">Hello and thank you</span> for taking a look at my site! This site is built to be part portfolio, part living sandbox to try new techniques, APIs, and technologies in a live environment. It is primarially built with React, Next.js, Sanity.io, and Tailwind.css, but may have a variety of other techonlogies sprinkled throughout.</p>
                        <p>In the top navigation you can see examples of my work, learn a little about my background, or send me a message.</p>
                    </div>                     
                }
   
            </div>
        </section>
    )
}