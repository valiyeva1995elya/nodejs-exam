const usersContainer = document.querySelector(".users-list");
const follow = document.querySelector(".fl")
const unfollow = document.querySelector(".unfl")

let user = JSON.parse(localStorage.getItem('user'))
if(user == null){
    window.location.href = "./index.html"

}

const BASE_URL = "http://localhost:3000";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};


// const postData = async (route, payload) => {
//     fetch(
//         BASE_URL + route,
//         {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             data: payload
//         },
//     )
//         .then(() => alert("OK"))
//         .catch(() => alert("Error sending request"))
// };

const drawUsers = async () => {
    const users = await fetchData("/accounts");



    for (const user of users) {
        usersContainer.innerHTML += `
            <div class="user_item">
                <tr>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td> <button onclick="followAd('${user._id}')" class="btn-main fl">Follow</button><br>
                    <button onclick="unfollow()" class="btn-main unfl">Unfollow</button></td>
                </tr>
            </div>
               
        `

    }
};
drawUsers()
function followAd(id) {
    let userFoll = JSON.parse(localStorage.getItem('user'))
    userFoll = userFoll.follows
    
    if(userFoll != []){
        user.follow.push(id)
    } 
    console.log(id);
    console.log(userFoll);
    // for(const f of userFoll){
    //      if(f == []){
    //         userFoll.push(id)
    //     }
    // }console.log(userFoll);
    localStorage.setItem("user", JSON.stringify(user))
    
    // if(user.follow )
    // user.follow.push(id)
    // const newTitle = document.querySelector("#edTitle").value
    // const newPost = document.querySelector("#edPost").value

    // const payload = {
    //     title: newTitle,
    //     post: newPost,

    // }
    // fetch(BASE_URL + "/posts/" + id, {
    //     method: "PUT",
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     },
    //     body: JSON.stringify(payload)
    // }) .then(() => drawMyPosts())
    //     .then(() => alert("Ok"))
    //     .catch(() => alert("err"))
    // bl2Post.style.display = "none";
   
}

