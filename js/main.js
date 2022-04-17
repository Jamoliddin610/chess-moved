let boxs = [];

for (let a = 8; a >= 1; a--) {
    for (let b = 1; b <= 8; b++) {
        let boxobject = {
            x: a,
            y: b
        }
        boxs.push(boxobject)
    }
}
console.log(boxs);

let board = document.querySelector(".board")
let resultX = document.querySelector('.x-result')
let resultY = document.querySelector('.y-result')

boxs.forEach((elem, i) => {
    let box = document.createElement('div');
    box.className = ` box y_${elem.y} x_${elem.x}`
    box.id = i
    board.appendChild(box)
})

let cells = document.querySelectorAll(".box")
cells.forEach((item) => {
    boxs.forEach((it, idx) => {
        if (item.id == idx) {
            if (it.x % 2 == 0 && it.y % 2 == 0) {
                item.classList.add("box-dark")
            }
            if (it.x % 2 != 0 && it.y % 2 != 0) {
                item.classList.add("box-dark")
            }
        }
    })
    item.addEventListener('click', () => {
        cells.forEach((elem) => {
            elem.classList.remove("danger")
        })
        boxs.forEach((elem, i) => {
            if (i == item.id) {
                resultX.innerHTML = `X= ${elem.y}`
                resultY.innerHTML = `Y= ${elem.x}`
                item.classList.add("danger")
            }
        })
    })

})
let castle = document.querySelector("#castle")
castle.addEventListener("click", () => {
    cells.forEach((elem) => {
        if (elem.className.includes("y_1") && elem.className.includes("x_1")) {
            elem.style.backgroundImage = `url('./imgs/castle.png')`

        }
    })
})

let con = 1
    cells.forEach((item) => {
        item.addEventListener('click', () => {
            let one = item.className.split(' ')
            if ( con == 1) {
                search(one[1], one[2])
                con++
            }

        })
    })
function search(a, b) {
    let con = 1
    cells.forEach((item) => {
        boxs.forEach((elem, i) => {
            item.addEventListener('click', () => {
                if (item.className.includes(`${a}`)) {
                    if (item.id == i) {
                        cells.forEach((el, id) => {
                            el.classList.remove('castle')
                            el.classList.remove('green')
                            if (el.className.includes(`y_${elem.y}`)) {
                                el.classList.add('green')
                            }
                            if (el.className.includes(`x_${elem.x}`)) {
                                el.classList.add('green')
                            }
                            if (!(item.className.includes("y_4") && item.className.includes("x_5"))) {
                                el.style.backgroundImage = `url()`
                            }
                        })
                        item.classList.add('castle')
                    }
                    con = 1
                }
                if (item.className.includes(`${b}`)) {
                    if (item.id == i) {
                        cells.forEach((el, id) => {
                            el.classList.remove('castle')
                            el.classList.remove('green')
                            if (el.className.includes(`y_${elem.y}`)) {
                                el.classList.add('green')
                            }
                            if (el.className.includes(`x_${elem.x}`)) {
                                el.classList.add('green')
                            }
                            if (!(item.className.includes("y_4") && item.className.includes("x_5"))) {
                                el.style.backgroundImage = `url()`
                            }
                        })
                        item.classList.add('castle')
                    }
                    con = 1
                }
            })
        })
    })
}

































































// castle.addEventListener("click", () => {
//     cells.forEach((item) => {

//         boxs.forEach((elem, i) => {
//             item.addEventListener('click', () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                        el.classList.remove('castle')
//                         el.classList.remove('green')
//                         if (el.className.includes(`y_${elem.y}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`x_${elem.x}`)) {
//                             el.classList.add('green')
//                         }
//                         if (!(item.className.includes("y_4") && item.className.includes("x_5"))) {
//                             el.style.backgroundImage = `url()`
//                         }
//                     })
//                     item.classList.add('castle')

//                 }

//             })
//         })
//     })
// })
// let knight = document.querySelector("#knight")
// knight.addEventListener('click', () => {
//     cells.forEach((item) => {
//         boxs.forEach((elem, i) => {
//             item.addEventListener('mouseover', () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                         if (el.className.includes(`y_${elem.y + 1}`) && el.className.includes(`x_${elem.x + 2}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y + 2}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y + 2}`) && el.className.includes(`x_${elem.x - 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y + 1}`) && el.className.includes(`x_${elem.x - 2}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 1}`) && el.className.includes(`x_${elem.x + 2}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 2}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 2}`) && el.className.includes(`x_${elem.x - 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 1}`) && el.className.includes(`x_${elem.x - 2}`)) {
//                             el.classList.add('green')
//                         }
//                     })
//                 }
//             })
//             item.addEventListener("mouseout", () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove("green")
//                     })
//                 }
//             })
//         })
//     })
// })

