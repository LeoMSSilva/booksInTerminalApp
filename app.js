const books = require('./database');
const readline = require('readline-sync');

let result = books;

const categories = books.map((books) => ` ${books.category}`);
const myCategories = categories
	.filter((category, index) => index == categories.indexOf(category))
	.sort();
const read = (message) => readline.question(message + '\n');
const print = (message) => console.log(message + '\n');
const ordeneBooks = (books) => books.sort((a, b) => a.pages - b.pages);
const printBooks = (message, result) => {
	console.clear();
	print(message);
	result = ordeneBooks(result);
	console.table(result, ['name', 'author', 'category', 'pages']);
};

console.clear();
print('Vamos buscar livros juntos?');
let response = read('Possui uma categoria específica? S/N');

console.clear();
if (response.toLocaleUpperCase() === 'S') {
	print('Categorias disponíveis:' + myCategories);
	response = read('Qual você escolhe?');

	result = books.filter(
		(book) =>
			book.category.toLocaleUpperCase() === response.toLocaleUpperCase(),
	);

	console.clear();
	result.length == 0
		? print('A categoria seleciona não possui livros cadastrados!')
		: printBooks('Esses são todos os livros da sua categoria:', result);
} else {
	printBooks('Esses são todos os livros disponíveis:', result);
}
