const books = require('./database');
const readline = require('readline-sync');
let result;

const inputStart = readline.question(
	'Deseja buscar livros duma categoria específica? S/N\n',
);

if (inputStart.toLocaleUpperCase() === 'S') {
	console.log('\nCategorias disponíveis:');
	console.log('Estilo de vida, Produtividade, Tecnologia\n');
	const inputCategory = readline.question('Qual você escolhe?\n');
	
	result = books.filter(
		(book) =>
			book.category.toLocaleUpperCase() === inputCategory.toLocaleUpperCase(),
	);
} else {
	console.log('\nEsses são todos os livros disponíveis:');
	result = books.sort((a, b) => a.pages - b.pages);
}
console.table(result, ['name', 'author', 'category', 'pages']);
