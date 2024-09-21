import http from "node:http"
import path from "node:path";
import os from "node:os"
import fs from "node:fs"
import EventEmitter from 'node:events';

// const eventEmitter = new EventEmitter();

// eventEmitter.on("end", (number, x) => {
//     console.log(`done ${number} ${x} !!!`);
// })
// eventEmitter.emit("end", 1, 4)
// eventEmitter.emit("end", 2, 3)
// eventEmitter.emit("end", 5, 6)
// const notes = '/users/joe/notes.txt';
// let name = "abc"
// let file = "xyz.txt"

// path.basename(notes)
// let a = path.join(name, file)
// console.log(os.arch())


// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// let data = fs.readFileSync('./hello.txt', 'utf8');

fs.writeFileSync("./hello.txt", "hello.txt");
console.log('abc')

// // import { hello } from "./demo_modules.mjs";
// hello();


http
    .createServer((request, response) => {
        response.writeHead(200, {
            "Content-Type": 'text/html; charset=utf-8'
        });
        response.write('<h1>An, An !</h1>');
        response.end();

    })
    .listen(2000);

// function sum(a, b, fun) {
//     let c = 0
//     setTimeout(() => {
//         c = a + b;
//         fun(c)
//     }, 0)
//     return c;
// }

// let a = sum(1, 4, function(data) {
//     console.log(data)
// });

function getUseriD() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userID = 10
            resolve(userID)
        })
    })
}

function getPostiD(userID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let postID = { id: 12, name: "abc" }
            resolve(postID)
        })
    })
}

function getCommentiD(postID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let comment = { id: 13, name: "def" }
            resolve(comment)
        })
    })
}
// getUseriD((userID) => {
//     getPostiD(userID, function(postID) {
//         getCommentiD(postID, function(comment) {
//             console.log(comment)
//         });
//     })
// })

// let abc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         getUseriD((data) => {
//             resolve(data)
//         })

//     }, 0);
// });
// abc
//     .then((data) => {
//         getPostiD(data, function(postID) {
//             return postID;
//         });
//     })
//     .then((postID) => {
//         getCommentiD(postID, function(comment) {
//             console.log(comment);
//         });
//     })
//     .catch((data) => {
//         console.log(data)
//     })
//     .finally(() => {
//         console.log("finally")
//     })


async function zbc() {
    let user = await getUseriD();
    let post = await getPostiD(user);
    let comment = await getCommentiD(post);
    return (comment, post, user)
}


zbc().then((data) => {
    console.log("ASYNC", data)
})

Promise.all([getUseriD(), getPostiD(), getCommentiD()]).then((data) => {
    console.log("Promise All", data)
})