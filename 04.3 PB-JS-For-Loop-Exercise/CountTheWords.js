function countTheWords(text){
    let spaces=0;
    for(let index=0; index<text.length; index++){
        let symbols=text[index];
        if(symbols===" "){
            spaces+=1;
        }
    }
    let words=spaces+1;
    if(words>10){
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}
countTheWords("his message has exactly eleven words. One more as it's allowed!")