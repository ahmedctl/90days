document.addEventListener("DOMContentLoaded", function() {
    // Set the start date to the static date
    const startDate = new Date('2024-08-25');
    document.getElementById('start-date').innerText = startDate.toDateString();

    // Set the countdown duration (90 days)
    const countdownDays = 90;
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + countdownDays);

    // Calculate the number of days passed and days left
    const currentDate = new Date();
    const daysPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const daysLeft = countdownDays - daysPassed;

    // Update the HTML content
    document.getElementById('days-passed').innerText = daysPassed >= 0 ? daysPassed : 0;
    document.getElementById('days-left').innerText = daysLeft >= 0 ? daysLeft : 0;

    // Display a random quote
    displayRandomQuote();
});

function displayRandomQuote() {
    const quotes = [
        " (البقرة - 45) وَٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَٰشِعِينَ",
        "(البقرة - 153) يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ ",
        "[ البقرة: 155] وَلَنَبۡلُوَنَّكُم بِشَيۡءٖ مِّنَ ٱلۡخَوۡفِ وَٱلۡجُوعِ وَنَقۡصٖ مِّنَ ٱلۡأَمۡوَٰلِ وَٱلۡأَنْفُسِ وَٱلثَّمَرَٰتِۗ وَبَشِّرِ ٱلصَّـٰبِرِينَ",
        "(آل عمران - 120) إِن تَمۡسَسۡكُمۡ حَسَنَةٞ تَسُؤۡهُمۡ وَإِن تُصِبۡكُمۡ سَيِّئَةٞ يَفۡرَحُواْ بِهَاۖ وَإِن تَصۡبِرُواْ وَتَتَّقُواْ لَا يَضُرُّكُمۡ كَيۡدُهُمۡ شَيۡـًٔاۗ إِنَّ ٱللَّهَ بِمَا يَعۡمَلُونَ مُحِيطٞ",
        "(آل عمران - 200) يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ ",
        "(يونس - 109) وَٱتَّبِعۡ مَا يُوحَىٰٓ إِلَيۡكَ وَٱصۡبِرۡ حَتَّىٰ يَحۡكُمَ ٱللَّهُۚ وَهُوَ خَيۡرُ ٱلۡحَٰكِمِينَ ",
        "(هود - 11) إِلَّا ٱلَّذِينَ صَبَرُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ أُوْلَـٰٓئِكَ لَهُم مَّغۡفِرَةٞ وَأَجۡرٞ كَبِيرٞ",
        "[ هود: 115] وَٱصۡبِرۡ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجۡرَ ٱلۡمُحۡسِنِينَ",
        " [ النحل: 42] ٱلَّذِينَ صَبَرُواْ وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ",
        "اللَّهمَّ إنِّي أسألُكَ الهُدى والتُّقى والعَفافَ والغِنى",
        "اللَّهُمَّ إنِّي أعُوذُ بكَ مِنَ الهَمِّ والحَزَنِ، والعَجْزِ والكَسَلِ، والجُبْنِ والبُخْلِ، وضَلَعِ الدَّيْنِ، وغَلَبَةِ الرِّجَالِ",
        "اللهمَّ أَصلِحْ لي دِيني الذي هو عصمةُ أمري ، و أَصلِحْ لي دنياي التي فيها معاشي ، و أَصلِحْ لي آخرَتي التي فيها مَعادي ، و اجعلِ الحياةَ زيادةً لي في كل خيرٍ ، و اجعلِ الموتَ راحةً لي من كلِّ شرٍّ",
        "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَن زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
        "اللَّهمَّ إني أعوذُ بك من قلبٍ لا يخشعُ ومن نفسٍ لا تشبعُ وعلمٍ لا ينفعُ ودعوةٌ لا يُستجابُ لها",
        " اللهمَّ إنَّي أعوذُ بك من زوالِ نعمَتِك ، و تَحَوُّلِ عافيَتِك ، و فجْأةِ نقمتِك ، و جميعِ سَخَطِك"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote-text").innerText = randomQuote;
}
