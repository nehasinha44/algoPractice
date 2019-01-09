function fibonacci(num){

if(num<3)
return 1;
else
  return fibonacci(num-1)+fibonacci(num-2);

}
fibonacci(12)


function fibMemo(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
      if (index < 3) return 1;
      else {
        cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
      }
    }
    return cache[index];
  }
   
  fibMemo(500);