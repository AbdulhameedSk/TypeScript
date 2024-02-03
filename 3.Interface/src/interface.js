function IsLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(IsLegal({
    age: 18,
}));
