const hadithElement = document.getElementById('hadith');
const btnElement = document.getElementById('btn');
const numberElement = document.getElementById('number');
const sourceElement = document.getElementById('source');

let schollars = ['bukhari', 'muslim'];


const fetchHadith = async () => {
    try {
    const response = await fetch('https://api.hadith.gading.dev/books/'+schollars[getRandomNumberFrom1To2()-1]+'/'+getRandomNumber());
    const data = await response.json();

    const arabicText = data.data.contents.arab;
    const source = data.data.id
    const number = data.data.contents.number+1;
    

//thats for changing the value for each tag in the HTML code 
    hadithElement.textContent = arabicText;//متن الحديث

    //راوي الحديث
    if (source === 'bukhari') {
        sourceElement.textContent = 'صحيح البخاري';
    }
    else if (source === 'muslim') {
        sourceElement.textContent = 'صحيح مسلم';
    }
    } catch (error) {
    console.error('Error fetching hadith:', error);
    }
};


btnElement.addEventListener('click', fetchHadith);




// for random numvers
const getRandomNumber = () => {
    return Math.floor(Math.random() * 4000) + 1;
};
const getRandomNumberFrom1To2 = () => {
    return Math.floor(Math.random() * 2) + 1;
};