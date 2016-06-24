// FOREACH 
// Loop through all items and do something
// items.forEach(function(item){
//   // this is where we do stuff
// })

// FILTER
// Only grab certain items from array
// var filteredItems = items.filter(function(item){
//   // return true or false to keep or get rid of item
// })

// MAP
// Create new items based off of old items
// var mappedItems = items.map(function(item){
//   // return new item to replace old item
// })

// REDUCE
// Get only one thing
// var oneThing = items.reduce(function(a,b){
//   // return next "a" value
// }, firstValueOfA)


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///                                                 ///
///                                                 ///
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


console.log(items);

var howMany = items.length;
var total = 0;

items.forEach(function(item){
  total += item.price;
});

var avg = total / howMany;

document.querySelector("#answer1").innerHTML = avg.toFixed(2)







var filteredItems = items.filter(function(item){
  if( item.price > 14 && item.price < 18){
      return true;
    }else{
      return false
    }
});

var titles = "";
filteredItems.forEach(function(item, i){
  titles += item.title + "<br />";
});

document.querySelector("#answer2").innerHTML = titles;






var gbp = items.filter(function(item){
  if( item.currency_code === GBP) {
    return true;
  } else {
     return false;
  }
})
document.querySelector("#answer3").innerHTML = gbp;







  var woodenItems = items.filter(function(items){
    if( items.materials === wood); {
      return true;
    } else {
       return false;
    }
})
document.querySelector("#answer4").innerHTML = woodenItems;






  var eightMaterial = items.filter(function(items){
    if(items.materials >= 8); {
      return true;
    } else {
       return false
    }
  })
  document.querySelector("#answer5").innerHTML = eaightMaterial;





var manufacturing = items.filter(function(items){
  if (items.who_made === i_did) {
    return true
  }else {
    return false
  }
})
document.querySelector("#answer6").innerHTML = manufactureing;
