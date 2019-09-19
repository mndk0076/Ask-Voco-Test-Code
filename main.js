const input = document.querySelector('#keyword');
const submitBtn = document.querySelector('#submit');
const keywords = ['apple', 'banana', 'orange'];

submitBtn.addEventListener("click", search);

function search(){
    if(keywords.indexOf(input.value) >= 0){
        alert('Match (' +input.value+ ') found' );
    }else{
        alert('No Keyword(s) Found');
    }
}