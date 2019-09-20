function bouncer(arr){
    var truthies = [];
    for (var elem of arr){
      if (elem) truthies.push(elem);
    }
    return truthies;
    }
    
    bouncer([7, "ate", "", false, 9]);
    
    //with .filter
    function bouncer(arr){
      return arr.filter(function(elem){
        return(elem)
      })
    }
    
    bouncer([7, "ate", "", false, 9]);