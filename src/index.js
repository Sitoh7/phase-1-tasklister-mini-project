document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    NewTask(e.target["new-task-description"].value)
    
    form.reset()//this clears the input box once the user has submitted values
  }
  )
});

function NewTask(task){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  let priority = document.getElementById("colour").value;
  let date = document.createElement('p')
  let Pickeddate = document.getElementById('dueDate').value;
  let dateParts = Pickeddate.split("-");
  formattedDate = dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];// formatting year because by default the web browser displays the date as yyyy/dd/mm which does not match the input box which i can't change
  date.textContent = formattedDate
  btn.addEventListener('click', delTask)
  btn.textContent = ' X'
  p.textContent = `${task} `
  p.appendChild(btn)
  p.appendChild(date)
  document.getElementById('tasks').appendChild(p)

  //style
  date.style.fontSize = '10px'
  date.style.fontStyle = "italic";
  btn.style.fontSize ='10px'
  btn.style.fontWeight = 'bold'
  p.style.fontWeight = 'bold'

  //Color item based of priority
  if(priority=='high'){p.style.color = 'red'}
  
  else if(priority=='medium'){p.style.color = 'yellow'}

  else if(priority=='low'){p.style.color = 'green' }

 }

function delTask(e){
  e.target.parentNode.remove()
}

let print = document.getElementById("printButton")
print.addEventListener('click',printList)

function printList() {
  
  let divContent = document.getElementById("list").outerHTML;

  let printWindow = window.open("", "", "width=700,height=500");
  printWindow.document.write(
    "<style>body{font-family:Arial, sans-serif;font-size:3em;text-align: center;margin:auto;} p{font-size:3em;} #list{padding: 20px; border: 1px solid #ccc;}</style>");
  printWindow.document.write(divContent);

  printWindow.document.close();

  printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
  };
}