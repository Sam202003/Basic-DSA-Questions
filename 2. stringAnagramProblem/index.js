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
//   This initializes an empty JavaScript object obj that will be used to store the frequency of each letter in the string s
  for (let letters of str1) {
    counter[letters] = (counter[letters] || 0) + 1;
    console.log(counter[letters]);
  }
//   This loop iterates through each character in the string s and counts the frequency of each character by storing it in the obj object using the character as the key. For example, if s is "hello", obj would be { h: 1, e: 1, l: 2, o: 1 }, representing the frequencies of each letter in s.
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
//   This loop iterates through each character in the string t. For each character, it checks if the character exists in the obj object. If the character does not exist or if its frequency is 0 (indicating that t has a character not present in s or has more occurrences than in s), it returns false, indicating that s and t cannot be anagrams. Otherwise, it decrements the frequency of that character in the obj object.
  return true;
}

const check = isAnagram("hello", "llelo");
console.log(check);
//o(n) linear time complexity