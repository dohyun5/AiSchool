//comic 박스를 생성한 상태
//변수 선언
// var comic;
//comic 박스 안에 원피스 데이터를 할당한 상태
//변수 초기화
// comic = "원피스";

// console.log(comic);

//선언과 초기화를 한줄에 
// var apple = "사과";

/*
var a;
var b;
var c;
*/
//변수 동시 선언
// var a,b,c;

//변수 동시 초기화
/*
var d = 10;
var e = 20;
var f = 30;
*/
/*
var d = 10,
	e = 20,
	f = 30;
*/

//모든 변수는 선언과 동시에 undefined 자동으로 할당된다.
// var computer;
// console.log(computer)
/*
var house
house = "집";
console.log(house);

house = "아파트";
console.log(house);
*/
/*
var house;
console.log(house);
//undefined -> 집
house = "집";
console.log(house);
*/

//캐멀 케이스
// var mathScoreStudent = 10;

//스네이크 케이스
// var math_score_student = 10;

// 주의점
// var math-score-student = 100; 1. 일반 하이픈은 사용이 안됨. = 오류 

// 2. 변수명 앞에 특수문자는 _ $ 외에는 사용주의
// var _math;
// var $math;

// 3. 변수명 앞에 숫자가 먼저 나와서는 안된다
// var apple10;
// var 10apple; ->오류

// 4. 의미가 불분명한 변수명은 사용하지 않도록 한다.
// var w = 10; 

// 데이터의 종류 = 데이터 타입

// *원시 타입
// 문자열 string
// 숫자 number
// 논리 boolean (true false)
// undefined
// null

// *참조 타입
// 배열 array
// 함수 function
// 객체 object

// 문자열
/*
var msg1 = "Hello";
var msg2 = 'Welcome';

console.log(msg1);
console.log(msg2);

// var msg3 = "Nice to meet you';";

//she is girl
//she's girl
var msg4 = "She's girl"
var msg5 = 'She\'s girl'

console.log(msg4);
console.log(msg5);
*/
// 숫자 (number)
/*
var num1 = 10;
var num2 = -10;
var num3 = 3.14;
var num4 = -3.14;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(num1 + num2);
console.log(num1 + num3);
*/


//연산자 
//사칙연산
/*
var a = 20;
var b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //나머지 

//문자열 
var str1 = "20";
var str2 = "10";
console.log(str1 + str2); //덧셈만 예외적으로 글자를 이어붙임.
console.log(str1 - str2);
console.log(str1 * str2);
console.log(str1 / str2);
console.log(str1 % str2);

var firstName = "Dohyun"
var lastName = "Kim"

console.log(firstName + "        " + lastName);

var str11 = "현재 시간은 ";
var time = 10;
var str12 = "시 입니다.";

console.log(str11 + time + str12);
*/
/*
// ++ -- 연산자
var num10 = 10;

// num10 = num10 - 1;
// console.log(num10)
// console.log(--num10); //9
// console.log(--num10); //8

// console.log(++num10); //11
// console.log(++num10); //12

console.log(num10--); //출력을 우선하고 계산을 진행.
console.log(--num10); //계산을 하고 출력을 진행.
console.log(num10);
*/

// +=, -=, *=, /=, %=
/*
var num20 = 20;
// num20 = num20 + 10;
num20 += 10; //위의 식을 압축한것.

console.log(num20);
*/

//비교 연산자 >, <, ==, ===, <=, >=, !=, !== 결과값은 불리언으로 나옴.
/*
var a = 10;
var b = 20;
var c = 30;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b); //같다의 의미
console.log(a === b); //같다의 의미

console.log(a != b); //다르다의 의미
console.log(a !== b); //다르다의 의미
*/
/*
var num10 = 10;
var num20 = 20;

var str10 = "10";
var str20 = "20";

console.log(num10 == str10); // 단순하게 같은지 확인
console.log(num10 === str10); // 데이터 타입까지 같은지 확인. 좀 더 세밀함

console.log(num20 != str20); //단순하게 다른지 확인
console.log(num20 !== str20); // 데이터 타입까지 다른지 확인. 
*/

//논리 연산자  : and연산자(&&) or연산자(||)  
/*
var num30 = 30;
var num40 = 40;
var num50 = 30;

console.log(num30 === num40 && num30 === num50 && num40 !== num50); 
console.log(num30 === num40 || num30 === num50 || num40 > num50); 
*/


// 불리언 (boolean) : true , false
/*
console.log(true);
console.log(false);
console.log(1 === 2);
console.log(10 < 20);
console.log(10 === 10 || 20 === 30);

var bool = true;
bool = false;
*/










