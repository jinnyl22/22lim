const itemList = []
// 70인 이유는 tiled상 지도의 너비가 70이기 때문
// for (let i = 0; i < item_td.length; i++) {
//     itemList.push(item_td)

//     // console.log(collisions.slice(i, 70 + i)); 이렇게 반복하면서 배열안에 0과 1025를 콘솔로 구분할 수
//     // 있다.
// }
    
// let playPage = document.querySelector('.playPage');
// let startPage = document.querySelector('.startPage');
// let test = document.querySelector('.test');
// let test2 = document.querySelector('.test2');


window.onload =function(){
    _startPage.style.zIndex = 999;

}

// const mainButton = false
main_button.onclick = function(){
        _settingBoard.style.zIndex = 0;
        _startPage.style.zIndex = 999;
}
// }======================================================================
loadfile_button.onclick = function(){
    _settingBoard.style.zIndex = 0;
    _loadFiled.style.zIndex = 999;
//     // if(loadFiled.style.zIndex = 999){
//         console.log("들어오긴하냐?2");
        
//     // }
//     if(window.onkeydown(event)){
        
//         // switch (key) {
//         //     case "Escape":
//         //     loadFiled.style.zIndex = 0;
                
//         // }
//         if(event.key == "Escape"){
//             loadFiled.style.zIndex = 0;
//         }
//     }
}
//======================================================================


startBtn.onclick = function(){
        // if(!playPage.classList.contains("test")){
        //     playPage.classList.add("test")
        //     startPage.classList.add("test2")
            
        // }else{
        //     playPage.classList.remove("test")
        //     startPage.classList.remove("test2")
        // }
        document.querySelectorAll('#container_box>div').forEach(el => {
            el.style.zIndex = "";
        })
        // let mas=
        _prolog.style.zIndex = 999;
        mapState = "_prolog";
    };
    // 하위 인벤토리 창이 먼저 뜨고 거기에 엑스레이 필름을 누르면  상위 보드 뜨게 하기


    
let isSettingBoardView = false;
let isInventoryView = false;
let isInventory = new Inventory([]);

function itemget(){
    // let tr = document.createElement('tr');
    // let td = document.createElement('td');
    // let td2 = document.createElement('td');
    // td.id = "item_td";
    // td2.id = "item_td";
    // tr.appendChild(td);
    // tr.appendChild(td2);
    // item.appendChild(tr);
    // query 반환값 배열
    let items = item.querySelectorAll('.item_td');
    isInventory.insert(new Item("사과","맛있다"));
    // isInventory.insert(new Item("바나나","맛없다"));
    // isInventory.insert(new Item("애플","하"));
    // isInventory.insert(new Item("체리","집가고싶어"));
    let arr = isInventory.importList();
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        if(i < arr.length)
        {
            items[i].innerHTML = arr[i].name;
            items[i].classList.add('have');
            items[i].onclick = function(){
                _item_use.style.zIndex = 9999;
                item_text.querySelector('span').innerHTML = arr[i].text;            
            };
        }   
        else{
            items[i].innerHTML = "";
            items[i].classList.remove('have');
        }
    }
}

window.addEventListener('keydown',function(e){
    if(mapState === "_playPage")
    if(e.keyCode === 32)
    {
        // 아이템 추가 함수
        itemget();
    }
})

let settingBoardView = false
console.log(isInventory.importList());
window.onkeydown = function(event){
    if(mapState === "_playPage")
    if(event.key == "i"){
        if(isInventoryView){
            console.log(lowInven);
            _item_use.style.zIndex = 0;
            lowInven.style.zIndex = 0;
            isPopupOpen = false;
            isInventoryView = false;
        }else if(isPopupOpen === false){
            lowInven.style.zIndex = 999;
            isPopupOpen = true;
            isInventoryView = true;
        }
        
    }
    if(mapState === "_playPage")
    if(event.key == "Escape"){
        if(settingBoardView){
            _settingBoard.style.zIndex = 0;
            isPopupOpen = false;
            settingBoardView= false;
        }else if(isPopupOpen === false){
            _settingBoard.style.zIndex = 999;
            isPopupOpen = true;
            settingBoardView = true;
        }
        if(_loadFiled.style.zIndex="999"){
            _loadFiled.style.zIndex = 0 ;
        }
    }
}

// window.onkeydown = function(event){
//     if(mapState === "playPage")
//     if(event.key == "Escape"){
//         if(settingBoardView){
//             console.log(settingBoard)
//         }
//     }
// }

// settingBoard
// putitem
// use 버튼 누르면 위 함수를 실행하게끔
// 

// 키보드 입력 이벤트
// window.onkeydown = function(event){
//     // _input 이기에 이벤트는 keyboardEvent
//     console.log(event); // 이벤트 객체
//     console.log(event.keyCode); // 키보드의 아스키코드가 나옴(한글은 229만 나옴)
//     console.log(event.key);     // 키보드의 키(숫자, 영문만) 엔터도 나옴
// }
let prolSkip = document.querySelector(".prolSkip")
 

// function btnSkip(event){
//     event.push = ".prolSkip"
//     event.style.fontSize = "27px";
// }

prolSkip.onclick = function(){
    document.querySelectorAll('#container_box>div').forEach(el => {
            el.style.zIndex = "";
        })
        _playPage.style.zIndex = 999;
        
        mapState = "_playPage";
        // // setTimeout(function() {
        // //     // event.prolSkip.style.fontSize = "27px";
        // //     console.log("됨?")
        // // }, 3000);
        // setTimeout(btnSkip,3000);
        
}

function paragraph(element) {
  const array = element.innerText.split('')
  const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*']
  const exception = [' ', '\n', '.', ',']
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const numArray = []
  array.forEach(char => {
    const num = random(5, 40)
    numArray.push(num)
  })

  let completeCount
  let newText
  const timer = setInterval(() => {
    completeCount = 0
    newText = ''
    numArray.forEach((num, i) => {
      if (exception.includes(array[i]) || numArray[i] === 0) {
        newText += array[i]
        completeCount += 1
      } else {
        newText += special[numArray[i] % special.length]
        numArray[i] = --num
      }
    })

    element.innerText = newText
    if (completeCount === numArray.length) clearInterval(timer)
  }, 120)
}

const prologText = document.getElementById('prolog_text')
paragraph(prologText);

const divArr = document.querySelectorAll('container_box>div');
// forEach 이용

console.log(divArr);
document.querySelectorAll('container_box>div').forEach(el => {
    el.style.zIndex = "";
})