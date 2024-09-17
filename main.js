// const str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str) 
// 원본 변하지 않음, 변화게 할려면 변수 선언을 const에서 let으로 하고 

// str = str.replace(regexp, 'AAA')
// console.log(str)

// const regexp = /the/
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gim))

console.log(str.match(/d$/gm))