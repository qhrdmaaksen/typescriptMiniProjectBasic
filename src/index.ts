const printModule = (msg: string) => {
console.log(msg);
console.log(msg);
}
printModule("Hello World")

// non null 단언 연산자
const btn = document.getElementById("btn")!
// btn 존재하면 계속 진행하라는 뜻 없다면 진행치 않음
btn?.addEventListener("click", ()=>{
	alert("CLICKED!")
})
