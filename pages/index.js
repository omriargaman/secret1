import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData:
    [{
      id:5,
      title:"סוכן רשע 5"
    },
    {
      id:11,
      title:"סוכן רשע 11"
    }
    ,
    {
      id:17,
      title:"סוכן רשע 17"
    }
  ]
  }};
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>רשימת סוכנים רשעים -(חלקית כי היא סודית)</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/agent/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}