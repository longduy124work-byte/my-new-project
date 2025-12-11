// let products = ["Apple", "Orange", "Grape", "Lemon", "Banana"];
let products =[
    ["Apple", 10000],
    ["Orange",20000],
    ["Grape",30000],
    ["Lemon",40000],
    ["Banana",50000],
]
// Hàm hiển thị sản phẩm (table)
function displayProducts() {
    let str="";
    for(let i = 0; i < products.length; i++) {
        str += "<tr>" // Nối vào chuỗi cũ -> tạo thành bảng với nhiều dòng
        str += "<td>" + products[i][0] + "</td>"
        str += "<td>" + products[i][1] + "</td>"
        // str += "<td>" + "<button onclick='editProduct("+i+")'>Edit</button>" + "</td>"
        str += `<td>
                        <button onclick="editProduct(${i})" class="btn btn-outline-primary">Edit</button>
                    </td>`
        // str += "<td>" + "<button>Delete</button>" + "</td>"
        str += `<td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>`
        str += "</tr>"
    }

    document.getElementById("product-list").innerHTML = str;
}

displayProducts();
// Hàm thêm sản phẩm
function addProduct() {
    let newProduct = document.getElementById("product-name").value;
    let newPrice = document.getElementById("product-price").value;
    let addedProduct = [newProduct, newPrice];
    products.push(addedProduct);
    displayProducts();
    // document.getElementById("product-name").value = "";
    // document.getElementById("product-price").value = "";
}
// Hàm sửa sản phẩm
function editProduct(index) {
    products[index][0] = prompt("Nhập sản phẩm mới");
    products[index][1] = prompt("Nhập giá mới");
    displayProducts();
}
// Hàm xoá sản phẩm
function deleteProduct(index) {
    products.splice(index,1);
    displayProducts();
}