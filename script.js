function getUser(){
    return axios.get("https://api.github.com/users")
}

function renderUser(users){
    document.querySelector("tbody").innerHTML = users.map(function(user){
        const tr=`
        <tr>
        <td>${user.id}</td>
        <td>
            <img src="${user.avatar_url}" alt="${user.login}">
        </td>
        <td>${user.login}</td>
        <td>${user.url}</td>
        <td>${user.repos_url}</td>
    </tr>
    `
    return tr
    }).join("")
}

window.addEventListener("DOMContentLoaded",function(e){
    getUser().then(function(res){
        renderUser(res.data)
    })
})