fetch("authors.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (authors) {
        let placeholder = document.querySelector("#data-output1");
        let out = "";
        for (let author of authors) {
            out += `
        <tr>
            <td>${author.id}</td>
            <td><img src="${author.avatar_url}" /></td>
            <td>${author.name}</td>
            <td>${author.role}</td>
            <td>${author.place}</td>
        </tr>
    `;
        }
        placeholder.innerHTML = out;

    })

fetch("posts.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (posts) {
        let placeholder = document.querySelector("#data-output2");
        let out = "";
        for (let post of posts) {
            out += `
        <tr>
            <td>${post.id}</td>
            <td>${post.author_id}</td>
            <td><img src="${post.image_url}" /></td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td>${post.created_at}</td>
        </tr>
    `;
        }
        placeholder.innerHTML = out;

    })