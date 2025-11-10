
const rSection = document.getElementById("Reviews")
let w;
async function getReviews(file) {
    let x = await fetch(file);
    w = await x.json();
    console.log(w.Review[0].fullName)
    reviewsDisplay(rSection, w)
}
getReviews("reviews.json")


function reviewsDisplay(rSection, w){
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
                    <h5 class="text-sm text-gray-600"><i class="fa-regular fa-thumbs-up"></i><span>Helpful</span></h5>
                </div>`
         rSection.appendChild(reviewDiv);
    }
}