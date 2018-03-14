define(function(){

    var getInputValue = function(){
        var input, todo;

        input = document.getElementById('addToDo');
        todo = input.value;

        return todo;
    };

    var Create = function(todo){
        var itemContainer, item, close, closeIcon;
        var text;
        var listContainer;

        listContainer = document.getElementById('list-container');

        itemContainer = document.createElement('article');
        item = document.createElement('span');
        item.setAttribute('name','title');
        close = document.createElement('span');
        close.setAttribute('name', 'close');
        closeIcon = document.createElement('i');
        closeIcon.classList.add('far');
        closeIcon.classList.add('fa-window-close');
        text = document.createTextNode(todo);

        item.appendChild(text);
        itemContainer.appendChild(item);
        close.appendChild(closeIcon);
        itemContainer.appendChild(close);
        listContainer.appendChild(itemContainer);


        return todo;
    };

    var Add = function(todo){
        this.create(todo);
    };

    return {
        create: Create,
        add: Add,
        input: getInputValue
    }
});