import fetchTweetAst from '../lib/fetchTweetAst';
import components from '../components/twitter-layout/components';
import Page from '../components/landing/page';
import A from '../components/landing/anchor';
import RandomTweet from '../components/landing/random-tweet';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../components/landing/random-tweet.module.css';

const cn = arr => arr.filter(Boolean).join(' ');
const P = components.p;
const Code = components.code;
const Ul = components.ul;
const Li = components.li;
const H2 = components.h2;
const Hr = components.hr;

export async function getStaticProps() {
  const tweet = await fetchTweetAst('1249937011068129280');

  return { props: { tweet } };
}

export default function Index({ tweet }) {
  const router = useRouter();
  const ref = useRef('');
  const handleClick = e => {
    e.preventDefault();
    router.push(`/g/${ref.current.value}`);
  };
  return (
    <Page title="Gif Fun" description="Gif Fun">
      <main>
        <P>
          <input type="text" ref={ref} className={styles.input} />
          <button className={styles.button} type="submit" onClick={handleClick}>
            find gifs
          </button>
        </P>
      </main>
    </Page>
  );
}
