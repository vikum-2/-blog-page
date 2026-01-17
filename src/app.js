document.addEventListener("DOMContentLoaded", () => {

  // slider 
  let slideIndex = 1;

  window.currentSlide = function(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  // auto slide 
  function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoSlide, 5000);
  }

  showSlide(slideIndex);
  autoSlide();

  // coupon 
  window.showCoupon = function(productName, productUrl) {
    document.getElementById('productName').textContent = productName;
    document.getElementById('productLink').href = productUrl;
    document.getElementById('couponModal').style.display = 'block';
  }

  window.closeCoupon = function() {
    document.getElementById('couponModal').style.display = 'none';
  }

  window.copyCoupon = function() {
    const couponInput = document.getElementById('couponCode');
    couponInput.select();
    couponInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Coupon code copied: ' + couponInput.value);
  }

  window.onclick = function(event) {
    const modal = document.getElementById('couponModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  // posts array 
  const posts = [
    {
      id: 1,
      title: "AI is Changing the World",
      excerpt: "Explore how AI is transforming tech, business, and daily life.",
      category: "AI",
      image: "images/ai.jfif"
    },
    {
      id: 2,
      title: "Top 10 Mobile Devices of 2026",
      excerpt: "A deep dive into the best smartphones and gadgets this year.",
      category: "Mobile",
      image: "images/mobile.jpg"
    },
    {
      id: 3,
      title: "Gaming Laptops Reviewed",
      excerpt: "We tested the latest gaming laptops to find the best performance.",
      category: "Gaming",
      image: "images/gaming.jpg"
    },
    {
      id: 4,
      title: "Building a Custom PC",
      excerpt: "Step-by-step guide for building your own high-performance PC.",
      category: "Hardware",
      image: "images/hardware.jpg"
    }
  ];

  //dom elements 
  const postsContainer = document.getElementById("postsContainer");

  //brand animation 
  const logoEl = document.querySelector(".logo");
  if (logoEl) {
    logoEl.style.fontSize = "4rem";
    logoEl.style.opacity = 0;
    logoEl.style.transition = "all 1.2s ease";
    setTimeout(() => {
      logoEl.style.opacity = 1;
      logoEl.style.transform = "scale(1.2)";
    }, 100);
    setTimeout(() => {
      logoEl.style.transform = "scale(1)";
    }, 1300);
  }

  //  posts 
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

  // main render
  renderPosts(posts);

  // category filtering 
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

  //search 
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

  // sidebar
  const sidebarEl = document.querySelector(".sidebar");
  if (sidebarEl) {
    const bestProductsHTML = `
      <h3>BEST PRODUCTS</h3>
      <div class="best-products">
        <button onclick="window.open('#','_blank')">Product 1</button>
        <button onclick="window.open('#','_blank')">Product 2</button>
        <button onclick="window.open('#','_blank')">Product 3</button>
        <button onclick="window.open('#','_blank')">Product 4</button>
      </div>
    `;
    sidebarEl.insertAdjacentHTML("beforeend", bestProductsHTML);
  }

  // footer
  const footerEl = document.querySelector("footer");
  if (footerEl) {
    footerEl.innerHTML += `
      <p>Email: itbnm-2313-0072@gmail.com | Contact: +94784730175</p>
    `;
  }

});
