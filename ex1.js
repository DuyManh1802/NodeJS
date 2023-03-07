//Bai 1: sap mang theo thu tu do tuoi giam dan
var classrooms = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name4', age: 27 }
]

var result1 = classrooms.sort((a, b) => b.age - a.age)
console.log(result1)

//Bai 2: chuyen mang da sap o bai 1 thanh 1 mang ten khac
var result2 = new Set(result1.map(item => item.name))
console.log(result2)

//Bai 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0, chuyển mảng vừa tạo thành mảng mới có giá trị từ 0->99, lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại
var temp = new Array(100).fill(0)
var result = temp.map((a, b) => b)
var temp1 = result3.filter(a => a % 5 != 0)
var result3 = temp1.reduce((a, b) => a + b)
console.log(result3)

//Bai 4: Viết code nhóm các user có cùng name và cộng tổng số count thành một mảng mới

var array4 = [
    { name: 'name 1', count: 13 },
    { name: 'name 3', count: 23 },
    { name: 'name 1', count: 25 },
    { name: 'name 2', count: 27 },
    { name: 'name 3', count: 20 },
    { name: 'name 2', count: 20 }
]
var result4 = array4.reduce((a, b) => {
    let index = a.findIndex((value) => value.name === b.name);
    index !== -1 ? a[index].count += b.count : a.push(b)
    return a;
}, [])

console.log(result4)







