interface User {
  name?: String;
  age: number;
}

function IsLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(
  IsLegal({
    age: 18,
  })
);
