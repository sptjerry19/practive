// kiểm tra số nguyên dương

// C1:

const songuyenduong = function(value) {
    if (Number.isInteger(value) && value > 0) {
        return true;
    }

    return false;
}

// C2:

function songuyenDuong(value) {
    return (Number.isInteger(value) && value > 0);
}

// C3:

function soNguyenduong(value) {
    if (value > 0 && value % 1 == 0) {
        return true;
    }
    return false;
}

// C4:

let SoNguyenDuong = (value) => {
    return (value > 0 && value % 1 == 0);
};

console.log(songuyenduong(-1));
console.log(songuyenDuong(-5));
console.log(SoNguyenDuong(-5));