import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";

import { groq } from "next-sanity";

import styles from '@styles/index.module.scss';

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
        <title>View All</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        {posts &&
          posts.map((post,postInd) => (
            <article className={styles.glass} key={postInd}>
              <h3 className="text-lg"> {post.title} </h3>
              <p className="mt-3">{post.excerpt}</p>
            </article>
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
    revalidate: 10,
  };
}
