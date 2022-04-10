let arr = [];

function Product(n, c, i, p, g, s,){
    this.Name = n;
    this.Catagory = c;
    this.Image = i;
    this.Price = p;
    this.Gender = g;
    this.Sold = s;
}



function storeProduct (e){
    e.preventDefault();
    let form = document.getElementById("dashbord")

    let Name = form.name.value;
    let Catagory  = form.category.value;
    let Image = form.image.value;
    let Price = form.price.value;
    let Gender = form.gender.value;
    let Sold = form.sold.value;
   
    let p1 = new Product(Name, Catagory, Image, Price, Gender, Sold)
    arr.push(p1);
    console.log("arr:",arr)
}