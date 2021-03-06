/**
* @param {Object|String} val 传入的值
* @return {Object|String} 如果传入的值为 Object 类型，则返回 JSON 类型的对象，否则转换为 String 对象
*
* */

// 使用松散的 "==" 可以判断 值是否为 "null" 和 "undefined"
function toString(val) {
  return typeof val == null
    ? ''
    : typeof val === 'object' 
      ? JSON.stringify(val, null, 2) 
      : String(val);
}

/*
 * Test
 * */

const str = 'String';
const num = 10000;
const obj = {
  a: 1,
  b: 2
};

console.log(toString(str));  // String
console.log(toString(num));  // 10000
console.log(toString(obj));

/*
{
  "a": 1,
  "b": 2
}
*/
