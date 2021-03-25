import React from 'react';
import fs from 'fs';
import path from 'path';

const Post = ({ contents }) => {
    return (
        <div>
            hello
            <pre>{contents}</pre>
        </div>
    );
};
export const getStaticPaths = async () => {
    const files = fs.readdirSync('Posts');
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    console.log('paths', paths);
    return {
        paths,
        fallback: false
    };
};
export const getStaticProps = async ({ params: { slug } }) => {
    const contents = fs.readFileSync(path.join('posts', slug + '.md')).toString();

    return {
        props: {
            contents
        }
    };
};
export default Post;
