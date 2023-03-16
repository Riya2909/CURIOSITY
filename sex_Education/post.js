let form=document.getElementById("form");
let input=document.getElementById("inputComm");
let msg=document.getElementById("msg");
let posts=document.getElementById("posts");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation=()=>{
    if(input.value==""){
        console.log("failure");
    }
    else{
        msg.innerHTML="";
        console.log("success");
        acceptData();
    }
};

let data={};
let acceptData=()=> {
    data["text"]=input.value;
    console.log(data);
    createPost();
};

let createPost= ()=>{
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
        <button class="like_btn" onclick="like()">
            <a href="#"><span class="material-symbols-outlined" id="like"> favorite</span></a>
            <span id="count">0</span> Like
        </button>
    </div>
    `
};
function like(){
    const likeBtn = document.querySelector(".like_btn");
    let likeIcon= document.querySelector("#like"); 
    let count = document.querySelector("#count");
    let clicked = false;

    likeBtn.addEventListener("click", () => {
    if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
    }else{
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
    }
    });
    }