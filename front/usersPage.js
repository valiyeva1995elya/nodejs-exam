const usersContainer = document.querySelector(".users-list");
const follow = document.querySelector(".fl")
const unfollow = document.querySelector(".unfl")


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

const drawCars = async () => {
    const users = await fetchData("/accounts");



    for (const user of users) {
        usersContainer.innerHTML += `
            <div class="user_item">
            <tr>
            
            <td>${user.email}</td>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.age}</td>
            <td> <button class="btn-main fl">Follow</button><br>
            <button class="btn-main unfl">Unfollow</button></td>
            </tr>
                
        
            </div>
               
        `

    }
};
drawCars()

