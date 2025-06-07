const hadithElement = document.getElementById('hadith');
const btnElement = document.getElementById('btn');
const sourceElement = document.getElementById('source');
const feedbackElement = document.getElementById('feedback-message');

let schollars = ['bukhari', 'muslim', "abu-daud", "ahmad", "darimi", "ibnu-majah", "malik", "nasai", "tirmidzi" ]

const scholarTranslations = {
  'bukhari': 'صحيح البخاري',
  'muslim': 'صحيح مسلم',
  'abu-daud': 'سنن أبي داود',
  'ahmad': 'مسند أحمد',
  'darimi': 'سنن الدارمي',
  'ibnu-majah': 'سنن ابن ماجه',
  'malik': 'موطأ مالك',
  'nasai': 'سنن النسائي',
  'tirmidzi': 'سنن الترمذي'
};


const fetchHadith = async () => {
    feedbackElement.textContent = "جار التحميل..."; // Loading...
    hadithElement.textContent = ""; // Clear previous hadith
    sourceElement.textContent = ""; // Clear previous source
    hadithElement.style.opacity = 0;
    sourceElement.style.opacity = 0;

    try {
    const response = await fetch('https://api.hadith.gading.dev/books/'+schollars[getRandomScholarIndex()]+'/'+getRandomNumber());
    const data = await response.json();

    const arabicText = data.data.contents.arab;
    const source = data.data.id;
    // const number = data.data.contents.number; // This variable is not used
    

//thats for changing the value for each tag in the HTML code 
    hadithElement.textContent = arabicText;//متن الحديث
    sourceElement.textContent = scholarTranslations[source] || source;

    hadithElement.style.opacity = 1;
    sourceElement.style.opacity = 1;
    feedbackElement.textContent = ""; // Clear loading message
    } catch (error) {
    console.error('Error fetching hadith:', error);
    feedbackElement.textContent = "فشل تحميل الحديث. يرجى المحاولة مرة أخرى."; // Failed to load Hadith. Please try again.
    hadithElement.textContent = ""; // Clear hadith text on error
    sourceElement.textContent = ""; // Clear source text on error
    // Ensure opacity is reset or handled if error occurs before elements are shown
    hadithElement.style.opacity = 1; // Or 0 if preferred to hide on error too
    sourceElement.style.opacity = 1; // Or 0 if preferred to hide on error too
    }
};


btnElement.addEventListener('click', fetchHadith);




// for random numvers
const getRandomNumber = () => {
    return Math.floor(Math.random() * 2000) + 1;
};
const getRandomScholarIndex = () => { return Math.floor(Math.random() * schollars.length); };