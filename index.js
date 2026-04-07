const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
    }
]

const mainContentEl=document.querySelector("#main-content");
mainContentEl.addEventListener("dblclick", function(e){
    const postImg = e.target.closest(".post-image");
    if (!postImg) return;

    const index = postImg.dataset.index;
    toggleLike(index);
});

function renderPosts(){
    let postsHtml="";
    for (let i in posts){
        const post = posts[i];
        postsHtml+=`
        <div class="post">
                <div class="post-author">
                    <img class="avatar" src="${post.avatar}" alt="post author avatar">
                    <div class="author-info">
                        <h3 class="author-name">${post.name}</h3>
                        <h4 class="image-location">${post.location}</h4>
                    </div>
                </div>
                <img class="post-image" data-index="${i}" src="${post.post}" alt="a post image of painting by ${post.name}">
                <div class="post-action" >
                    <button class="action-btn" onclick="toggleLike(${i})"><img class="btn-like" src="${post.isLiked ? 'images/icon-heart-fill.png':'images/icon-heart.png'}" alt=""></button>
                    <button class="action-btn"><img class="btn-comment" src="images/icon-comment.png" alt=""></button>
                    <button class="action-btn"><img class="btn-dm" src="images/icon-dm.png" alt=""></button>
                </div>
                <h3 class="likes-counter">${post.likes} likes</h3>
                <p class="post-caption"><span class="author-username">${post.username}</span> ${post.comment}</p>   
            </div>
        `;
    }
    mainContentEl.innerHTML=postsHtml;
}
renderPosts();

function toggleLike(index){
    const post = posts[index];
    if (post.isLiked){
        post.likes--;
    }
    else{
        post.likes++;
    }
    post.isLiked=!post.isLiked;
    renderPosts();  
}

