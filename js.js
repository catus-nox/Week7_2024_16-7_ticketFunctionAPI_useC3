// let data = [
//  {
//   "id": 0,
//   "name": "肥宅心碎賞櫻3日",
//   "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//   "area": "高雄",
//   "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//   "group": 87,
//   "price": 1400,
//   "rate": 10
//  },
//  {
//   "id": 1,
//   "name": "貓空纜車雙程票",
//   "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//   "area": "台北",
//   "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//   "group": 99,
//   "price": 240,
//   "rate": 2
//  },
//  {
//   "id": 2,
//   "name": "台中谷關溫泉會1日",
//   "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//   "area": "台中",
//   "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//   "group": 20,
//   "price": 1765,
//   "rate": 7
//  }
// ];


axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
 .then(function (response) {
  // handle success
  let data = response.data;
  ready(data);
 })
 .catch(function (error) {
  // handle error
  console.log(error);
 })
 .finally(function () {
  // always executed
 });

/**
 *
2) 旅遊套票新增功能

產品功能：

- 新增資料時，下方也會多出第四筆跟第五筆…
- 完成地區篩選資料

注意事項：

o- 地區篩選請用 change 監聽
- 上方的「景點地區」跟下方「地區搜尋」都先寫依照下拉選項寫
- 地區的篩選下拉需要加上『全部地區』option
- 預設資料為 3 筆
- 篩選後會顯示『搜尋資料為 ? 筆』
- 星級區間是 1-10 分
o- 金額、組數、星級的 type 為 Number

**/
function ready(data) {

 let ticketName = document.querySelector('#ticketName');
 let ticketNameMessage = document.querySelector('#ticketName-message');
 let ticketImgUrl = document.querySelector('#ticketImgUrl');
 let ticketImgUrlMessage = document.querySelector('#ticketImgUrl-message');
 let ticketRegion = document.querySelector('#ticketRegion');
 let ticketRegionMessage = document.querySelector('#ticketRegion-message');
 let ticketPrice = document.querySelector('#ticketPrice');
 let ticketPriceMessage = document.querySelector('#ticketPrice-message');
 let ticketNum = document.querySelector('#ticketNum');
 let ticketNumMessage = document.querySelector('#ticketNum-message');
 let ticketRate = document.querySelector('#ticketRate');
 let ticketRateMessage = document.querySelector('#ticketRate-message');
 let ticketDescription = document.querySelector('#ticketDescription');
 let ticketDescriptionMessage = document.querySelector('#ticketDescription-message');

 let addTicketBtn = document.querySelector('.addTicket-btn');
 let ticketCardArea = document.querySelector('.ticketCard-area');
 let searchResultText = document.querySelector('#searchResult-text');
 let regionSearch = document.querySelector('.regionSearch');

 let selectRegion = '';


 let areaData = {
  "taipei": 0,
  "kaohsiung": 0,
  "taichung": 0,
 }
 ticketRegion.addEventListener("change", function (e) {
  selectRegion = e.target.value;
 });

 let str = `
<li class="ticketCard">
<div class="ticketCard-img">
  <a href="#">
    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true" alt="" />
  </a>
  <div class="ticketCard-region">高雄</div>
  <div class="ticketCard-rank">10</div>
</div>
<div class="ticketCard-content">
  <div>
    <h3>
      <a href="#" class="ticketCard-name">綠島自由行套裝行程</a>
    </h3>
    <p class="ticketCard-description">嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。</p>
  </div>
  <div class="ticketCard-info">
    <p class="ticketCard-num">
      <span><i class="fas fa-exclamation-circle"></i></span>
      剩下最後 <span id="ticketCard-num"> 87 </span> 組
    </p>
    <p class="ticketCard-price">TWD <span id="ticketCard-price">$1400</span></p>
  </div>
</div>
</li>
<li class="ticketCard">
<div class="ticketCard-img">
  <a href="#">
    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true" alt="" />
  </a>
  <div class="ticketCard-region">台北</div>
  <div class="ticketCard-rank">2</div>
</div>
<div class="ticketCard-content">
  <div>
    <h3>
      <a href="#" class="ticketCard-name">清境高空觀景步道</a>
    </h3>
    <p class="ticketCard-description">清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。</p>
  </div>
  <div class="ticketCard-info">
    <div class="ticketCard-num">
      <p>
        <span><i class="fas fa-exclamation-circle"></i></span>
        剩下最後 <span id="ticketCard-num"> 99 </span> 組
      </p>
    </div>
    <p class="ticketCard-price">TWD <span id="ticketCard-price">$240</span></p>
  </div>
</div>
</li>
<li class="ticketCard">
<div class="ticketCard-img">
  <a href="#">
    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true" alt="" />
  </a>
  <div class="ticketCard-region">台中</div>
  <div class="ticketCard-rank">7</div>
</div>
<div class="ticketCard-content">
  <div>
    <h3>
      <a href="#" class="ticketCard-name">山林悠遊套票</a>
    </h3>
    <p class="ticketCard-description">山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。</p>
  </div>
  <div class="ticketCard-info">
    <div class="ticketCard-num">
      <p>
        <span><i class="fas fa-exclamation-circle"></i></span>
        剩下最後 <span id="ticketCard-num"> 20 </span> 組
      </p>
    </div>
    <p class="ticketCard-price">TWD <span id="ticketCard-price">$1765</span></p>
  </div>
</div>
</li>
`;

 function validate() {
  ticketNameMessage.textContent = "";
  ticketImgUrlMessage.textContent = "";
  ticketRegionMessage.textContent = "";
  ticketDescriptionMessage.textContent = "";
  ticketNumMessage.textContent = "";
  ticketRateMessage.textContent = "";
  ticketPriceMessage.textContent = "";

  if (ticketName.value === '') {
   alert("請輸入套票名稱");
   ticketNameMessage.textContent = "請輸入套票名稱";
   return false;
  }
  if (ticketImgUrl.value === '') {
   alert("請輸入圖片網址");
   ticketImgUrlMessage.textContent = "請輸入圖片網址";
   return false;
  }
  if (selectRegion === '') {
   alert("請選擇選取地區");
   ticketRegionMessage.textContent = "請選擇選取地區";
   return false;
  }
  if (!(/^[0-9]*$/).test(ticketNum.value) || ticketNum.value <= 0) {
   alert("請輸入套票數量");
   ticketNumMessage.textContent = "請輸入套票數量";
   return false;
  }
  if (!(/^([1-9]|10)$/).test(ticketRate.value)) {
   alert("請輸入套票價等級，1-10，請輸入數字");
   ticketRateMessage.textContent = "請輸入套票價等級，1-10，請輸入數字";
   return false;
  }
  if (!(/^[0-9]*$/).test(ticketPrice.value) || ticketPrice.value <= 0) {
   alert("請輸入套票價格或請輸入數字");
   ticketPriceMessage.textContent = "請輸入套票價格或請輸入數字";
   return false;
  }
  if (!(/^.{1,100}$/).test(ticketDescription.value)) {
   alert("請輸入套票描述，限制100字");
   ticketDescriptionMessage.textContent = "請輸入套票描述，限制100字";
   return false;
  }
  return true;
 }


 function areaCount() {
  data.forEach((item) => {
   if (item.area === "台北") {
    areaData.taipei += 1;
   }

   if (item.area === "高雄") {
    areaData.kaohsiung += 1;
   }

   if (item.area === "台中") {
    areaData.taichung += 1;
   }
  })
  chartfunction();
 }

 areaCount();


 addTicketBtn.addEventListener("click", () => {
  if (validate()) {
   data.push({
    "id": data.length,
    "name": ticketName.value,
    "imgUrl": ticketImgUrl.value,
    "area": selectRegion,
    "description": ticketDescription.value,
    "group": Number(ticketNum.value),
    "price": Number(ticketPrice.value),
    "rate": Number(ticketRate.value)
   });

   let lastNum = data.length - 1;
   let lastData = data[lastNum];
   let strAdd = `
    <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src=${lastData.imgUrl} alt="" />
      </a>
      <div class="ticketCard-region">${lastData.area}</div>
      <div class="ticketCard-rank">${lastData.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${lastData.name}</a>
        </h3>
        <p class="ticketCard-description">${lastData.description}</p>
      </div>
      <div class="ticketCard-info">
        <div class="ticketCard-num">
          <p>
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num">${lastData.group}</span> 組
          </p>
        </div>
        <p class="ticketCard-price">TWD <span id="ticketCard-price">${lastData.price}</span></p>
      </div>
    </div>
   </li>
    `;

   str += strAdd;
   ticketCardArea.innerHTML = str;
   searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
   areaCount();

   ticketName.value = "";
   ticketImgUrl.value = "";
   selectRegion.value = "";
   ticketDescription.value = "";
   ticketNum.value = "";
   ticketPrice.value = "";
   ticketRate.value = "";
  } else {
   return;
  }
 });

 regionSearch.addEventListener("change", function (e) {
  let strSearchOption = '';
  let selectOption = e.target.value;
  let infoNum = 0;

  console.log(selectOption);
  data.forEach((item) => {

   if (item.area === selectOption) {
    let lastData = item;
    let strAdd = `
   <li class="ticketCard">
   <div class="ticketCard-img">
     <a href="#">
       <img src=${lastData.imgUrl} alt="" />
     </a>
     <div class="ticketCard-region">${lastData.area}</div>
     <div class="ticketCard-rank">${lastData.rate}</div>
   </div>
   <div class="ticketCard-content">
     <div>
       <h3>
         <a href="#" class="ticketCard-name">${lastData.name}</a>
       </h3>
       <p class="ticketCard-description">${lastData.description}</p>
     </div>
     <div class="ticketCard-info">
       <div class="ticketCard-num">
         <p>
           <span><i class="fas fa-exclamation-circle"></i></span>
           剩下最後 <span id="ticketCard-num">${lastData.group}</span> 組
         </p>
       </div>
       <p class="ticketCard-price">TWD <span id="ticketCard-price">${lastData.price}</span></p>
     </div>
   </div>
  </li>
   `;
    strSearchOption += strAdd;
    infoNum += 1;
   }

   if (selectOption === '') {
    //全部地區
    strSearchOption = str;
    infoNum = data.length;
   }

  });
  searchResultText.textContent = `本次搜尋共 ${infoNum} 筆資料`;
  ticketCardArea.innerHTML = strSearchOption;

 });



 function chartfunction() {
  var chart = c3.generate({
   bindto: '#chart',
   data: {
    type: 'donut',
    columns: [
     ['data1', areaData.taipei],
     ['data2', areaData.taichung],
     ['data3', areaData.kaohsiung]
    ],
    colors: {
     data1: '#26C0C7',
     data2: '#5151D3',
     data3: '#E68618'
    },
    names: {
     data1: '台北',
     data2: '台中',
     data3: '高雄'
    }
   },
   donut: {
    title: "套票地區比重",
    width: 15,
    label: {
     format: function (value, ratio, id) {
      return; // 返回不帶百分比符號的值
     }
    }
   },
   size: {
    height: 250,
    width: 250
   }
  });
 }
 chartfunction();
}