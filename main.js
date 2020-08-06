$(document).ready(function(){});

var menu=[];
//[]中括號這樣寫跟一個一個指定進去特定的欄位一樣，分別指定0,1,2....
menu[0]="東坡肉";
menu[1]="羊肉";
menu[2]="鮭魚";

// $("#menu").append("<li>"+menu[0]+"</li>");
// $("#menu").append("<li>"+menu[1]+"</li>");
// $("#menu").append("<li>"+menu[2]+"</li>");


menu=["東坡肉","蔥爆","鮭魚"];

//使用push在後面再推入一筆資料
menu.push("新疆烤山豬");

//for(變數開始的值;要繼續重複的條件;每次執行完的改變)
// i=i+1等於i++
for(var i=0;i<4;i++){
    $("#menu").append("<li class='dishes'>"+i+"."+menu[i]+"</li>");
}

var menu_html="";
menu_html+="<ul>";

// menu_html=menu_html+

//物件像是有名字欄位的陣列，每筆資料都有其名稱跟資料，像是屬性名稱是name(商店名稱)，商店名字是阿東熱炒。

shop={};
//用.來存取跟指定屬性的資料
// shop.name="阿東熱炒";
// shop.place="台北市宵夜路";
// shop.phone="02 12345678";

//{} 也就是俗稱的JSON(JS object)，屬性以逗點空開，每一筆屬性都用
// 名稱:值來表示，文字記得要雙引號刮起來
// 屬性的值不只可以是字串，更可以是上面提的陣列，把餐廳的菜單陣列放到店家的菜單屬性欄位裡面

shop={
    name: "阿東熱炒",
    place: "台北市宵夜路",
    phone: "02 12345678",
  
    menu: ["東坡肉","羊肉","鮭魚"]
  };

//用.來存取屬性的資料
$("#shop").append("<li>"+"商店名稱: "+""+shop.name+"</li>");
$("#shop").append("<li>"+"商店地址: "+""+shop.place+"</li>");
$("#shop").append("<li>"+"商店電話: "+""+shop.phone+"</li>");

//如果你要加很多html，可以把他們用一個變數存起來，等組合完之後一次加進去
//用一個大ul包起來(結尾記得加結束符號)
var menu_html="<ul>";
//shop.menu shop的menu屬性值是一個菜單陣列，所以這樣存取等於直接存取那個陣列
for(var i=0;i<shop.menu.length;i++){
   menu_html+="<li class='dishes'>"+i+"."+shop.menu[i]+"</li>";
}
menu_html+="</ul>";

//一次把我們組合好的html加到裡面去
$("#shop").append("<li>"+"品項與菜單: "+""+menu_html+"</li>");
