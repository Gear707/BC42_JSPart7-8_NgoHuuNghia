// Tạo hàm DOM qua selector
queSel = (selector) => document.querySelector(selector);

// Khởi tạo mảng ban đầu rỗng
const myArray = new Array();

// Tạo hàm có chức năng là khi click button "Thêm số" sẽ thêm phần tử mới vào mảng
queSel('#btnAdd').onclick = () => {
    // input
    let numN = +queSel('#numN').value;

    // progress
    // thêm giá trị user đã nhập vào cuối mảng
    myArray.push(numN);
    // ta có thể xóa giá trị mà user đã thêm vào để tiếp tục nhập một giá trị khác
    queSel('#numN').value = '';

    // output
    queSel('#output0').innerHTML = myArray;
};


/* 1. Tổng số dương */
queSel('#btnSum').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // lọc ra 1 mảng mới chỉ chứa các số dương lấy từ mảng ban đầu
    let posArray = myArray.filter(value => value > 0);
    // thực hiện tính tổng các phần tử trong mảng mới 
    let posSum = posArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // output
    queSel('#output1').innerHTML = 'Tổng các số dương: ' + posSum;
};


/* 2. Đếm số dương */
queSel('#btnPosNum').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress: lọc ra 1 mảng mới chỉ chứa các số dương lấy từ mảng ban đầu
    let posArray = myArray.filter(value => value > 0);

    // output: độ dài của mảng mới phản ánh đúng số lượng số dương đang có trong mảng gốc
    queSel('#output2').innerHTML = 'Có ' + posArray.length + ' số dương';
};


/* 3. Tìm số nhỏ nhất */
queSel('#btnMin').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // C1: dùng phương thức Math.min.apply để tìm số nhỏ nhất trong mảng
    // let minValue = Math.min.apply(null, myArray);

    // C2: dùng reduce để duyệt & so sánh từng phần tử trong mảng
    let minValue = myArray.reduce((previousValue, currentValue) => (previousValue < currentValue) ? previousValue : currentValue);

    // output
    queSel('#output3').innerHTML = 'Số nhỏ nhất: ' + minValue;
};


/* 4. Tìm số dương nhỏ nhất */
queSel('#btnMinPos').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // tạo mảng mới chứa các số dương được lấy từ mảng ban đầu
    let posArray = myArray.filter(value => value > 0);
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
};


/* 5. Tìm số chẵn cuối cùng */
queSel('#btnLastEven').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    // khởi tạo mảng mới chứa các số chẵn được lấy từ mảng ban đầu
    let evenArray = myArray.filter(value => value >= 0 && value % 2 === 0)
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
};


/* 6. Đổi vị trí hai phần tử bất kì trong mảng */
// Tạo hàm hoán đổi vị trí của 2 phần tử bất kì trong mảng
const swapElements = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

queSel('#btnSwap').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let firstIndex = +queSel('#firstIndex').value;
    let secondIndex = +queSel('#secondIndex').value;
    // gọi hàm hoán đổi vị trí
    swapElements(myArray, firstIndex, secondIndex);

    // output
    queSel('#output6').innerHTML = 'Kết quả sau khi hoán đổi là: ' + myArray;
};


/* 7. Sắp xếp tăng dần */
queSel('#btnSort').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress: dùng phương thức sort & tạo hàm callback để sắp xếp tăng dần
    let sortArr = myArray.sort((a, b) => a - b);

    // output
    queSel('#output7').innerHTML = 'Mảng sắp xếp tăng dần: ' + sortArr;
};


/* 8. Tìm số nguyên tố đầu tiên trong mảng */
// Tạo hàm kiểm tra số nguyên tố
checkPrimeNum = (n) => {
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
};

queSel('#btnFirstPrimeNum').onclick = () => {
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
};


/* 9. Đếm số nguyên trong mảng */
queSel('#btnInteger').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress: tạo mảng mới chỉ chứa các số nguyên được lấy từ mảng ban đầu
    let intArray = myArray.filter(value => Number.isInteger(value))

    // output: độ dài của mảng mới phản ánh đúng số lượng số nguyên đang có trong mảng gốc
    queSel('#output9').innerHTML = 'Số lượng các số nguyên: ' + intArray.length;
};


/* 10. So sánh số lượng số âm & số dương */
queSel('#btnCompare').onclick = () => {
    // input: mảng myArray chứa các phần tử user đã nhập

    // progress
    let result10 = '';
    
    // lọc ra 1 mảng mới chỉ chứa các số dương lấy từ mảng ban đầu
    let posArray = myArray.filter(value => value > 0);
    // lọc ra 1 mảng mới chỉ chứa các số âm lấy từ mảng ban đầu
    let negArray = myArray.filter(value => value < 0);

    if (posArray.length > negArray.length) {
        result10 = 'Số dương > Số âm';
    }
    else if (posArray.length < negArray.length) {
        result10 = 'Số dương < Số âm';
    }
    else {
        result10 = 'Số dương = Số âm';
    }

    // output
    queSel('#output10').innerHTML = result10;
};