 jackets = [
    {
        name: "Black",
        size: "M",
        price: 2334,
        gender: "female",
        imageURL: "",
    },
    {
        id: 0,
        name: "Red",
        size: "M",
        gender: "Male",
        price: 2334,
        imageURL: "",
    }
]

const jackestToShow = [];

 jackets.forEach(jacket => {
    if(jacket.gender === "female"){
        jackestToShow.push(jacket);
    }
});



