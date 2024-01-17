const buyNowLinks = document.querySelectorAll(".buy-now-link");
const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".total-price");
const buyNowButton = document.querySelector(".buy-now-btn");
// Khởi tạo biến totalPrice và gán giá trị ban đầu là 0.
let totalPrice = 0;
//Dùng vòng lặp forEach để lặp qua mỗi phần tử trong mảng buyNowLinks.
buyNowLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
  // ngăn chặn hành vi mặc định của sự kiện click, đảm bảo rằng trang web không sẽ được tải lại hoặc điều hướng đến một trang mới.
    event.preventDefault();
    const productBox = link.closest(".box");
    const productImage = productBox.querySelector("img").src;
    const productName = productBox.querySelector("h3").textContent;
    const productPrice = Number(
      productBox
        .querySelector(".price")
        .textContent.split(" ")[0]
        //loại bỏ các ký tự không phải là số bằng cách sử dụng phương thức replace(/\D/g, "").
        .replace(/\D/g, "")
    );
      // tạo thẻ div với class là cart-item
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
      // tạo thẻ div với class là item-details
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");
      //tạo thẻ h4 và lấy giá trị của biến productname
    const itemName = document.createElement("h4");
    itemName.textContent = productName;
    itemDetails.appendChild(itemName);
      //tạo thẻ div với class là item-price và lấy giá trị của biến producprice
    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = productPrice.toLocaleString() + " VNĐ";
    itemDetails.appendChild(itemPrice);
      //tạo thẻ div  quantity  và gán lớp tên quantity-wrapper
    const quantityWrapper = document.createElement("div");
    quantityWrapper.classList.add("quantity-wrapper");
      // tạo nút giảm số lượng và gán lớp decrement
    const decrementButton = document.createElement("button");
    decrementButton.classList.add("decrement");
    decrementButton.textContent = "-";
    quantityWrapper.appendChild(decrementButton);
      //tạo ô input hiển thị số lượng sp vs số lượng ban đầu là 1
    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.value = "1";
    quantityInput.min = "1";
    quantityWrapper.appendChild(quantityInput);
    //tạo nút tăng số lượng và gán lớp increment
    const incrementButton = document.createElement("button");
    incrementButton.classList.add("increment");
    incrementButton.textContent = "+";
    quantityWrapper.appendChild(incrementButton);

      //gán quantityWrapper thành phần tử con của biến itemDetails
    itemDetails.appendChild(quantityWrapper);
      // và gán vào  itemDetails vào cartitem
    cartItem.appendChild(itemDetails);
      //tạo thẻ img 
    const itemImage = document.createElement("img");
    itemImage.src = productImage;
    // insert  itemigame vào trước itemDetails
    cartItem.insertBefore(itemImage, itemDetails);
 // insert  cartItem vào trước cartItemsContainer
    cartItemsContainer.insertBefore(
      cartItem, cartItemsContainer.firstChild
    );
      // tạo thẻ div cho phần tổng giá và gán class
    const itemTotalPrice = document.createElement("div");
    itemTotalPrice.classList.add("item-total-price");
    itemTotalPrice.textContent =
      productPrice.toLocaleString() + " VNĐ";
    cartItem.appendChild(itemTotalPrice);
      // xử lý biến total price
    totalPrice += productPrice;
    totalPriceElement.textContent = totalPrice.toLocaleString() + " VNĐ";

    //định nghĩa một hàm xử lý sự kiện cho nút giảm số lượng sản phẩm (decrementButton)
    decrementButton.addEventListener("click", function () {
      let quantity = Number(quantityInput.value);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;

        const itemTotal = productPrice * quantity;
        itemTotalPrice.textContent = itemTotal.toLocaleString() + " VNĐ";

        totalPrice -= productPrice;
        totalPriceElement.textContent = totalPrice.toLocaleString() + " VNĐ";
      }
    });
    //định nghĩa một hàm xử lý sự kiện cho nút tăng số lượng sản phẩm (incrementButton)
    incrementButton.addEventListener("click", function () {
      let quantity = Number(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;

      const itemTotal = productPrice * quantity;
      itemTotalPrice.textContent = itemTotal.toLocaleString() + " VNĐ";

      totalPrice += productPrice;
      totalPriceElement.textContent = totalPrice.toLocaleString() + " VNĐ";
    });
  });
});

  // xử lý khi ấn vào nút thanh toán
buyNowButton.addEventListener("click", function () {
  alert("Đã thanh toán thành công! Tổng số tiền: " + totalPrice.toLocaleString() + " VNĐ");
//xóa sản phẩm
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    item.remove();
  });

  totalPrice = 0;
  totalPriceElement.textContent = totalPrice.toLocaleString() + " VNĐ";
});
const deleteAllButton = document.querySelector(".delete-all-btn");
deleteAllButton.addEventListener("click", function () {
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    item.remove();
  });

  totalPrice = 0;
  totalPriceElement.textContent = totalPrice.toLocaleString() + " VNĐ";
});


// chỉnh giỏ hàng trên thanh nav

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}

window.onscroll = () =>{
    cartItem.classList.remove('active');
}