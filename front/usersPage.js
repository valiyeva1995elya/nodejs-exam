const usersContainer = document.querySelector(".users-list");
const follow = document.querySelector(".fl")
const unfollow = document.querySelector(".unfl")

let user = JSON.parse(localStorage.getItem('user'))
if(user == null){
    window.location.href = "./index.html"

}
function logOut() {
    localStorage.removeItem("user")
    document.location.href = "./index.html"
}

const BASE_URL = "http://localhost:3000";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};


const postData = async (route, payload) => {
    fetch(
        BASE_URL + route,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: payload
        },
    )
    .then(() => console.log("parsed"))
    .catch(() => console.log("Error sending request"));
};

const drawUsers = async () => {
    usersContainer.innerHTML = ""
    let user = JSON.parse(localStorage.getItem('user'))
    const users = await fetchData("/accounts");
    const userFollowed = user.follows
    let usersAll = users.filter(item => item._id !==  user._id)
    console.log(usersAll);
    console.log(userFollowed);
    console.log(user._id);

    usersAll.forEach(acc => {
   
        if(userFollowed.includes(acc._id)){
            usersContainer.innerHTML += `
            <div class="user_item">
                <tr>
                    <td>${acc.email}</td>
                    <td>${acc.name}</td>
                    <td>${acc.surname}</td>
                    <td>${acc.age}</td>
                    <td><button onclick="unFollowAuthor('${acc._id}')" class="btn-main unfl">Unfollow</button></td>
                </tr>
            </div>
            `
        }else{
            usersContainer.innerHTML += `
            <div class="user_item">
                <tr>
                    <td>${acc.email}</td>
                    <td>${acc.name}</td>
                    <td>${acc.surname}</td>
                    <td>${acc.age}</td>
                    <td> <button onclick="followAd('${acc._id}')" class="btn-main fl">Follow</button><br></td>
                </tr>
            </div>
            `
        }

        
    })
};
const followAd = (followedUserId) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const payload = {
        userId: userId._id,
        followedUserId: followedUserId
    }
    const jsonPayload = JSON.stringify(payload);
    postData("/accounts/follow", jsonPayload);
    userId.follows.push(followedUserId)
    localStorage.setItem("user", JSON.stringify(userId))
    drawUsers();
}

const unFollowAuthor = (followedUserId) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    
    const payload = {
        userId: userId._id,
        followedUserId: followedUserId
    }
    const jsonPayload = JSON.stringify(payload);
    postData("/accounts/unfollow", jsonPayload);
    userId.follows = userId.follows.filter((id) => id != followedUserId)
    console.log(userId);
    localStorage.setItem("user", JSON.stringify(userId))
    drawUsers();
}
drawUsers()