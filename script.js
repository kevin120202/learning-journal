const viewMore = document.querySelector(".view-more")
const main = document.querySelector("main")

viewMore.addEventListener("click", () => {
    main.innerHTML += `        
<article>
    <img src="images/blog-image-03.png" alt="Article image">
    <header class="article-header">
        <p class="article-date">July 23, 2024</p>
        <h2 class="blog-name">Blog four</h2>
        <p class="blog-subheader">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
            After several months of
            learning in the Frontend Developer Career Path.</p>
    </header>
</article>
<article>
    <img src="images/blog-image-01.png" alt="Article image">
    <header class="article-header">
        <p class="article-date">July 23, 2024</p>
        <h2 class="blog-name">Blog five</h2>
        <p class="blog-subheader">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
            After several months of
            learning in the Frontend Developer Career Path.</p>
    </header>
</article>
<article>
    <img src="images/blog-image-02.png" alt="Article image">
    <header class="article-header">
        <p class="article-date">July 23, 2024</p>
        <h2 class="blog-name">Blog six</h2>
        <p class="blog-subheader">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
            After several months of
            learning in the Frontend Developer Career Path.</p>
    </header>
</article>`

    viewMore.textContent = ""
})