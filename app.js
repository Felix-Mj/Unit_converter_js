const feet_Get = document.querySelector('#feet')
const inches_Get = document.querySelector('#inches')

feet_Get.addEventListener('input', ()=>{
    inches_Get.value = feet_Get.value * 12;  
});

