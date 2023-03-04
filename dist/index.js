"use strict";
var printModule = function (msg) {
    console.log(msg);
    console.log(msg);
};
printModule("Hello World");
// non null 단언 연산자 ! 를 사용하면 값이 존재한다고 타입스크립트에게 알려줌
var btn = document.getElementById("btn");
// DOM 으로 타입 단언/ 별칭 HTMLInputElement 타입 단언 사용
var input = document.getElementById("todoinput");
/*(<HTMLInputElement).input.value 로 위 코드를 대체할순있지만 일박적이지 않으며 jsx 코드도 오류 발생시킴
* 홀 화살괄호는 템플릿 HTML 을 작성하는데 사용되기때문임*/
var form = document.querySelector("form");
var list = document.getElementById('todolist');
// readTodos 함수를 호출하면 Todo type 배열을 반환하게 됨, 해당 배열은 비어있거나 Todo 항목이 들어있을수있으며 Todo 항목을 읽어올수있음
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    // 로컬 스토리지에서 todos 라는 키값으로 저장된 데이터를 가져옴
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    // typescript 가 타입 인식할 수 있도록 JSON.stringify 로 todos 문자열화토록함
    localStorage.setItem('todos', JSON.stringify(todos));
}
// e: SubmitEvent 는 이벤트 객체를 받아오는데 이벤트 객체는 타입스크립트에서 기본적으로 제공하지 않기때문에 직접 타입을 지정해줘야함
function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    // 새로운 할일의 타입을 Todo 로 지정해 타입설정했던 Todo 객체를 생성
    var newTodo = {
        text: input.value,
        completed: false,
    };
    // 새로운 할일을 생성하는 함수 호출
    createTodo(newTodo);
    // todos 배열에 newTodo 객체를 추가
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    // 동적 새로운 li 태그 생성
    var newLI = document.createElement("li");
    // 동적 생성된 li 태그에 checkbox 생성
    var checkbox = document.createElement("input");
    // typescript 가 checkbox 를 checkbox 로 인식하도록 type 설정
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener('submit', handleSubmit);
// btn 존재하면 계속 진행하라는 뜻 없다면 진행치 않음
// btn?.addEventListener("click", ()=>{
// 	input.value = ''
// 	alert("CLICKED!")
// })
