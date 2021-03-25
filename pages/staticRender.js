const staticRender = ({ currentTime }) => {
    return (
        <div>
            <h1>hello</h1>
            <h1>current time{currentTime}</h1>
            <h1>{Math.floor(currentTime / 1000)}</h1>
        </div>
    );
};

export async function getStaticProps() {
    console.log('getStaticProps');
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    const todos = json;
    console.log(todos);
    //     const currentTime = Date.now();
    //     console.log(currentTime);
    var d = new Date();
    const currentTime = d.toString();
    console.log('date in console');
    console.log(currentTime);
    //      const currentTime = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

    //     const currentTime = timeformat.json();

    return {
        props: {
            currentTime
        },
        revalidate: 10
    };
}

export default staticRender;
