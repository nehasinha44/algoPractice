const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    console.log(i)
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  console.log(unique) ;
}

removeDups(names);