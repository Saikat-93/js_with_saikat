const coding=["js","ruby","java","cpp"]
//coding.forEach( function (val){
  //  console.log(val);

//})
//coding.forEach((item)=>{
  //  console.log(item);
//})
function printme(item){
    console.log(item);
}
//coding.forEach(printme);

const mycoding=[
    {
        language:"javascript",
        languagefilename:"js"
    },
    {
        language:"java",
        languagefilename:"java"
    },
    {
        language:"python",
        languagefilename:"py"
    }


]
mycoding.forEach((item)=>{
    console.log(item.language);
})