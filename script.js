//need to pull out a random number.
//use math.random(list.length) to get a random card.


const output = (cardList, randomCardNumber) => {
    //do something
    let cardImage = document.querySelector(".card-image");
    let imageName = `https://api.scryfall.com/cards/${cardList[randomCardNumber].identifiers.scryfallId}?format=image`
    cardImage.setAttribute('src', imageName)
    document.querySelector(".card-name").textContent = cardList[randomCardNumber].name;
    document.querySelector(".type").textContent = cardList[randomCardNumber].type;
    document.querySelector(".power-toughness").textContent = `${cardList[randomCardNumber].power}/${cardList[randomCardNumber].toughness}`;
    document.querySelector(".rarity").textContent = cardList[randomCardNumber].rarity.charAt(0).toUpperCase() + cardList[randomCardNumber].rarity.slice(1);
    document.querySelector(".mana-cost").textContent = cardList[randomCardNumber].manaCost;
    document.querySelector(".text").textContent = cardList[randomCardNumber].text;
    document.querySelector(".flavor-text").textContent = cardList[randomCardNumber].flavorText;

};
const testStats = () => {
    if (document.querySelector('.power-toughness').textContent == 'undefined/undefined') {
        document.querySelector('.power-toughness').textContent = 'Not a creature'
    }
    if (document.querySelector('.mana-cost').textContent == '') {
        document.querySelector('.mana-cost').textContent = 'No cost'
    }
}


fetch('./PAFR.json')
    .then(response => response.json())
    .then(cardData => {
        cardList = cardData.data.cards;
        randomCardNumber = Math.floor(Math.random() * cardList.length);
        output(cardList, randomCardNumber);
        testStats()
    });


   // document.querySelector(".power-toughness").textContent = `${cardList[randomCardNumber].power}/${cardList[randomCardNumber].toughness}`;
