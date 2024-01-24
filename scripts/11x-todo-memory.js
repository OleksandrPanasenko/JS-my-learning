let array=[];
function addToArray(){
    const inputSource=document.querySelector(".js-name-input");
    const name=inputSource.value;
    
    array.push(name);
    inputSource.value='';
    console.log(array);
}

let array2=[];

updatePlans();

function updatePlans(){
    let todoText='';
    for (let i=0; i<array2.length; i++){
        todoText+=`<p>${array2[i]}</p>`
    }
    document.querySelector('.js-todo-output').innerHTML=todoText;
};

function addToArray2(){
    const inputSource=document.querySelector(".js-todo-list");
    const name=inputSource.value;
    array2.push(name);
    inputSource.value='';

    updatePlans();
}


let array3=JSON.parse(localStorage.getItem('task-array'))||[];

updatePlans3();

function updatePlans(){
    let todoText='';
    for (let i=0; i<array2.length; i++){
        todoText+=`<p>${array2[i]}</p>`
    }
    document.querySelector('.js-todo-output').innerHTML=todoText;
};

function addToArray2(){
    const inputSource=document.querySelector(".js-todo-list");
    const name=inputSource.value;
    array2.push(name);
    inputSource.value='';

    updatePlans();
}


function updatePlans3(){
    let todoText='';
    for (let i=0; i<array3.length; i++){
        todoText+=`
            <div>${array3[i].name}</div>
            <div>${array3[i].duedate}</div>
            <button class="button-inside", onclick="
                array3.splice(${i},1);
                updatePlans3();

            ">Delete</button>`
    }
    document.querySelector('.output-list-advanced').innerHTML=todoText;
};

function addToArray3(){
    const inputSource=document.querySelector(".js-input-advanced");
    const name=inputSource.value;
    array3.push({
        name: name,
        duedate: document.querySelector(".js-date").value
    });
    inputSource.value='';

    updatePlans3();
    saveToMemory3();
}

function saveToMemory3(){
    localStorage.setItem("task-array", JSON.stringify(array3));
}