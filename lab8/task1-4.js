// (More challenging!) Write a function isPalindrome(word) that returns true if 
// word is a palindrome, i.e. it reads the same forwards and backwards. For 
// example, radar, civic and refer are all palindromes. If the word isn’t a 
// palindrome, return false.

function isPalindrome(word) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] != word[word.length - i - 1]) {
			return false;
		}
	}

	return true;
}

console.log(isPalindrome("hoot"));