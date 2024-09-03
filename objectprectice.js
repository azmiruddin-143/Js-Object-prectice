
// Video number 1/2

// node objectprectice.js//

// let num = {
//     //     name: "Azmir Uddin",
//     //     year: 20,
//     //     custom: "Male",
//     //     Education: "HSC"
//     //   }

//     //   console.log(num);


//   let num = {
//     name: "Azmir Uddin",
//     year: 20,
//     custom: "Male",
//     Education: "HSC"
//   }

//   let ob = num["name"];
//   console.log(ob);


// node objectprectice.js//


// let az = [10, 50, 4, 0, 5, 55, 54, 56,]

// az[3] = 25;

// console.log(az);


// node objectprectice.js//

// let nam = ["kire", "koi", "acos"]
// console.log(nam);
// nam[2] = "gecos";
// console.log(nam);

// node objectprectice.js// 


// let i = "Azmir"
// console.log(i);
// i[2] = "u"
// console.log(i);

// String not change


// node objectprectice.js// 

// let school = "Badyer Bazar N.A.M Pilot High School"
// console.log(school); 
// console.log(school.toUpperCase());
// console.log(school.toLowerCase());



// node objectprectice.js// 

// let skils = " Developer"
// let skil = "Developer "

// if (skils.trim === skil.trim) {
//     let fist = skils.toLocaleUpperCase();
//     console.log( fist, "Tumi Ami Aksate Tour e Jabo");
// } else {
//     console.log("Tumar Sate Ami Jabo na");
// }



// node objectprectice.js// 

//   let i = "Tumiaknkoiaco"
//   console.log(i.slice(7,13));

// let num = "Hello I'm Rj Azmir Khan";

// console.log(num.split('R'));


// let i = "Tumi Akon Asba Naki"

//    console.log(i.split("a"));



// 
// node objectprectice.js// // 


// let person = ["tumi", "ami", "kothay", "kire"]

// console.log(person.join('|'));


// node objectprectice.js// // 


// let slill = "I'm Website Customizer";

// let mainSkill = slill.replace("Customizer", "Developer")

// console.log(mainSkill);

// node objectprectice.js//

// let i = "hello world"

// let rev = i.split('').reverse().join('');

// console.log(rev);



// let i = "kire koi"

// let rev = i.split(' ').reverse().join(' ');

// console.log(rev);


// node objectprectice.js//

// let n = [52, 56, 4564, 56456, 5]

// let nm = n.reverse();
// console.log(nm);

// let az = ["ami", "aci", "akhane"]

// let faz = az.reverse();
// console.log(faz);



// node objectprectice.js//

// let sentance = "azmirkhan"

// for (let i = 0; i < sentance.length; i++) {

//     let s = sentance.split("").reverse("").join("");
//     console.log(s);

// }


// node objectprectice.js//



// .................................//..........................///

// node objectprectice.js//


// let footballplayer = {
//     topplayer: "Lionel Messi",
//     secondplayer: "Cristiano Runaldo",
//     therdplayer: "Kylian Mbappé",
//     fourplayer: "Erling Haaland",
//     fiveplayer: " Jr Neymar"
// }

// console.log(footballplayer);



// node objectprectice.js//

// let footballplayer = {
//     topplayer: "Lionel Messi",
//     secondplayer: "Cristiano Runaldo",
//     therdplayer: "Kylian Mbappé",
//     fourplayer: "Erling Haaland",
//     fiveplayer: "Jr Neymar"
// }
// let bestplayer = footballplayer.topplayer;

// console.log("Amr Onek valo lage",bestplayer,"ei player ke");


// let food = {
//     apple: 1,
//     malta: 21,
//     orange: 3,
//     benna: 1.5,
//     jambura: 2,
//     nam: ["khalek", "malek", "kader"],
//     person: "azmir khan",
//     devloper: {
//         time: "8hr per day",
//         skils: "perfect",
//         professional: true,
//         selary: 23000
//     },

//     bestplayerftheword: "Leonel Messi"
// }

// node objectprectice.js//
// console.log(food.professional);
// console.log(food["jambura"]);
//   console.log(food.nam[2])

// let experiance = food.devloper.skils;
// console.log(experiance);


// second...////////////////,,,,,,,,,,,,,,,,/


// node objectprectice.js//

let food = {
    apple: 1,
    malta: 21,
    orange: 3,
    benna: 1.5,
    jambura: 2,
    nam: ["khalek", "malek", "kader"],
    person: "azmir khan",
    devloper: {
        time: "8hr per day",
        skils: "perfect",
        professional: true,
        selary: 23000
    },

    bestplayerftheword: "Leonel Messi"
}

// node objectprectice.js//
// let change = food.nam[2].replace("kader" ,"Asif" )
//  console.log(change);

//   let upselary = food.devloper.selary = 26000;
//   console.log(food.devloper);

// let namchane = food.nam = ["samir","sabbir","subo","shanto"];
// console.log(food.nam);


// node objectprectice.js//

// let mobile = {
//     name: "Oppo",
//     high: 6,
//     cemara: "66mpx",
//     price: 2999,
//     model: "Oppo FA 57"
// }


// let ki = Object.keys(mobile);
// console.log(ki);



// node objectprectice.js//

// let mobile = {
//     name: "Oppo",
//     high: 6,
//     cemara: "66mpx",
//     price: 2999,
//     model: "Oppo FA 57"
// }

//  mobile.price = 23999;
// let val = Object.values(mobile);
// console.log(val);



// node objectprectice.js//

let mobile = {
    name: "Oppo",
    high: 6,
    cemara: "66mpx",
    price: 2999,
    model: "Oppo FA 57"
}

for (let key in mobile) {
    console.log(key, ":", mobile[key], "|");
}