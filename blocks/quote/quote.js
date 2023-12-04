export default function decorate(block){
    const quoteDiv = block.querySelector(':scope > div > div');
const blockquote = document.createElement(tagName: 'blockquote');
blockquote.innerHTML = `"${quoteDiv,innerHTML}"`;
quoteDiv.parentElement.replaceWidth(blockquote);

const authorDiv = block.querySelector(':scope > div > div');
if(authorDiv){
const p = document.createElement(tagName: 'p');
p.innerHTML = `<em> - ${authorDiv.innerText}</em>`;
authorDiv.parentElement.replaceWidth(p)
}
}