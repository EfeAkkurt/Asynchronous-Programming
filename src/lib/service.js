import axios from 'axios';

async function getData(Number) {  
    const { data: userId } = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`);  
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`);

    return { userId, posts };
}


export default getData;
