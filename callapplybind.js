// call,apply,bind

let user = {
    branch: "fabevy",
    location: "tenkasi",
    mobile_no: 9150372407,
    website:"www.fabevy.com",
}

function main(a, b) {
    console.log(this, a, b);
}

main.call(user, "easy to", "learn");
main.apply(user, ["hurry", "up"])
let func = main.bind(user, "welcome", "all");
func();



















