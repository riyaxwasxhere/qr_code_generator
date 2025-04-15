const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const inputBox = document.querySelector('.input input')
const generateBtn = document.querySelector('.generate')
const imgBox = document.querySelector(".imgBox")
const qrImage = document.querySelector(".qrImage")

async function createQR(text){
    if(text.length > 0){
        qrImage.src = api + text
        imgBox.classList.add('showQR')
    }else{
        inputBox.classList.add('error')
        setTimeout(() => {
            inputBox.classList.remove('error')
        }, 1000);
    }
    
}

generateBtn.addEventListener("click",()=>{
    createQR(inputBox.value)
})