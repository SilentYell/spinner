//created variable to store all the spinner icons in an array
const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
//looping through the array using a for in loop
for (let i in spinner) {
  setTimeout(() => {
    // writing each element of the array while increasing
    process.stdout.write(spinner[i]);
  }, i * 200);
}