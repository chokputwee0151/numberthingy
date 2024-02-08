function formValidation() {
  const addEventHandler = () => {
      const save = document.getElementById('save')
      const reset = document.getElementById('reset')
      save.addEventListener('click',saveHandler)
      reset.addEventListener('click',resetHandler)
  
  }
    
  const saveHandler = () => {
    const fullname = document.getElementById('fullname')
    const feedback = document.getElementById('feedback')
    if(fullname.value.trim().length === 0){
      const pnameMsg = document.getElementById('nameValidateMsg')
      pnameMsg.textContent = 'nauh! name is empty duh!'
    }
    if(feedback.value.trim().length === 0){
      const pfeedbackMsg = document.getElementById('feedbackValidateMsg')
      pfeedbackMsg.textContent = 'nauh! feedback is empty duh!'
    }
  }
  const resetHandler = () => {
    fullname.value =''
    feedback.value=''
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = formValidation()
addEventHandler()
