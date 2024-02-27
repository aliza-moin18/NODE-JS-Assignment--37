// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function  make_shirt(size : string, message = "Do your best"): void {
    console.log(`I'm making a ${size} T-shirt with the message "${message}". `);
}
// Large shirt with default message
make_shirt("Large")


// Medium shirt with default message
make_shirt("Medium")


// Small shirt with default message
make_shirt("Small")


