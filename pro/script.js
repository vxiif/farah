// هذا الكود لحساب الإجمالي وتحديثه في سلة التسوق

document.addEventListener("DOMContentLoaded", function() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const totalPriceElement = document.getElementById('total-price');
    
    // تحديث الإجمالي عند تغيير الكمية
    quantityInputs.forEach(function(input) {
        input.addEventListener('input', updateTotal);
    });

    // حذف المنتجات
    removeButtons.forEach(function(button) {
        button.addEventListener('click', removeItem);
    });

    function updateTotal() {
        let total = 0;

        // حساب المجموع الكلي
        const rows = document.querySelectorAll('.cart-table tbody tr');
        rows.forEach(function(row) {
            const price = parseFloat(row.cells[1].textContent.replace(' ريال', ''));
            const quantity = parseInt(row.querySelector('.quantity-input').value);
            const totalRowPrice = price * quantity;
            row.querySelector('.total-price').textContent = totalRowPrice + ' ريال';
            total += totalRowPrice;
        });

        // تحديث المجموع الكلي
        totalPriceElement.textContent = total.toFixed(2) + ' ريال';
    }

    function removeItem(e) {
        const row = e.target.closest('tr');
        row.remove();
        updateTotal(); // تحديث الإجمالي بعد الحذف
    }

    updateTotal(); // حساب الإجمالي عند تحميل الصفحة
});
