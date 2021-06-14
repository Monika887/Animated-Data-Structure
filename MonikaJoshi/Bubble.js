let grid=document.querySelector('.grid')
let timeout=1000
let squares=[]

for(let i=0;i<10;i++){
    let square=document.createElement('div')
    square.setAttribute('id',i)
    square.innerHTML=10-i
    grid.append(square)
    square.push(square)
}

function bubble_sort()
{
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<(squares.length-i-1);j++)
        {
             setTimeout(() =>{
                 if(parseInt(squares[j].innerHTML)>parseInt(squares[j+1].innerHTML)){
                   if(j>0){
                       squares[j-i].classList.remove('excahange')
                       squares[j+i-1].classList.remove('excahange')
                   }
                   squares[j].classList.add('excahange')
                   squares[j+1].classList.add('excahange')
                   setTimeout(()=>{
                       let temp=squares[j].innerHTML
                       squares[j].innerHTML=squares[j+1].innerHTML
                       squares[j+1].innerHTML=temp}
                   }, 3000)
                   if(j==squares.length-i-2){
                       setTimeout(() =>{
                           squares[j].classList.remove('excahange')
                           squares[j+1].classList.remove('excahange')
                       }, 4000)
                   }

                 }
             }, timeout)

                timeout+=4000
        }
    }
}
bubble_sort()
{

}