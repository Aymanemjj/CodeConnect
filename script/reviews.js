
const rSection = document.getElementById("Reviews")
let w;
async function getReviews(file) {
    let x = await fetch(file);
    w = await x.json();
    console.log(w.Review[0].fullName)
    reviewsDisplay(rSection, w)
}
getReviews("json/reviews.json")

//Reviews displayer
function reviewsDisplay(rSection, w){
    document.getElementById("reviewsCount").innerText=`All Reviews (${w.Review.length})`
    for(let i = 0; i<w.Review.length; i++){
        const reviewDiv = document.createElement("div")
        reviewDiv.className=("bg-white rounded-lg flex gap-4 border-gray-300 border-1 p-4 mt-4")
        reviewDiv.id=`${i}`
        reviewDiv.innerHTML = `
                <div class="rounded-full size-12 bg-cover bg-[url(images/pablo.webp)]"></div>
                <div class="flex-row">
                    <h4>${w.Review[i].fullName}</h4>
                    <h5><i class="fa-solid fa-star" style="color: #FFD43B;"></i><span>${w.Review[i].rating}</span> <span class="text-gray-400 text-sm">${w.Review[i].date}</span></h5>
                    <small class="bg-gray-300 text-black rounded-md p-1 mt-4">Brand Design</small>
                    <p class="w-128 text-gray-600 text-sm mt-4 mb-2">${w.Review[i].review}</p>
                    <div class="h-0.5 bg-gray-300 mb-2"></div>
                    <div class="flex gap-4">
                    <button type="button"   class=" helpfulBtn text-sm text-gray-600 hover:bg-gray-200 p-1 rounded-sm cursor-pointer"><i class="fa-regular fa-thumbs-up"></i><span>Helpful</span></button>
                    <button type="button"   class=" replyBtn text-sm text-gray-600 hover:bg-gray-200 p-1 rounded-sm cursor-pointer"><i class="fa-solid fa-reply"></i><span>Reply</span></button>
                    </div>
                    <div id="replySection${i}" class=" hidden bg-sky-100 rounded-md w-full size-fill flex  m-2 gap-2 pl-0">
                        <div class="bg-sky-500 h-fill rounded-tl-full rounded-bl-full w-1"></div>
                        <p id="replyText${i}" class="text-wrap text-left text-xs text-gray-500 my-2"></p>
                    </div>
                </div>`
        rSection.appendChild(reviewDiv);
    }
    //Like button changer 
    document.querySelectorAll(".helpfulBtn").forEach(element => {
        element.addEventListener('click' , helpful);
    })
    document.querySelectorAll(".replyBtn").forEach(element=> {
        element.addEventListener("click" , openModal)
    })
}

//Function for Liking and unLiking
function helpful(event){
    if(event.currentTarget.querySelector("i").className=="fa-regular fa-thumbs-up"){
    event.currentTarget.querySelector("i").className="fa-solid fa-thumbs-up"
    }else{
    event.currentTarget.querySelector("i").className="fa-regular fa-thumbs-up"
    }
}

//Modal for replying
const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");
const replyBtn = document.getElementById("replyBtn");
let i;
function openModal(event){
    console.log("enter modal");
    let temp = event.currentTarget.parentElement.parentElement.parentElement

    document.getElementById("Rname").innerText=`${w.Review[temp.id].fullName}`
    document.getElementById("Rrating").innerText=`${w.Review[temp.id].rating}`
    document.getElementById("Review").innerText=`${w.Review[temp.id].review}`
    modal.classList.replace("hidden","block");
    document.getElementById("Rinput").focus()
    i = temp.id
    
}
closeBtn.onclick = function(){
    document.getElementById("Rinput").value="";
    modal.classList.replace("block","hidden")
}

replyBtn.onclick = function(){
    let replyValue = document.getElementById("Rinput").value
    document.getElementById(`replyText${i}`).innerText=replyValue;
    document.getElementById(`replySection${i}`).classList.replace("hidden","block")
    document.getElementById("Rinput").value="";
    modal.classList.replace("block","hidden") 
}
document.getElementById("Rinput").addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.key == "Enter"){
        document.getElementById("replyBtn").click()
    }
})