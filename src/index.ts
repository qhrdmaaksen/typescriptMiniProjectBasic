const printModule = (msg: string) => {
console.log(msg);
console.log(msg);
}
printModule("Hello World")

// non null 단언 연산자
const btn = document.getElementById("btn")! as HTMLButtonElement
// DOM 으로 타입 단언/ 별칭 HTMLInputElement 타입 단언 사용
const input = document.getElementById("todoinput")! as HTMLInputElement
/*(<HTMLInputElement).input.value 로 위 코드를 대체할순있지만 일박적이지 않으며 jsx 코드도 오류 발생시킴
* 홀 화살괄호는 템플릿 HTML 을 작성하는데 사용되기때문임*/
const form = document.querySelector("form")

// btn 존재하면 계속 진행하라는 뜻 없다면 진행치 않음
btn?.addEventListener("click", ()=>{
	input.value = ''
	alert("CLICKED!")
})

