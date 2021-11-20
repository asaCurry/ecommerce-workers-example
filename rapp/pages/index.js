// dependencies
import Head from "next/head";
import { useRouter } from "next/router";
import client, {
    getClient,
    usePreviewSubscription,
} from "@lib/sanity";

import { groq } from "next-sanity";

// redux 
import { useSelector } from 'react-redux'

//components
import Product from '../components/product';

export default function Post(props) {
    const { postdata, preview } = props;

    const router = useRouter();

    const { data: posts } = usePreviewSubscription(query, {
        initialData: postdata,
        enabled: preview || router.query.preview !== undefined,
    });
    return (
        <>
            <Head>
                <title>Asa Curry</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className="inner-wrapper flex flex-col items-center justify-center pt-16 pb-8">
                <h1 className="highlight-underline text-center text-slate">Example Products</h1>
                <p className="pt-8 max-w-2xl"><span className="font-bold">TODO:</span> Swap dummy data for somethign with better imagers, increment and decrement on product modal, add product ratings, add "remove item" in cart modal. Order-save functionality using durable objects. Authentication using Workers and AuthO.</p>
            </div>
            <div className="inner-wrapper grid grid-cols-1 t:grid-cols-3 gap-6 auto-rows-min mt-12">
                {posts &&
                    posts.map((post, postInd) => (
                        <Product product={post} productInd={postInd} key={postInd} />
                    ))}
            </div>
        </>
    );
}

const query = groq`*[_type == "product"]`;

export async function getStaticProps({ params, preview = false }) {
    const post = await getClient(preview).fetch(query);

    return {
        props: {
            postdata: post,
            preview,
        },
        revalidate: 10
    };
}
