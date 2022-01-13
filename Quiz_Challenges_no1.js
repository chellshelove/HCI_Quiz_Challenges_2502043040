const lessThanTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tenthsLessThanHundred = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const numToEng = (number, words = []) => {
    if (number === 0) return words.length ? words.join(' ') : 'zero';
  if (number < 20) {
      words.push(lessThanTwenty[number]);
      return numToEng(0, words);
    } else if (number < 100) {
      words.push(tenthsLessThanHundred[Math.floor(number / 10)]);
      return numToEng(number % 10, words);
    } else if (number < 1000) {
      words.push(numToEng(Math.floor(number / 100)) + ' hundred');
      return numToEng(number % 100, words);
    }
  };