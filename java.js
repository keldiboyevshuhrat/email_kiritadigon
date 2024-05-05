// console.log(name11);



// royhat chaqirish


//  email 
let royhat_email = document.querySelector("#royhat_email");


//  parol 
let royhat_parol = document.querySelector("#royhat_parol");


// submit
let royhat_submit = document.querySelector("#royhat_submit");



// royhat_yozuv_email
let royhat_yozuv_email = document.querySelector("#royhat_yozuv_email");
// console.log(royhat_yozuv_email);


// royhat_yozuv_parol 
let royhat_yozuv_parol = document.querySelector("#royhat_yozuv_parol");
// console.log(royhat_yozuv_parol);

// royhar_yozuv_1 
let royhar_yozuv_1 = document.querySelector("#royhar_yozuv_1");
// console.log(royhar_yozuv_1);





// "@gmail.com"
let gmail = "@gmail.com"



royhat_submit.addEventListener("click", () => {

    if (royhat_email.value = royhat_email.value.includes(gmail)) {
        royhat_yozuv_email.style.color = 'green'
    } else {
        royhat_email.value = ""
    }



    if (royhat_parol.value.length >= 6) {
        royhat_yozuv_parol.style.color = 'green'
    } else {
        royhat_parol.value = ""
    }

    let eeeeeee = (royhat_yozuv_email);
    let eee = (royhat_yozuv_parol)

    if (eeeeeee.style.color == 'green' && eee.style.color == 'green') {
        royhar_yozuv_1.textContent = "ro'yhatga olingiz"
    } else {
        royhar_yozuv_1.textContent = 'xato'
    }


})

































// console.log(royhat_submit);


// function name11(e) {

// console.log(e);


// // royhat_submit.querySelector("click" , ()=>{


// // })
// }name11(e)
















// kirish


//  email 
let kirish_email = document.querySelector("#kirish_email");


//  parol 
let kirish_parol = document.querySelector("#kirish_parol");


// submit
let kirish_submit = document.querySelector("#kirish_submit");


// console.log(kirish_email);


// kirish_yozuvlar2

let kirish_yozuvlar2 = document.querySelector("#kirish_yozuvlar2");



// kirish_yozuvlar3
let kirish_yozuvlar3 = document.querySelector("#kirish_yozuvlar3");



// kirish_yozuvlar1 
let kirish_yozuvlar1 = document.querySelector("#kirish_yozuvlar1");



// console.log(kirish_yozuvlar1);







kirish_submit.addEventListener("click", () => {

    // for (let index = 0; index < name11.length; index++) {

        // console.log(name11[index].email);
        if (kirish_email.value ==  name11.email  ) {
            // kirish_yozuvlar2.style.color = 'green'
            console.log("togri");

        }else{
            // kirish_email.value = ""
            console.log("hato");

        }

        if (kirish_parol.value ==  name11.parol  ){
            // kirish_yozuvlar3.style.color = 'green'
            console.log("togri");

        }else{
            // kirish_parol.value = ""  
            console.log("hato");
        }










    }






// }
)









//     if (kirish_email.value == name11[index].email.trim()) {
// kirish_yozuvlar2.style.color = 'green'
//     console.log(22);
// } else {
//     // kirish_email.value = ""
//     console.log("ss");

// }


// if (kirish_parol.value == name11[index].parol) {
//     kirish_yozuvlar3.style.color = 'green'
// } else {
//     kirish_parol.value = ""
// }


// if (kirish_yozuvlar2.style.color == 'green') {
//     kirish_yozuvlar1.style.color = 'yellow'
// }