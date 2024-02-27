// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (message === void 0) { message = "Do your best"; }
    console.log("I'm making a ".concat(size, " T-shirt with the message \"").concat(message, "\". "));
}
// Large shirt with default message
make_shirt("Large");
// Medium shirt with default message
make_shirt("Medium");
// Small shirt with default message
make_shirt("Small");
