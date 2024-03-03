const myObject = {
    js : 'Javascript',
    py : 'Python',
    dart : 'Flutter',
    cpp : 'C++'
}

/*for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}*/

const Programming = ["js", "java", "cpp", "py", "rb"]
for (const key in Programming) {
    console.log(Programming[key])
}