const container = document.querySelector('#taskContainer');
let taskInput = document.querySelector('#task');
taskInput.focus()

function createCancelButton() {
    const cancelButton = document.createElement('input');
    cancelButton.type = 'button';
    cancelButton.classList.add('cancel');
    cancelButton.value = String.fromCodePoint(0x274C);
    cancelButton.onclick = (event) => { event.target.parentNode.remove() };
    return cancelButton;
}

function createDoneButton() {
    const doneButton = document.createElement('input');
    doneButton.type = 'button';
    doneButton.classList.add('done');
    doneButton.value = String.fromCodePoint(0x2713);
    doneButton.onclick = () => {
        const father = doneButton.parentNode;
        father.removeChild(father.children[1]);
        father.removeChild(father.children[0]);
        const text = document.createTextNode(' ' + String.fromCodePoint(0x2713));
        father.appendChild(text);
        father.classList.add('active');
    }
    return doneButton;
}


function submitTask() {
    const task = taskInput.value;
    if (task !== '') {
        const list = document.createElement('li');
        const text = document.createTextNode(task);
        const cancel = createCancelButton();
        const done = createDoneButton();
        list.appendChild(text);
        list.appendChild(cancel);
        list.appendChild(done);
        container.appendChild(list);
        taskInput.value = '';
        taskInput.focus();
    } else {
        window.alert('Write something!')
    }
}

function cleanTask() {
    container.innerHTML = '';
}