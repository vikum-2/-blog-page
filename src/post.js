const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get("id"));

const post = posts.find(p => p.id === postId);

if (post) {
  document.getElementById("postTitle").innerText = post.title;
  document.getElementById("postCategory").innerText = post.category;
  document.getElementById("postContent").innerText = post.content;
}
