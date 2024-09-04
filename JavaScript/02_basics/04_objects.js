//const tinderUser = new Object() //singleton object 
const tinderUser = {} // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "prince";
tinderUser.isLoggedIn = false;

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: { 
        userfullname: { 
            firstname: "prince",
            lastname: "saini"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "A", 2: "b"}
const obj2 = {3: "A", 4: "b"}
const obj4 = {5: "A", 6: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2 , obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3); 

const users = [
    { 
        id: 1, 
        email: "p@gamil.com"
    },
    { 
        id: 1, 
        email: "p@gamil.com"
    },
    { 
        id: 1, 
        email: "p@gamil.com"
    },
    { 
        id: 1, 
        email: "p@gamil.com"
    }
    
]

//console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "prince"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course

console.log(Instructor);

const navbar = ({company}) => {

}
navbar(company = "prince")

// {
//     "name": "prince",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// https://api.github.com/user/hiteshchoudhary
