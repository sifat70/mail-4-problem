function bestFriend(names) {
    // if (!names || names.length === 0) {
    //     return null;
    // }

    let maxLength = 0;
    let bigFriend = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > maxLength) {
            maxLength = names[i].length;
            bigFriend = names[i];
        }
    }

    return bigFriend;
}


let friends = ["mofij", "rohim", "korim", "mokless", "malek"];


let result = bestFriend(friends);
console.log("big friend: ", result);
