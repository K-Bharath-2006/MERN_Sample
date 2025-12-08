// this will work only to var

var aw = {
    name : "Black",
    b:20,
};

console.log(this);

var funf = function (aa,jk){
    console.log(this.name,aa,jk);
}

// call apply bind

let boundedfn = funf.bind(aw,500,"Jane");
boundedfn();

funf.call(aw,400,900);


// apply

funf.apply(aw,[600,900]); // more arguments in square brackets 
