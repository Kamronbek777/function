function compare(a, b) {
    if(a>b) {
        alert(`The biggest number is ${a}`)
    }else if (a<b) {
        alert(`The biggest number is ${b}`)
    }else if (a=b) {
        alert(`The numbers are equal`)
    }else {
        alert(`You typed wrong`)
    }
}
compare(+prompt("Enter first number"), +prompt("Enter second number"));