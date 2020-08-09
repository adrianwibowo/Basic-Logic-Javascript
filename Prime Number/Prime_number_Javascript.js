function prima(bawah, atas) {
  let result = []

  while (bawah <= atas) {
    let prime = false
    let count = 0
    for (let i = 2; i <= bawah; i++) {
      if (bawah % i === 0) {
        count++
      }
    }
    if (count === 1) prime = true
    if (prime) result.push(bawah)
    
    bawah++
  }
  return result
}

console.log(prima(0,10))
