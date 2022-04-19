const addDo = document.querySelector('.add');
const list = document.querySelector('.todos');
//Add Event Listner to UL(const list) so we don't have to add Event listner to new todo members

const search = document.querySelector('.search input');


generateTemplate = todo=>{
    const html =` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    list.innerHTML+=html;
};


addDo.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = addDo.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addDo.reset();
    }
});

list.addEventListener('click', e=>{
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


const filterTodos = (temp) =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(temp))
    .forEach(todo=>todo.classList.add('filtered'));
    console.log(list.children)

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(temp))
    .forEach(todo=>todo.classList.remove('filtered'));
     
};

search.addEventListener('keyup',()=>{
    const temp = search.value.trim();
    filterTodos(temp);
});
