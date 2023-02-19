const printModule = (msg: string) => {
console.log(msg);
console.log(msg);
}
printModule("Hello World")

// 각 객체 타입 정의 (타입 별칭) 인터페이스
interface Todo {
	text: string,
	completed: boolean,
}

// 할일 목록과 배열은 Todo type 의 배열이라고 알려주기 위해 Todo[] 타입을 사용
const todos: Todo[] = []

// non null 단언 연산자 ! 를 사용하면 값이 존재한다고 타입스크립트에게 알려줌
const btn = document.getElementById("btn")! as HTMLButtonElement
// DOM 으로 타입 단언/ 별칭 HTMLInputElement 타입 단언 사용
const input = document.getElementById("todoinput")! as HTMLInputElement
/*(<HTMLInputElement).input.value 로 위 코드를 대체할순있지만 일박적이지 않으며 jsx 코드도 오류 발생시킴
* 홀 화살괄호는 템플릿 HTML 을 작성하는데 사용되기때문임*/
const form = document.querySelector("form")!

const list = document.getElementById('todolist')!



// e: SubmitEvent 는 이벤트 객체를 받아오는데 이벤트 객체는 타입스크립트에서 기본적으로 제공하지 않기때문에 직접 타입을 지정해줘야함
const handleSubmit = (e: SubmitEvent) => {
	e.preventDefault()
	console.log('submit')
	// 새로운 할일의 타입을 Todo 로 지정해 타입설정했던 Todo 객체를 생성
	const newTodo: Todo = {
		text: input.value,
		completed: false,
	}
	// 새로운 할일을 생성하는 함수 호출
	createTodo(newTodo)
	// todos 배열에 newTodo 객체를 추가
	todos.push(newTodo)
	input.value = ''
}

const createTodo = (todo: Todo) => {
	// 동적 새로운 li 태그 생성
	const newLI = document.createElement("li")
	// 동적 생성된 li 태그에 checkbox 생성
	const checkbox = document.createElement("input")
	// typescript 가 checkbox 를 checkbox 로 인식하도록 type 설정
	checkbox.type = 'checkbox'
	newLI.append(todo.text)
	newLI.append(checkbox)
	list.append(newLI)
}

form.addEventListener('submit', handleSubmit)

// btn 존재하면 계속 진행하라는 뜻 없다면 진행치 않음
// btn?.addEventListener("click", ()=>{
// 	input.value = ''
// 	alert("CLICKED!")
// })

