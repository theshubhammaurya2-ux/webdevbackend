import path from 'path'
// join two or more than two file
const filejoin =path.join('./path','sm.py')
// console.log(filejoin)


// absolute path
const abspath=path.resolve('folder','ssm.txt')
// console.log(abspath)

const dirname=path.dirname('./path/2/main.java')
// console.log(dirname)

//base path
const  basepath=path.basename('c:\codings\backend\lect6pathmod\index.js')
console.log(basepath)
