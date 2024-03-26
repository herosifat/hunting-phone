const loadPhone =async(searchText) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data = await res.json();
const phones =data.data
console.log(phones);
displayPhone(phones);
}
// display phone
const displayPhone= phones=>{
    // step 1 --- je id te kaj korbo ta khuje ber kora
    const phoneContainer =document.getElementById('phone-container');
    phoneContainer.textContent =''
    // display who i want
const shawallcontainer = document.getElementById('Shaw-all-container')
if(phones.length >12){
    shawallcontainer.classList.remove('hidden')
}
else{
    shawallcontainer.classList.add('hidden')
}
phones =phones.slice(0,12)

phones.forEach(phone=> {
  console.log(phone)  
//   step 2--- element creation
  const phoneCard =document.createElement('div');
  phoneCard.classList =`card bg-green-500 shadow-xl`;
//   step 3-- innetHtml set
  phoneCard.innerHTML =`
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
       <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
      </div>
        </div>
  `;
//   step 4 --child append
  phoneContainer.appendChild(phoneCard);
})
}

const evenHandler = () =>{
    
const searchField =document.getElementById('search-field')
const searchText =searchField.value;
console.log(searchText)
loadPhone(searchText);
}

// more
const evenHandler2 = (isShawAll) =>{
    loadingSpenner(true);
    const searchField2 =document.getElementById('search-field2');
  const searchText=searchField2.value;
  console.log(searchText);
  loadPhone(searchText);
}

// speenner
const loadingSpenner =(isLoading) =>{
    const load = document.getElementById('Loading')
    if(isLoading){
        load.classList.remove('hidden')
    }
}

// show All button

const ShawAll= ()=>[
    evenHandler2(true)
]