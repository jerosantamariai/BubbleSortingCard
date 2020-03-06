

function drawcard() {

    let inputnum = document.getElementById("cardnum").value;
    console.log(inputnum);

    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let colors = ['spade', 'cubs', 'hearts', 'diamonds'];

    let rn1 = Math.floor(Math.random() * cards.length);
    let rn2 = Math.floor(Math.random() * colors.length);

    document.querySelector(".number").innerHTML = card(cards[rn1]);
    document.querySelector(".number").classList.add(colors[rn2]);

    function card(num) {
        switch (num) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return num;
        }
    }
}