// let bishop = document.querySelector('#bishop')
// bishop.addEventListener('click', () => {
//     cells.forEach((item) => {
//         boxs.forEach((elem, i) => {
//             item.addEventListener('mouseover', () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                         for (let i = 0; i < 8; i++) {
//                             if (el.className.includes(`y_${elem.y + i}`) && el.className.includes(`x_${elem.x + i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y - i}`) && el.className.includes(`x_${elem.x + i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y - i}`) && el.className.includes(`x_${elem.x - i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y + i}`) && el.className.includes(`x_${elem.x - i}`)) {
//                                 el.classList.add('green')
//                             }
//                         }
//                     })
//                 }
//             })
//             item.addEventListener("mouseout", () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                     })
//                 }
//             })
//         })
//     })
// })

// let queen = document.querySelector("#queen")
// queen.addEventListener('click', () => {
//     cells.forEach((item) => {
//         boxs.forEach((elem, i) => {
//             item.addEventListener('mouseover', () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                         if (el.className.includes(`y_${elem.y}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`x_${elem.x}`)) {
//                             el.classList.add('green')
//                         }
//                         for (let i = 0; i < 8; i++) {
//                             if (el.className.includes(`y_${elem.y + i}`) && el.className.includes(`x_${elem.x + i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y - i}`) && el.className.includes(`x_${elem.x + i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y - i}`) && el.className.includes(`x_${elem.x - i}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y + i}`) && el.className.includes(`x_${elem.x - i}`)) {
//                                 el.classList.add('green')
//                             }
//                         }
//                     })
//                 }
//             })
//             item.addEventListener("mouseout", () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                     })
//                 }
//             })
//         })
//     })
// })
// let king = document.querySelector("#king")
// king.addEventListener('click', () => {
//     cells.forEach((item) => {
//         boxs.forEach((elem, i) => {
//             item.addEventListener('mouseover', () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                         if (el.className.includes(`y_${elem.y + 1}`) && el.className.includes(`x_${elem.x - 1}`)) {
//                             el.classList.add('green')
//                         } 
//                         if (el.className.includes(`y_${elem.y - 1}`) && el.className.includes(`x_${elem.x - 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y}`) && el.className.includes(`x_${elem.x - 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 1}`) && el.className.includes(`x_${elem.x}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y + 1}`) && el.className.includes(`x_${elem.x}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y - 1}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')
//                         }
//                         if (el.className.includes(`y_${elem.y}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')

//                         } if (el.className.includes(`y_${elem.y + 1}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')
//                         }
//                     })

//                 }
//             })
//             item.addEventListener("mouseout", () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                     })
//                 }
//             })
//         })
//     })
// })
// function pathfunc() {
//     cells.forEach((item) => {
//         boxs.forEach((elem, i) => {
//             item.addEventListener('mouseover', () => {
//                 if (item.className.includes(`x_2`)) {
//                     if (item.id == i) {
//                         cells.forEach((el) => {
//                             el.classList.remove('green')
//                             if (el.className.includes(`y_${elem.y}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                                 el.classList.add('green')
//                             }
//                             if (el.className.includes(`y_${elem.y}`) && el.className.includes(`x_${elem.x + 2}`)) {
//                                 el.classList.add('green')
//                             }
//                         })
//                     }
//                 } else if (item.id == i) {
//                     cells.forEach((el) => {
//                         if (el.className.includes(`y_${elem.y}`) && el.className.includes(`x_${elem.x + 1}`)) {
//                             el.classList.add('green')
//                         } else {
//                             el.classList.remove('green')
//                         }
//                     })
//                 }
//             })
//             item.addEventListener("mouseout", () => {
//                 if (item.id == i) {
//                     cells.forEach((el, id) => {
//                         el.classList.remove('green')
//                     })
//                 }
//             })
//         })
//     })
// }
// let count = 0
// let btn_d = document.querySelector(".threed-btn")
// btn_d.addEventListener('click',()=>{
//     board.classList.toggle('chess-3d')
//     if (count == 0) {
//         btn_d.innerHTML = `2D`
//         count++
//     }
//     else{
//         btn_d.innerHTML = `3D`
//         count = 0
//     }
// })