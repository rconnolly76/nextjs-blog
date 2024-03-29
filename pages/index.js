import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
// import { getSortedPostsData } from '../lib/chposts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData()
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  console.log('entering the Home function')

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Something to do when I really want to be making ramen!</p>
        <p>
          (This is a sample website - for now static posts, but coming soon off some fancy API somewhere.  Maybe if Tom gets off his ass we can do some FE stuff too. Check this to learn: {' '}
          <a href="https://nextjs.org/learn"> Next.js</a>.)
        </p>
      </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}