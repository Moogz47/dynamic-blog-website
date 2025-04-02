document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts-container");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No posts available.</p>";
    } else {
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h2>${post.title || "Untitled Post"}</h2>
                <p>${post.content ? post.content.substring(0, 50) + "..." : "No content available"}</p>
                <a href="post.html?id=${post.id}">Read more...</a>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});
