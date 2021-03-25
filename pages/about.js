export default function about({ todos }) {
    var count = 0;
    const handleClick = (e) => {
        console.log('Free pizza!');
        count++;
        console.log(e);
        document.getElementById('demo').innerHTML = 'You clicked the button, I am new paragraph.' + count;
    };
    return (
        <div>
            <h1>hello word</h1>
            <h2 id="demo">heloo ds</h2>
            {console.log(todos[0].title)}
            <ol>
                <li>{todos[0].title}</li>
                <li>{todos[1].title}</li>

                <li>{todos[2].title}</li>
                <li>{todos[3].title}</li>
                <li>{todos[4].title}</li>
                <li>{todos[5].title}</li>
                <button onClick={handleClick}>Add</button>
            </ol>
        </div>
    );
}

// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await res.json();
//     return {
//         props: {
//             todos
//         }
//     };
// }

about.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    const todos = json;
    console.log('helllld');
    return {
        todos: todos
    };
};
