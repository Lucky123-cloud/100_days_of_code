//using promise.all() for this request

async function fetchUSer() {
    try {
        let responses = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/1`),
            fetch(`https://jsonplaceholder.typicode.com/users/2`),
            fetch(`https://jsonplaceholder.typicode.com/users/3`)
        ])

        let data = await Promise.all(responses.map(res => {
            if(!res.ok) throw new Error("Something went wrong")
            return res.json()
        }))
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

fetchUSer();
