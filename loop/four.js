const coding=["js","rubby","java","python","cpp"]
const values=coding.forEach((item)=>{
    console.log(item);
    return item
})
console.log(values);
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>{
  //  return num>4
//})

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const books=[
    {title:'b1',genre:'fiction',publish:1981,edition:2004},
    {title:'b2',genre:'non-fiction',publish:1983,edition:2006},
    {title:'b3',genre:'history',publish:1984,edition:2008},
    {title:'b4',genre:'science',publish:1985,edition:2010},
    {title:'b5',genre:'fiction',publish:1986,edition:2012},
    {title:'b6',genre:'non-fiction',publish:1984,edition:2016},
    {title:'b7',genre:'fiction',publish:1981,edition:2008},
    {title:'b8',genre:'history',publish:1986,edition:2004},
    {title:'b9',genre:'science',publish:1986,edition:2014},
    {title:'b10',genre:'geo',publish:1989,edition:2020},
    {title:'b11',genre:'fiction',publish:1984,edition:2004}
];
let userBooks=books.filter((bk)=>bk.genre==='non-fiction')
userBooks=books.filter((bk)=>{
    return bk.publish>=1981 && bk.genre==="non-fiction"
})
console.log(userBooks)
