//String Anagram
// 'hello' => 'llheo'
// 'hello' => 'llleo'

//condition 1.check length for both strings.
//2.Number of letters should be same but arrangement can be different
//{h:1,e:1,l:2,o:1}

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let counter = {};

  for (let letters of str1) {
    counter[letters] = (counter[letters] || 0) + 1;
    console.log(counter[letters]);
  }

  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const check = isAnagram("hello", "llelo");
console.log(check);
