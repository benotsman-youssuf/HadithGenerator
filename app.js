const hadithElement = document.getElementById('hadith');
const btnElement = document.getElementById('btn');
const numberElement = document.getElementById('number');
const sourceElement = document.getElementById('source');

let schollars = ['bukhari', 'muslim', "abu-daud", "ahmad", "darimi", "ibnu-majah", "malik", "nasai", "tirmidzi" ]


const fetchHadith = async () => {
    try {
    const response = await fetch('https://api.hadith.gading.dev/books/'+schollars[getRandomNumberFrom0To9()]+'/'+getRandomNumber());
    const data = await response.json();

    const arabicText = data.data.contents.arab;
    const source = data.data.id
    const number = data.data.contents.number;
    

//thats for changing the value for each tag in the HTML code 
    hadithElement.textContent = arabicText;//متن الحديث

    //راوي الحديث
    if (source === 'bukhari') {
        sourceElement.textContent = 'صحيح البخاري';
    }
    else if (source === 'muslim') {
        sourceElement.textContent = 'صحيح مسلم';
    }
    else if (source === 'abu-daud') {
        sourceElement.textContent = 'سنن أبي داود';
    }
    else if (source === 'ahmad') {
        sourceElement.textContent = 'مسند أحمد';
    }
    else if (source === 'darimi') {
        sourceElement.textContent = 'سنن الدارمي';
    }
    else if (source === 'ibnu-majah') {
        sourceElement.textContent = 'سنن ابن ماجه';
    }
    else if (source === 'malik') {
        sourceElement.textContent = 'موطأ مالك';
    }
    else if (source === 'nasai') {
        sourceElement.textContent = 'سنن النسائي';
    }
    else if (source === 'tirmidzi') {
        sourceElement.textContent = 'سنن الترمذي';
    }
    } catch (error) {
    console.error('Error fetching hadith:', error);
    }
};


btnElement.addEventListener('click', fetchHadith);




// for random numvers
const getRandomNumber = () => {
    return Math.floor(Math.random() * 2000) + 1;
};
const getRandomNumberFrom0To9 = () => { return Math.floor(Math.random() * 10); };