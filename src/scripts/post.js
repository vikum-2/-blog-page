// posts data
const posts = [
  {
    id: 1,
    title: "AI Revolution 2026",
    category: "AI",
    excerpt: "How AI is changing the world.",
    content: "Artificial Intelligence is transforming industries, automating workflows, and redefining how humans interact with technology.",
    image: "../image/ai-revolution-2026.jpg",
    date: "January 5, 2026",
    coupon: "TECHNEST5"
  },
  {
    id: 2,
    title: "Top Mobile Devices",
    category: "Mobile",
    excerpt: "Best phones for tech lovers.",
    content: "From foldables to AI-powered cameras, mobile devices in 2026 focus on performance, battery life, and smart features.",
    image: "../image/top-mobile-devices.jpg",
    date: "January 8, 2026",
    coupon: "TECHNEST5"
  },
  {
    id: 3,
    title: "Gaming Trends 2026",
    category: "Gaming",
    excerpt: "What gamers expect in 2026.",
    content: "Cloud gaming, ray tracing, and AI NPCs are reshaping the gaming experience for both casual and competitive players.",
    image: "../image/gaming-trend-2026.jpg",
    date: "January 12, 2026",
    coupon: "TECHNEST5"
  },
  {
    id: 4,
    title: "Hardware Upgrades That Matter",
    category: "Hardware",
    excerpt: "Boost your PC performance.",
    content: "Upgrading SSDs, RAM, and GPUs can dramatically improve system performance for work and gaming.",
    image: "../image/hardware-upgrades-that-matter.jpg",
    date: "January 15, 2026",
    coupon: "TECHNEST5"
  },
  {
    id: 5,
    title: "Future of Cybersecurity",
    category: "AI",
    excerpt: "Protecting data in a digital world.",
    content: "AI-driven security systems are becoming essential to detect threats and protect sensitive data.",
    image: "../image/ai-in-cybersecurity.jpg",
    date: "January 18, 2026",
    coupon: "TECHNEST5"
  }
];

// render posts function 
const postsContainer = document.getElementById("postsContainer");

function renderPosts(list) {
  if (!postsContainer) return; 

  postsContainer.innerHTML = "";
  list.forEach(post => {
    postsContainer.innerHTML += `
      <a href="post.html?id=${post.id}" class="post-card-link">
        <div class="post-card">
          ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ""}
          <div class="category">${post.category}</div>
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
        </div>
      </a>
    `;
  });
}


renderPosts(posts);

const categoryItems = document.querySelectorAll("#categoryList li");

categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    categoryItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const cat = item.dataset.category;
    if (cat === "all") renderPosts(posts);
    else renderPosts(posts.filter(p => p.category === cat));
  });
});

// search 
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = posts.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query)
    );
    renderPosts(filtered);
  });
}

// single post page
const postTitleEl = document.getElementById("postTitle");

if (postTitleEl) {
  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get("id"));
  const post = posts.find(p => p.id === postId);

  if (post) {
    document.getElementById("postTitle").innerText = post.title;
    document.getElementById("postCategory").innerText = post.category;
    document.getElementById("postContent").innerText = post.content;

    const postDateEl = document.getElementById("postDate");
    if (postDateEl) postDateEl.innerText = post.date;

    const postImageEl = document.getElementById("postImage");
    if (postImageEl && post.image) {
      postImageEl.src = post.image;
      postImageEl.style.display = "block";
    }

    document.getElementById("copyCouponBtn").addEventListener("click", () => {
      const couponInput = document.getElementById("couponCode");
      couponInput.select();
      couponInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Coupon code copied: " + couponInput.value);
    });
  } else {
    document.getElementById("postTitle").innerText = "Post not found";
    document.getElementById("postCategory").innerText = "";
    document.getElementById("postContent").innerText = "";
  }
}
