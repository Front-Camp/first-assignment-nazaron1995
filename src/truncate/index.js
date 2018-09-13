/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
  let arr = str.split("");
  let ready_arr = [];
  for(let i=0; i<length; i++){
      ready_arr.push(arr[i]);
  }
  ready_arr.push(replacer);
  
  return ready_arr.join("");
};

export default truncate;
