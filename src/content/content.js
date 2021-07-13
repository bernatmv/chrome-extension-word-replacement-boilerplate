const elements = document.getElementsByTagName('*');

const REPLACE_REGEX = /[word or phrase to replace]/gi // case insensitive
const REPLACEMENT_TEXT = 'your replacement text'

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    const node = element.childNodes[j];

    if (node.nodeType === 3) {
      const text = node.nodeValue;
      const replacedText = text.replace(REPLACE_REGEX, REPLACEMENT_TEXT);

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}