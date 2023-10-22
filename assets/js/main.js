//1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.


//let a=2;
//let b=4;
//let c=6;

//let D=b**2-4*a*c;

//if (D>0){
   // let x1=(-b+Math.sqrt(D))/(2*a);
   // let x2=(-b-Math.sqrt(D))/(2*a);
    //console.log("kvadrat tenliyin iki helli var");
//} else if (D==0){
    //let x=-b/(2*a);
    //console.log("kvadrat tenliyin bir helli var");
//}else{
    //console.log("kvadrat tenliyin helli yoxdur");
//}



//2.a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

//let a=8;
//for ( let i=1;i<=1000;i++){
   // if( i% a ===0){
        //console.log(i);
    //}
//}




//const arr = [2, 4, 5, 9, 1];

//3. Bu massivin minimum elementini tapın: 

//const arr = [2, 4, 5, 9, 1];
//const minumumElement=Math.min(arr);
//console.log( minimumElement );






//4. Bu massivin maksimum elementini tapın:

//const arr = [2, 4, 5, 9, 1];
//const maksimumElement=Math.max(arr);
//console.log( maksimumElement );





//5. Bu massivin minimum elementinin indeksini tapın.

//const arr = [2, 4, 5, 9, 1];
//const minimumElement=Math.min(arr);
//const minimumElementIndex=arr.indexOf(minimumElement);
//console.log( maksimumElementIndex );






//6. Bu massivin maksimum elementinin indeksini tapın.

//const arr = [2, 4, 5, 9, 1];
//const maksimumElement=Math.max(arr);
//const maksimumElementIndex=arr.indexOf(maksimumElement);
//console.log( maksimumElementIndex );




//7. Tək indeksli massiv elementlərinin cəmini hesablayın

//const arr=[ 2,4,5,9,1];
//let cem=0;
//for (let i = 0; i < arr.length; i+=2) {
   //cem+=arr[i];
//}
//console.log(cem);




//8.Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

//const cumle="Mən Code Academy Tələbəsiyəm.";
//const kicikherfle=cumle.toLowerCase();
//console.log(kicikherfle);





//9.Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

//const metn= "            Mən Code Academydə Programing tədrisi alıram            ";
//const temizlenmismetn=metn.trim();
//console.log(temizlenmismetn);



//10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın:

//const cumle="Mən Code Academy Tələbəsiyəm.";
//const sozler=cumle.split("");
//console.log(sozler);


//11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.


const cumle="            Mən Code Academydə Programing tədrisi alıram            ";
const herfsayi=cumle.replace(/\s+/g,'').length;
console.log(herfsayi);
