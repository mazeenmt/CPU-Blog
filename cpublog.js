var memberName;
var memberTitle;
var password;
//Login
function login(){
    memberName = document.getElementById("login-name").value
    memberTitle = document.getElementById("login-title").value
    password = document.getElementById("login-password").value
    if (password === "cpu" && memberName && memberTitle){
        document.getElementById("login-page").style.display = 'none'
        document.getElementById("main-page").style.display = 'flex'
    }else{
        let button = document.getElementById("login-button")
        button.style.border = '2px solid #f00'
        button.style.color = '#f00'
        console.log("hey")
    }

}

//Write a post
function post(){
    let posts = document.querySelector(".posts")
    let addPost = document.getElementById("add-post")
    let content = addPost.value
    if (content === "") return
    addPost.value = ""  
    let otherPost = document.getElementById("hidden-post")
    let newPost = otherPost.cloneNode(true)
    newPost.style.display = 'block'
    newPost.querySelector('.member-name').innerHTML = memberName;
    newPost.querySelector('.member-title').innerHTML = memberTitle;
    newPost.querySelector('.post-content').innerHTML = content;
    posts.insertBefore(newPost, otherPost);
}

//Interactions  
document.querySelector('.posts').addEventListener('click', function(event) {
    if (event.target.closest('.comment-button')) {
        const postElement = event.target.closest('.post');
        const commentOut = postElement.querySelector('.comments');
        commentOut.querySelector('.post-comment-out').focus();
    }
    if (event.target.closest('.like-button')) {
        const clickedButton = event.target;
        const postElement = event.target.closest('.post')
        let nbLikes = postElement.querySelector('.nb-likes')
        if (clickedButton.textContent.includes('Liked')) {
            clickedButton.innerHTML = '<img src="img/like.png" alt="Like">Like';
            nbLikes.textContent = parseInt(nbLikes.textContent) - 1
        } else {
            clickedButton.innerHTML = '<img src="img/liked.png" alt="Liked">Liked';
            nbLikes.textContent = parseInt(nbLikes.textContent) + 1
        }
    }
});

//Add Comment
document.querySelector('.posts').addEventListener('keydown', function(event) {
    let post = event.target.closest('.post');
    let nbComments = post.querySelector('.nb-comments')
    if (event.target.closest('.post-comment-out')){
        const comments = event.target.closest('.comments').querySelector(".list");
        if(event.key == 'Enter'){
            let comment = event.target.value
            event.target.value = ""
            event.target.blur()
            let header = document.querySelector(".staff-member")
            let newComment = header.cloneNode(true)
            newComment.querySelector('.member-name').textContent = memberName;
            newComment.querySelector('.member-title').textContent = comment;
            newComment.classList.add("comment")
            comments.append(newComment)
            nbComments.textContent = parseInt(nbComments.textContent) + 1
        }
    }
})
