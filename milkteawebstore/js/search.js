
// Lấy các phần tử HTML cần sử dụng
const searchInput = document.getElementById('search-input');
const searchButton = document.querySelector('.btn-s input[name="tim"]');
const allRadio = document.querySelector('input[value="1"]');
const nameRadio = document.querySelector('input[value="2"]');
const priceRadio = document.querySelector('input[value="3"]');
const boxes = document.querySelectorAll('.box');

// Xử lý sự kiện khi click vào nút tìm kiếm
searchButton.addEventListener('click', search);

// Xử lý sự kiện khi nhấn phím Enter trong ô input tìm kiếm
searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

// Hàm tìm kiếm
function search() {
  const searchTerm = searchInput.value.toLowerCase();
  const searchType = getSearchType();

  boxes.forEach(function(box) {
    const name = box.querySelector('h3').textContent.toLowerCase();
    const price = box.querySelector('.price').textContent.trim();

    if (searchType === 'all') {
      box.style.display = 'block'; // Hiển thị tất cả sản phẩm
    } else if (searchType === 'name') {
      if (name.includes(searchTerm)) {
        box.style.display = 'block'; // Hiển thị sản phẩm theo tên
      } else {
        box.style.display = 'none'; // Ẩn sản phẩm không phù hợp
      }
    } else if (searchType === 'price') {
      if (price.includes(searchTerm)) {
        box.style.display = 'block'; // Hiển thị sản phẩm theo giá
      } else {
        box.style.display = 'none'; // Ẩn sản phẩm không phù hợp
      }
    }
  });
}

// Hàm lấy loại tìm kiếm (all, name, price)
function getSearchType() {
  if (allRadio.checked) {
    return 'all';
  } else if (nameRadio.checked) {
    return 'name';
  } else if (priceRadio.checked) {
    return 'price';
  }
}
