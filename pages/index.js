import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fs from 'fs';
import Link from 'next/link';

export default function Home({ slugs }) {
    return (
        <div className={styles.container}>
            <Link href="/staticRender">Go to Render page</Link>
            {slugs.map((slug) => {
                return (
                    <div key={slug}>
                        <Link href={'/' + slug}>
                            <b>
                                <a>{slug}</a>
                            </b>
                        </Link>
                    </div>
                );
            })}
            <h1>hellosss</h1>
        </div>
    );
}
export const getStaticProps = async () => {
    const files = fs.readdirSync('posts');
    return {
        props: {
            slugs: files.map((filename) => filename.replace('.md', ''))
        }
    };
};
