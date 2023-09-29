// target Create new array of singer whos age is greater than 50
const singer_actor = [
    {
        name:"Ajay Gogavale",
        age:47,
        role:"Singer"
    },
    {
        name:"Sonu Nigam",
        age:50,
        role:"Singer"
    },
    {
        name:"Udit Narayan",
        age:67,
        role:"Singer"
    },
    {
        name:"Kumar Sanu",
        age:66,
        role:"Singer"
    },
    {
        name:"Alka Yagnik",
        age:57,
        role:"Singer"
    },

    // actor
    {
        name:"Prathamesh Parab",
        age:30,
        role:"Actor"
    },
    {
        name:"Bharat Jadhav",
        age:57,
        role:"Actor"
    },
    {
        name:"Lalit Prabhakar",
        age:36,
        role:"Actor"
    },
    {
        name:"Swapnil Joshi",
        age:46,
        role:"Actor"
    },
    {
        name:"Shivani Surve",
        age:30,
        role:"Actor"
    }
];

function singer(ele){
    if(ele.age > 50 && ele.role === "Singer"){
        return {
            name: ele.name,
            age: ele.age,
            role: ele.role
        };
    }
}
var arrayOfSinger = singer_actor.map(singer);
console.log(arrayOfSinger);

// .filter(function(singer){
//     return singer !== undefined;
// });

