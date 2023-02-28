const form = document.getElementById('form')
// console.log(form)
form.addEventListener('submit', formSubmitted)
const cardWrapper = document.getElementsByClassName('card-wrapper')[0]
function formSubmitted(event) {
    event.preventDefault()
    let card = document.createElement('div')
    card.className = 'card';
    cardWrapper.appendChild(card);
    let upper = document.createElement('div')
    let middle = document.createElement('div')
    let lower = document.createElement('div')
    upper.className = 'upper';
    middle.className = 'middle'
    lower.className = 'lower'
    card.appendChild(upper)
    card.appendChild(middle)
    card.appendChild(lower)
    let para1 = document.createElement('p')
    let para2 = document.createElement('p')
    let fnameupper = document.getElementById('fname').value.toUpperCase()
    let lnameupper =document.getElementById('lname').value.toUpperCase()
    para1.innerText = `${fnameupper}`
    para2.innerText = `${lnameupper}`
    upper.appendChild(para1)
    upper.appendChild(para2)
    let a = document.getElementsByClassName('card-wrapper')[0].children.length
    // let a = 01
    let enrollID = document.createElement('p')
    enrollID.innerText = `Enrollment No: ${a}`
    middle.appendChild(enrollID);
    // a = a++;
    let lowerLeft = document.createElement('div')
    lowerLeft.className = 'lower-left';
    let lowerRight = document.createElement('div')
    lowerRight.className = 'lower-right';
    lower.appendChild(lowerLeft)
    lower.appendChild(lowerRight)
   
    lowerLeft.innerHTML = `<span>Email</span>
    <span>Phone</span>
    <span>Gender</span>
    <span>City</span>`
    for (let i = 1; i < 5; i++) {
        let span = document.createElement('span')
        lowerRight.appendChild(span)
    }
    let x = document.getElementById('email').value
    localStorage.setItem('name',x)
    lowerRight.children[0].innerText = `${document.getElementById('email').value}`
    lowerRight.children[1].innerText = `${document.getElementById('phone').value}`
    let temp_gender = document.getElementById('gender')
    temp_gender.checked ? gender = 'Male' : gender = 'Female';
    lowerRight.children[2].innerText = `${gender}`

    lowerRight.children[3].innerText = `${document.getElementById('city').value}, ${document.getElementById('state').value}`;
    form.reset()
}