(function() {
let key = 10;
let alphabet = ['а','б','в','г','д',"е",'ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у'
,'ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];


function defineKey(newKey){
    key = newKey;
}


function encryptWord(word){
    
    let myWord = word.toLowerCase();
    var result = '';
    for(letter of myWord)
    {

       
         for(let i=0; i<=alphabet.length;i++) {

            if(letter == " ")
            {
            result+=" ";
            break;
            }

            if(letter == alphabet[i]){

              
            
            
            if((i+key)<=32){
             result+=alphabet[i+key];
             break
            }
             else{
             let sum = i+ key; 
             while(sum>32){
                 sum-=33;
             }
             result+=alphabet[sum];
            }//конец else
             


            }
         
            } 

    }
    return result;
}






function decryptWord(decodeWord){
    
    let myWord = decodeWord.toLowerCase();
    var result = '';
    for(letter of myWord)
    {

       
         for(let i=0; i<=alphabet.length;i++) {


            if(letter == " ")
            {
            result+=" ";
            break;
            }

            if(letter == alphabet[i]){

              
            
            
            if((i-key)>0){
             result+=alphabet[i-key];
             break
            }
             else{
             let difference = i - key; 
             while(difference<0){
                 difference+=33;
             }
             result+=alphabet[difference];
            }//конец else
             


            }
         
            } 

    }
    return result;
}

window.encryptWord = encryptWord;
window.decryptWord = decryptWord;
window.defineKey = defineKey;
})();