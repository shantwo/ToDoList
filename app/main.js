    require(['Service/Storage','Module/ToDo'], function(Storage,ToDo){
        var add;

        var ToDoList;
        var item;
        var buttonsClose;

        var i;
        ToDoList = Storage.load();

        ToDoList.active.forEach(function(item){
            ToDo.add(item);
        });




        add = document.getElementById('add');
        add.addEventListener('click', function(){

            var todo = ToDo.input();

            item = ToDo.create(todo);

            ToDoList.active.push(item);
            Storage.save('ToDo',ToDoList);
        });

        buttonsClose = document.querySelectorAll('[name="close"]');

        for( i=0 ; i < buttonsClose.length ; i+=1 ){
            buttonsClose[i].addEventListener('click', function(){
                var toDelete = this.parentNode
                    .querySelectorAll('[name="title"]')[0]
                    .innerHTML;
                console.log(toDelete);
                Storage.delete(toDelete);
                document.getElementById('list-container').removeChild(this.parentNode);
            })
        }


    });
