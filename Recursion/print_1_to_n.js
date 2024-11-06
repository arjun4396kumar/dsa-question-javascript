
//Method 1
function print_one_to_n(n){
    if(n == 0) return 1
    print_one_to_n(n-1)
    console.log(n)
}
print_one_to_n(10)

// Method 2
function print_one_to_n_v2(n){
    if(n>0){
        print_one_to_n_v2(n-1)
        console.log(n)
    }
}
print_one_to_n_v2(10)

