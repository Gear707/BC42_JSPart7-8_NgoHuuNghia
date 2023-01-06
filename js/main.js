// Tạo hàm DOM qua selector
function queSel(selector) {
    return document.querySelector(selector);
}

// Khởi tạo 1 mảng rỗng
const myArray = new Array();

// Tạo hàm có chức năng là khi click button "Thêm số" sẽ thêm phần tử mới vào mảng
queSel('#btnAdd').onclick = function () {
    // input
    let numN = +queSel('#numN').value;
    myArray.push(numN); // thêm phần tử mới vào cuối mảng dựa vào giá trị user nhập vào

    // progress
    queSel('#numN').value = ''; // xóa giá trị mà user đã thêm vào để tiếp tục nhập một giá trị khác
    let result = ''; // tạo biến xuất ra các phần tử trong mảng
    for (index = 0; index < myArray.length; index++) {
        result += myArray[index] + ' ';  // thêm từng phần tử vào mảng dựa vào biến bước nhảy i
    }

    // output
    queSel('#output0').innerHTML = result;
}


/* 1. Tổng số dương */
queSel('#btnSum').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let sum = 0;
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > 0) {
            sum += myArray[index];
        }
    }

    // output
    queSel('#output1').innerHTML = 'Tổng các số dương: ' + sum;
}


/* 2. Đếm số dương */
queSel('#btnPosNum').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let count = 0;
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > 0) {
            count++;
        }
    }

    // output
    queSel('#output2').innerHTML = 'Có ' + count + ' số dương';
}


/* 3. Tìm số nhỏ nhất */
queSel('#btnMin').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress: dùng phương thức Math.min.apply để tìm số nhỏ nhất trong mảng
    let minValue = Math.min.apply(null, myArray);

    // output
    queSel('#output3').innerHTML = 'Số nhỏ nhất: ' + minValue;
}


/* 4. Tìm số dương nhỏ nhất */
queSel('#btnMinPos').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // khởi tạo mảng mới chứa các số dương được lấy từ mảng ban đầu
    let posArray = myArray.filter(function (currentValue) {
        return (currentValue > 0);
    })
    let result4 = '';
    // kiểm tra mảng mới có phần tử hay không
    if (!posArray.length) {
        // mảng rỗng thì thông báo không có số dương
        result4 = 'Không có số dương trong mảng';
    }
    else {
        // ngược lại thì đi tìm số dương nhỏ nhất
        let minPos = Math.min.apply(null, posArray);
        result4 = 'Số dương nhỏ nhất: ' + minPos;
    }

    // output
    queSel('#output4').innerHTML = result4;
}


/* 5. Tìm số chẵn cuối cùng */
queSel('#btnLastEven').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // khởi tạo mảng mới chứa các số chẵn được lấy từ mảng ban đầu
    let evenArray = myArray.filter(function (currentValue) {
        return (currentValue >= 0 && currentValue % 2 === 0);
    })
    let result5 = '';
    // kiểm tra mảng mới có phần tử hay không
    if (!evenArray.length) {
        // mảng rỗng thì thông báo không có số chẵn
        result5 = 'Không có số chẵn trong mảng';
    }
    else {
        // ngược lại thì đi tìm số chẵn cuối cùng
        result5 = 'Số chẵn cuối cùng: ' + evenArray[evenArray.length - 1];
    }

    // output
    queSel('#output5').innerHTML = result5;
}


/* 6. Đổi vị trí hai phần tử bất kì trong mảng */
// Khởi tạo hàm hoán đổi vị trí của 2 phần tử bất kì trong mảng
function swapElements(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
}

queSel('#btnSwap').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let firstIndex = +queSel('#firstIndex').value;
    let secondIndex = +queSel('#secondIndex').value;
    // gọi hàm hoán đổi vị trí
    swapElements(myArray, firstIndex, secondIndex);
    let result6 = '';
    // duyệt & xuất ra các phần tử của mảng sau khi hoán đổi
    for (let index = 0; index < myArray.length; index++) {
        result6 += myArray[index] + ' ';
    }

    // output
    queSel('#output6').innerHTML = 'Kết quả sau khi hoán đổi là: ' + result6;
}


/* 7. Sắp xếp tăng dần */
queSel('#btnSort').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress: dùng phương thức sort & tạo hàm so sánh phần tử để sắp xếp tăng dần
    let sortArr = myArray.sort(function (a, b) {
        return a - b;
    });

    // output
    queSel('#output7').innerHTML = 'Mảng sắp xếp tăng dần: ' + sortArr;
}


/* 8. Tìm số nguyên tố đầu tiên trong mảng */
// Tạo hàm kiểm tra số nguyên tố
function checkPrimeNum(n) {
    if (n < 2) {
        return false;
    }
    else if (n === 2) {
        return true;
    }
    else if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
queSel('#btnFirstPrimeNum').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let result8 = '';
    // duyệt mảng để tìm số nguyên tố
    for (let index = 0; index < myArray.length; index++) {
        let checkPN = checkPrimeNum(myArray[index]);
        if (checkPN) {
            result8 = 'Số nguyên tố đầu tiên: ' + myArray[index];
            // dừng vòng lặp ngay tại thời điểm tìm thấy số nguyên tố đầu tiên
            break;
        }
    }

    // output
    queSel('#output8').innerHTML = result8;
}


/* 9. Đếm số nguyên trong mảng */
queSel('#btnInteger').onclick = function () {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let countInt = 0; // khai báo biến đếm số nguyên
    for (let index = 0; index < myArray.length; index++) {
        if (Number.isInteger(myArray[index])) {
            countInt++;
        }
    }

    // output
    queSel('#output9').innerHTML = 'Số lượng các số nguyên: ' + countInt;
}


/* 10. So sánh số lượng số âm & số dương */
queSel('#btnCompare').onclick = function(){
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let countPos = 0; // khai báo biến đếm số dương
    let countNeg = 0; // khai báo biến đếm số âm
    let result10 = '';
    // duyệt mảng để đếm số dương & số âm
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > 0) {
            countPos++;
        } 
        else if (myArray[index] < 0) {
            countNeg++;
        }
    }
    // so sánh số lượng số dương & số âm
    if (countPos > countNeg) {
        result10 = 'Số dương > Số âm';
    } 
    else if (countPos < countNeg) {
        result10 = 'Số dương < Số âm';
    }
    else {
        result10 = 'Số dương = Số âm';
    }

    // output
    queSel('#output10').innerHTML = result10;
}