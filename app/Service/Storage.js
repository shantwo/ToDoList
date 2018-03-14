define(function() {

    var Save = function(storage_key, object){
        localStorage.setItem(storage_key, JSON.stringify(object));
    };

    var Load = function(){
        if(localStorage.getItem('ToDo')){
            return JSON.parse(localStorage.getItem('ToDo'));
        }
        else{
            return {
                active: []
            }
        }
    };

    var Delete = function(element){
        var ToDo = JSON.parse(localStorage.getItem('ToDo'));

      if(ToDo.active){
          ToDo.active.forEach(function(value,key){
              if(value === element){
                    var elements = Load();
                    delete elements.active[key];

                    var ToDo = {};
                    ToDo.active = [];
                    for (var prop in elements.active) {
                      // skip loop if the property is from prototype
                      if(elements.active[prop] !== undefined) {
                          ToDo.active.push(elements.active[prop]);
                      }
                  }
                    Save('ToDo', ToDo);
              }
          })

      }
    };

    return {
        save: Save,
        load: Load,
        delete: Delete
    }

});