// fetch("authors.json")
//     .then(function (response) {
//         return response.json();
//     })

//     .then(function (authors) {
//         let placeholder = document.querySelector("#data-output1");
//         let out = "";
//         for (let author of authors) {
//             out += `
//         <tr>
//             <td>${author.id}</td>
//             <td><img src="${author.avatar_url}" /></td>
//             <td>${author.name}</td>
//             <td>${author.role}</td>
//             <td>${author.place}</td>
//         </tr>
//     `;
//         }
//         placeholder.innerHTML = out;

//     })

// fetch("posts.json")
//     .then(function (response) {
//         return response.json();
//     })

//     .then(function (posts) {
//         let placeholder = document.querySelector("#data-output2");
//         let out = "";
//         for (let post of posts) {
//             out += `
//         <tr>
//             <td>${post.id}</td>
//             <td>${post.author_id}</td>
//             <td><img src="${post.image_url}" /></td>
//             <td>${post.title}</td>
//             <td>${post.body}</td>
//             <td>${post.created_at}</td>
//         </tr>
//     `;
//         }
//         placeholder.innerHTML = out;

//     })



// seccond attempted

fetch("posts.json")
    .then(response => response.json())
    .then(posts => {
        return fetch("authors.json")
            .then(response => response.json())
            .then(authors => {
                let placeholder = document.querySelector("#data-output");
                let out = "";
                for (let post of posts) {
                    let author = authors.find(a => a.id === post.author_id);
                    let date = new Date(post.created_at);
                    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    let dayName = days[date.getUTCDay()];
                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    let monthName = months[date.getUTCMonth()];
                    let dateNum = date.getUTCDate();
                    let year = date.getUTCFullYear();
                    let hours = date.getUTCHours();
                    let minutes = date.getUTCMinutes();
                    let time = hours + ":" + minutes;

                    out += `
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            
                            <div class="col-md-12">
                                <div class="card-body">
                                <img src="${author.avatar_url}"  id="display" class="card-img" alt="${author.name}"> 
                                <h5 class="card-title">${author.name}</h5>
                                <p class="card-text">posted on ${dayName}, ${monthName} ${dateNum}, ${year} at ${time}</p>
                                </div>
                                <hr class="hr" >
                                <div class="row">
                                <div id="blogimg" class="col-4 card-body">
                                    <img src="${post.image_url}">
                                </div>
                                <div id="blogdet" class="col-8 card-body">
                                    <h5 class="card-title2">${post.title}</h5><br>
                                    <p class="card-text">${post.body}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }
                placeholder.innerHTML = out;
            });
    });
