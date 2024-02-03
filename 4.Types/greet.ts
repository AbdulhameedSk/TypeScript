type Arg = number | string;

function greet(id: Arg) {
  console.log("Hello " + id);
}
greet(1);
greet("2");
