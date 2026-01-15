function renderPosts(list) {
  postsContainer.innerHTML = "";
  list.forEach(post => {
    postsContainer.innerHTML += `
      <a href="post.html?id=${post.id}" style="text-decoration:none;color:inherit">
        <div class="post-card">
          <div class="category">${post.category}</div>
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
        </div>
      </a>
    `;
  });
}
