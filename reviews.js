
const rSection = document.getElementById("Reviews")
let w;
async function getReviews(file) {
    let x = await fetch(file);
    w = await x.json();
    console.log(w.Review[0].fullName)
    reviewsDisplay(rSection, w)
}
getReviews("reviews.json")

//Reviews displayer
function reviewsDisplay(rSection, w){
    document.getElementById("reviewsCount").innerText=`All Reviews (${w.Review.length})`
    for(let i = 0; i<w.Review.length; i++){
        const reviewDiv = document.createElement("div")
        reviewDiv.className=("bg-white rounded-lg flex gap-4 border-gray-300 border-1 p-4 mt-4")
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
                    
                </div>`
        rSection.appendChild(reviewDiv);
    }
    //Like button changer 
    document.querySelectorAll(".helpfulBtn").forEach(element => {
        element.addEventListener('click' , helpful);
    })
}


function helpful(event){
    console.log(event.currentTarget);
    event.currentTarget.innerHTML='<i class="fa-solid fa-thumbs-up"></i><span>Helpful</span>'
}

//Modal for replying
const modal = document.getElementById("myModal");
const replyBtn = document.getElementsByClassName("replyBtn");
const closeBtn = document.getElementById("closeBtn");

replyBtn.onclick = function(){
    modal.style.display = "block";
}
closeBtn.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
