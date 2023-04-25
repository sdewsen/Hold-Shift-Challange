const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

let lastChecked;
function handleCheck(e){
  let inbetween = false;
  if(e.shiftKey && this.checked){
  checkboxes.forEach((checkbox)=>{
    console.log(checkbox)
    if(checkbox === this || checkbox=== lastChecked){
      inbetween = !inbetween;
      console.log('Starting to check them')
    }
    if(inbetween){
      checkbox.checked = true
    }
    })
  }

  lastChecked = this
}

checkboxes.forEach((checkbox)=>{
  checkbox.addEventListener('click',handleCheck)
})