async function fetchCharacters(type = 'all') {
  loading.classList.remove('hide');
  const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${type}.json`);
  const json = await response.json()
  return json;
}

function change(result) {
  container.innerHTML = '';
  let index;
  let oneRowContainer;
  for(let [index, character] of Object.entries(result)) {
    index++;
    if (index % 3 === 1) {
      oneRowContainer = document.createElement('div')
      oneRowContainer.className = 'flex mb-3';
    }
    const characterElement = document.createElement('div');
    characterElement.className = 'mr-2'
    const nameElement = document.createElement('p');
    nameElement.textContent = character.name;
    const imgElement = document.createElement('img');
    imgElement.className = 'image'
    imgElement.setAttribute('src', `/js_kimetsu_list${character.image}`);
    const categoryElement = document.createElement('p');
    categoryElement.textContent = character.category;
    characterElement.appendChild(nameElement);
    characterElement.appendChild(imgElement);
    characterElement.appendChild(categoryElement);
    oneRowContainer.appendChild(characterElement);

    if (index % 3 === 0) {
      container.appendChild(oneRowContainer);
    }
  }
  container.appendChild(oneRowContainer);
  loading.classList.add('hide');
}

const loading = document.querySelector('.loading');
fetchCharacters().then(change);

const container = document.querySelector('#list');
const allBtn = document.querySelector('#choice1');
const kisatsutaiBtn = document.querySelector('#choice2');
const hashiraBtn = document.querySelector('#choice3');
const oniBtn = document.querySelector('#choice4');

allBtn.addEventListener('click', () => {
  fetchCharacters(allBtn.value).then(change);
})

kisatsutaiBtn.addEventListener('click', () => {
  fetchCharacters(kisatsutaiBtn.value).then(change);
})

hashiraBtn.addEventListener('click', () => {
  fetchCharacters(hashiraBtn.value).then(change);
})

oniBtn.addEventListener('click', () => {
  fetchCharacters(oniBtn.value).then(change);
})
