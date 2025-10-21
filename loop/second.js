const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"rubby",
    swipt:"swipt by apple"
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}