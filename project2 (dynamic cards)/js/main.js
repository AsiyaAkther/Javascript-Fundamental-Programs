// Dummy data
// const posts = [
//     {
//         title: "This is title 1",
//         desc: "This is description 1"
//     },
//     {
//         title: "This is title 2",
//         desc: "This is description 2"
//     },
//     {
//         title: "This is title 3",
//         desc: "This is description 3"
//     },
//     {
//         title: "This is title 4",
//         desc: "This is description 4"
//     },
//     {
//         title: "This is title 5",
//         desc: "This is description 5"
//     },
//     {
//         title: "This is title 6",
//         desc: "This is description 6"
//     },
//     {
//         title: "This is title 7",
//         desc: "This is description 7"
//     },
//     {
//         title: "This is title 8",
//         desc: "This is description 8"
//     },
// ];

// fetch data

const fetchData = async (config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(err){
        throw Error("Data is not fetched");
    }
};

// Selection
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-desc">${post.desc}</p>
        `;
        postsElement.appendChild(postElement);
    });
};
loadAllData();