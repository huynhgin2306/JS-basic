function x(n){
  if ( n < 0 || n > 1000)
      return -1s

  return Array.from(String(n)).sort().reverse()[0]
  
}
x(n);