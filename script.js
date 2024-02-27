const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('onKeyStroke', searchHandler)

function search(str) {
	let results = [];
	const filtered = (fruit.filter(fruit => fruit.toLowerCase().includes(str)));
	filtered.forEach(fruit => results.push(fruit));
	return results;
}

function searchHandler(e) {
	const searchStr = e.target.value.trim();
	if (searchStr === '') {
		suggestions.style.display = 'none';
	} else {
		const searchResult = search(searchStr);
		showSuggestions(searchResult);
	}
}

function showSuggestions(results) {
	suggestions.innerHTML = '';

	const limitedResults = results.slice(0, 10);
	limitedResults.forEach(result => {
		const suggestionItem = document.createElement('li');
		suggestionItem.textContent = result;
		suggestionItem.classList.add('suggestion');
		suggestions.appendChild(suggestionItem);
	});
	suggestions.style.display = results.length > 0 ? 'block' : 'none';
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		const selected = e.target.textContent;
		input.value = selected;
		suggestions.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

