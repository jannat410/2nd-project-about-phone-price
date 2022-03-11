
// document.getElementById('btn1').addEventListener('click', function (){
//     handleProduct(false);
//     const minusClick = document.getElementById('inpt1');
    
//     const prs = parseInt(minusClick.value);
//     const cnvts = prs - 1;
    
//    minusClick.value=cnvts;

//    const amnt = document.getElementById('amount');
//    const pp = amnt.innerText;
//    const prs2 = parseInt(pp);
//    const cnvts2 = cnvts * 1219;

//    amnt.innerText=cnvts2;
// })

// function cnvt(id){
//     const frst = docu
// }

document.getElementById('phonePlus').addEventListener('click', function (){

    handleCase('phoneCollection', true);
    // const minusClick = document.getElementById('inpt1');
    
    // const prs = parseInt(minusClick.value);
    // const cnvts = prs + 1;
    
    // minusClick.value=cnvts;

    // const amnt = document.getElementById('amount');
    // const pp = amnt.innerText;
    // const prs2 = parseInt(pp);
    // const cnvts2 = cnvts* 1219;

    // amnt.innerText=cnvts2;

   
})

// function handleProduct(isIncrease){
//     const minusClick = document.getElementById('phoneCollection');
    
//     const prs = parseInt(minusClick.value);
//     // const cnvts = prs + 1;
//     let cnvts = prs;
//     if(isIncrease==true){
//         cnvts = prs+1;
//     }
//     if(isIncrease==false  && prs > 0){
//         cnvts=prs-1;
//     }

    
//     minusClick.value=cnvts;

//     const amnt = document.getElementById('amount');
//     const pp = amnt.innerText;
//     const prs2 = parseInt(pp);
//     const cnvts2 = cnvts* 1219;

//     amnt.innerText=cnvts2;
// }

document.getElementById('caseMinus').addEventListener('click', function(){
    // const collection = document.getElementById('caseCollection').value;
    // const exactCollection = parseInt(collection);
    // const newCollection = exactCollection-1;

    // document.getElementById('caseCollection').value=newCollection;

    
    // document.getElementById('casePrice').innerText = newCollection*59;
    handleCase('caseCollection', false);
});

document.getElementById('casePlus').addEventListener('click', function(){
    // const collection = document.getElementById('caseCollection').value;
    // const exactCollection = parseInt(collection);
    // const newCollection = exactCollection+1;

    // document.getElementById('caseCollection').value=newCollection;

    
    // document.getElementById('casePrice').innerText = newCollection*59;
    handleCase('caseCollection', true);
});

function handleCase(productCollection, upDown){
    const collection = document.getElementById(productCollection).value;
    const exactCollection = parseInt(collection);
    // const newCollection = exactCollection+1;
    let newCollection = exactCollection;
    if(upDown==true){
        newCollection=exactCollection+1;
    }
    if(upDown==false && exactCollection>0){
        newCollection=exactCollection-1;
    }

    document.getElementById(productCollection).value=newCollection;

    let productPrice = 0;
    if(productCollection=='phonePrice'){
        productPrice=newCollection*1219;
    }
    if(productCollection=='casePrice'){
        productPrice=newCollection*59;
    }

    
    document.getElementById(productCollection).innerText = productPrice;
};

// function handleCase(upDown){
//     const collection = document.getElementById('caseCollection').value;
//     const exactCollection = parseInt(collection);
//     // const newCollection = exactCollection+1;
//     let newCollection = exactCollection;
//     if(upDown==true){
//         newCollection=exactCollection+1;
//     }
//     if(upDown==false && exactCollection>0){
//         newCollection=exactCollection-1;
//     }

//     document.getElementById('caseCollection').value=newCollection;

    
//     document.getElementById('casePrice').innerText = newCollection*59;
// };



















