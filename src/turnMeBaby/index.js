/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  let arr = str.split("");
  let new_arr = [];
  for (let i = arr.length; i >= 0; i--) {
      new_arr.push(arr[i]);
  }
  return new_arr.join("");
};
export default turnMeBaby;
