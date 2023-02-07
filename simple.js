function simple(numbers) {
 
    let firstSimple = 2
    let simples = []
    let isSimple = true

    while (simples.length < numbers) {
        for (i=2; i<firstSimple; i++) {
            if (firstSimple % i == 0) {
                isSimple = false
                break
            }
        }
            
        if (isSimple == true) {
            simples.push(firstSimple)
        }
        
        isSimple = true
        firstSimple++
    }
    return simples
}


console.log(simple(process.argv[2]))