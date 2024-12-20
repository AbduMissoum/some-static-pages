const items = document.querySelectorAll('.buttons');
const contentItems=[]
for(index=0;index<items.length-1;index++)
{
    console.log(`.${items[index].id}`);
item = document.querySelector(`.${items[index].id}`);
contentItems.push(item);
}
console.log(contentItems);
function handle(e) {
removeShow();
    console.log("hhhhhh");
    console.log(this)
    const item = document.querySelector(`.${this.id}`)
    console.log(item);
item.classList.add('show');


}
function removeShow()
{
    contentItems.forEach(item => item.classList.remove('show'));
}
items.forEach(item => item.addEventListener('click', handle))

// Select the element with the class 'time'
const timeElement = document.querySelector('.time');

// Set the text content of the timeElement
timeElement.innerHTML = `Time: ${new Date().toLocaleTimeString()}`;

// Append the timeElement to the body (if needed)
document.body.appendChild(timeElement);
setInterval(()=>{



    timeElement.innerHTML = `Time: ${new Date().toLocaleTimeString()}`;
console.log(timeElement)
// Append the timeElement to the body (if needed)
document.body.appendChild(timeElement);
},1000)
