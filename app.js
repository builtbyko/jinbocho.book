'use strict';

const shops = [
  {
    "id": "seishindo",
    "name": "誠心堂書店",
    "genre": "和本・漢籍・書道",
    "address": "神田神保町2-24",
    "lat": 35.69758,
    "lng": 139.75709,
    "description": "山本書店から独立した田中十蔵が開業。和本・書道・国漢系学術書を専門としてきた書店です。現在の建物は、戦前の商店街に多かった看板建築の形式を引き継いで、戦後に建てられました。",
    "source": "https://book-seishindo.com/",
    "founded": "1930年（昭和5年）",
    "built": "1959年（昭和34年）",
    "building": "設計は沢崎輝男。外壁の黄色いタイルには縦の櫛目が入り、小庇には青いスパニッシュ瓦が使われています。2003年に千代田区の景観まちづくり重要物件に指定されました。",
    "references": [
      {
        "label": "千代田区｜誠心堂書店の建物・来歴",
        "url": "https://www.city.chiyoda.lg.jp/documents/4200/14-seishindoshoten-r405.pdf"
      }
    ]
  },
  {
    "id": "kitazawa",
    "name": "北沢書店",
    "genre": "洋書・英米文学・人文科学",
    "address": "神田神保町2-5 北沢ビル2F",
    "lat": 35.69559,
    "lng": 139.75635,
    "description": "北澤弥三郎が現在地で創業。学校や図書館への納本を主な仕事として出発しました。1955年に、大学英文科の助教授だった2代目が継ぎ、洋書の専門店となりました。神保町と教育・研究のつながりが、店の歩みにも表れています。",
    "source": "https://abaj.gr.jp/shop_info.php?shopid=8",
    "founded": "1902年（明治35年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "日本古書籍商協会｜北澤書店の来歴",
        "url": "https://abaj.gr.jp/shop_info.php?shopid=8"
      }
    ]
  },
  {
    "id": "yaguchi",
    "name": "矢口書店",
    "genre": "映画・演劇・演芸",
    "address": "神田神保町2-5-1",
    "lat": 35.69573,
    "lng": 139.75701,
    "description": "錦町で創業し、1934年ごろ現在地へ移転。1975年ごろに映画・演劇を専門とする店へ変わりました。2023年には隣にも売場を広げ、音楽関係の品も扱うようになっています。現在地への移転年は、建物の建築年を示すものではありません。",
    "source": "https://yaguchishoten.jp/about/",
    "founded": "1918年（大正7年）",
    "built": "建築年未確認",
    "building": "木造モルタルの店構えが残ります。映画・演劇の専門店になる前から続く店ですが、現建物の竣工年は確認できていません。",
    "references": [
      {
        "label": "矢口書店｜店の略史",
        "url": "https://yaguchishoten.jp/about/"
      },
      {
        "label": "千代田区観光協会｜店構えと歴史",
        "url": "https://visit-chiyoda.tokyo/app/spot/detail/512"
      }
    ]
  },
  {
    "id": "isseido",
    "name": "一誠堂書店",
    "genre": "和書・洋書・古典籍",
    "address": "神田神保町1-7",
    "lat": 35.69581,
    "lng": 139.75885,
    "description": "新潟県長岡で貸本屋などを営む「酒井書店」として創業し、1906年に神田へ、1913年に現在地へ移りました。神田の大火と関東大震災で焼け出された経験から、現在の店舗は木造ではなく鉄筋コンクリートで建てられました。",
    "source": "https://abaj.gr.jp/shop_info.php?shopid=3",
    "founded": "1903年（明治36年）",
    "built": "1931年（昭和6年）10月",
    "building": "東京都市建築研究所の設計、大林組の施工。地上4階・地下1階で、当初は上階に店主の家族や従業員が暮らしました。1階の石材と上階のタイル、入口上のステンドグラスに当時の意匠が残ります。",
    "references": [
      {
        "label": "一誠堂書店｜創業と移転の沿革",
        "url": "https://www.isseido-books.co.jp/about/"
      },
      {
        "label": "一誠堂書店｜建物紹介",
        "url": "https://www.isseido-books.co.jp/building/"
      }
    ]
  },
  {
    "id": "komiyama",
    "name": "小宮山書店",
    "genre": "写真集・アート・ファッション",
    "address": "神田神保町1-7",
    "lat": 35.695778,
    "lng": 139.759197,
    "description": "1939年に神田神保町で創立した古書店。現在は写真集、美術、ファッションなどの本に加え、写真作品やポスター、アート作品も扱います。神保町の古書商が、古い本を売買する仕事から写真・美術の展示や海外のブックフェアへと活動を広げている一例です。",
    "source": "https://www.book-komiyama.co.jp/about/shop.php",
    "founded": "1939年（昭和14年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "小宮山書店｜創立と現在の取扱分野",
        "url": "https://www.book-komiyama.co.jp/about/index.php"
      }
    ]
  },
  {
    "id": "tamura",
    "name": "田村書店",
    "genre": "文学・哲学・仏独洋書",
    "address": "神田神保町1-7",
    "lat": 35.695756,
    "lng": 139.759546,
    "description": "1904年創業。専修大学の神保町古書店街の研究では、1964年以前は古書全般を扱う店として整理されています。現在は日本の文学書や、フランス語・ドイツ語の文学・哲学などの洋書を扱い、挿絵本や装丁本も専門分野に含まれます。",
    "source": "https://www.kosho.or.jp/abouts/?id=12010180",
    "founded": "1904年（明治37年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "専修大学｜神保町古書店街の研究・表6-1",
        "url": "https://senshu-u.repo.nii.ac.jp/record/13244/files/3051_0544_02.pdf"
      },
      {
        "label": "日本の古本屋｜田村書店の取扱分野",
        "url": "https://www.kosho.or.jp/abouts/?id=12010180"
      }
    ]
  },
  {
    "id": "ohya",
    "name": "大屋書房",
    "genre": "和本・古地図・浮世絵",
    "address": "神田神保町1-1",
    "lat": 35.695637,
    "lng": 139.760563,
    "description": "明治15年創業。江戸時代の和本・浮世絵・古地図を扱う店で、駿河台下交差点のそばにあります。かつては出版も手がけ、大屋書房の名で刊行した本も残っています。古い地図や版本を通じて、江戸の地理や暮らしを伝えてきた書店です。",
    "source": "https://ohya-shobo.com/",
    "founded": "1882年（明治15年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "大屋書房｜日本古書籍商協会ブックフェア",
        "url": "https://ohya.abaj.gr.jp/"
      },
      {
        "label": "千代田図書館｜大屋書房の来歴と出版",
        "url": "https://chiyoda-dokusho.jp/blog/2010/04/vol35.html"
      },
      {
        "label": "大屋書房｜店舗案内",
        "url": "https://www.ohya-shobo.com/store/"
      }
    ]
  },
  {
    "id": "yamada",
    "name": "山田書店 美術部",
    "genre": "浮世絵・版画・美術書",
    "address": "神田神保町1-8 山田ビル2・3F",
    "lat": 35.696185,
    "lng": 139.758809,
    "description": "店の公式案内では、山田朝一が1936年に開業。当初は文学書の初版本を中心に扱い、浮世絵研究家・石井研堂の勧めで浮世絵も扱うようになりました。その後、新版画・創作版画へと分野が広がっています。",
    "source": "https://www.yamada-shoten.com/",
    "founded": "1936年（昭和11年）※店公式",
    "built": "建築年未確認",
    "historyNote": "創業年は店公式の1936年を掲載しています。日本古書籍商協会の案内には1938年とあり、記載が異なります。同協会は現在地への移転を1973年としていますが、建物の建築年は未確認です。",
    "references": [
      {
        "label": "山田書店｜店の公式沿革",
        "url": "https://www.yamada-shoten.com/onlinestore/store.php"
      },
      {
        "label": "日本古書籍商協会｜創業・移転の記載",
        "url": "https://abaj.gr.jp/shop_info.php?shopid=25"
      }
    ]
  },
  {
    "id": "wonder",
    "name": "＠ワンダー",
    "genre": "SF・ミステリ・映画・サブカルチャー",
    "address": "神田神保町2-5-4 開拓社ビル1・2F",
    "lat": 35.695727,
    "lng": 139.756343,
    "description": "映画関連品、SF、ミステリなどを扱う古書店。「二十世紀記憶装置」を店のキーワードに掲げています。本だけでなく映画の資料やサブカルチャーの品々を通じて、20世紀の大衆文化を伝える店です。創業年と建物の建築年は、今回の確認資料では確かめられていません。",
    "source": "https://www.kosho.or.jp/abouts/?id=12011430",
    "founded": "創業年未確認",
    "built": "建築年未確認",
    "references": [
      {
        "label": "日本の古本屋｜＠ワンダーの店舗紹介",
        "url": "https://www.kosho.or.jp/abouts/?id=12011430"
      }
    ]
  }
];
const $ = id => document.getElementById(id);
let map, selected = null, watchId = null, userMarker, accuracyCircle, latestPosition, follow = false;
const markers = [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function announce(message) { $('status').textContent = message; $('status').hidden = false; }
function setPanel(open) { $('panel').classList.toggle('open',open); $('panel-body').hidden = !open; $('panel-toggle').setAttribute('aria-expanded',String(open)); if(map) setTimeout(()=>{map.invalidateSize();if(selected===null)overview();},0); }
function icon(i) { return L.divIcon({className:'book-marker',html:`<span class="pin${selected===i?' active':''}">${i+1}</span>`,iconSize:[30,30],iconAnchor:[15,15]}); }
function paint() {
  $('shops').innerHTML = shops.map((s,i)=>`<button class="shop-row" data-index="${i}"><span class="number">${i+1}</span><span class="row-text"><strong>${s.name}</strong><small>${s.genre}</small></span><span class="row-arrow" aria-hidden="true">›</span></button>`).join('');
  markers.forEach((m,i)=>{m.setIcon(icon(i));m.setZIndexOffset(selected===i?1000:0);m.getElement()?.setAttribute('aria-label',`${i+1} ${shops[i].name}`);});
}
function showList() { selected=null; $('list-view').hidden=false; $('detail-view').hidden=true; paint(); $('panel-body').scrollTop=0; }
function showShop(i,focus=false) {
  selected=i; const s=shops[i]; setPanel(true); $('list-view').hidden=true; $('detail-view').hidden=false;
  $('detail-view').innerHTML=`<div class="detail-content"><button class="back" id="back">← 古書店一覧</button><div class="detail-title"><span class="number">${i+1}</span><h2 tabindex="-1">${s.name}</h2></div><span class="tag">${s.genre}</span><dl class="dates"><div><dt>店の創業</dt><dd>${s.founded}</dd></div><div><dt>建物の竣工</dt><dd>${s.built}</dd></div></dl><h3 class="card-heading">この場所の歴史</h3><p class="intro">${s.description}</p>${s.building?`<h3 class="card-heading">建物について</h3><p class="intro">${s.building}</p>`:''}${s.historyNote?`<p class="history-note">${s.historyNote}</p>`:''}<p class="detail-address">東京都千代田区${s.address}<br>営業時間・休業日は下の店舗情報でご確認ください。</p><a class="source-link" href="${s.source}" target="_blank" rel="noopener noreferrer">店舗情報 ↗</a><details class="references"><summary>出典</summary>${s.references.map(r=>`<a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label} ↗</a>`).join('')}</details></div>`;
  $('back').onclick=()=>{showList();$('shops').querySelector(`[data-index="${i}"]`).focus();};
  $('panel-body').scrollTop=0; paint();
  if(map){follow=false;const size=map.getSize(); const pixel=map.project([s.lat,s.lng],18);pixel.y+=window.innerWidth<760?size.y*.20:0;pixel.x+=window.innerWidth>=760?-170:0;map.setView(map.unproject(pixel,18),18,{animate:!reducedMotion});}
  if(focus)$('detail-view').querySelector('h2').focus({preventScroll:true});
}
function overview() {
  if(!map)return;follow=false;
  const bottom=window.innerWidth<760?$('panel').getBoundingClientRect().height+24:35;
  map.fitBounds(L.latLngBounds(shops.map(s=>[s.lat,s.lng])),{paddingTopLeft:[window.innerWidth>=760?405:30,110],paddingBottomRight:[85,bottom],maxZoom:17,animate:!reducedMotion});
}
function stopLocation(message) {if(watchId!==null)navigator.geolocation.clearWatch(watchId);watchId=null;follow=false;$('locate').setAttribute('aria-pressed','false');if(message)announce(message);}
function locate() {
  if(!map){announce('地図を読み込めません。通信状態を確認して再読み込みしてください。');return;}
  if(watchId!==null){stopLocation('現在地の更新を停止しました。');return;}
  if(!window.isSecureContext){announce('現在地はHTTPSの公開URL、またはlocalhostで利用できます。');return;}
  if(!navigator.geolocation){announce('このブラウザは現在地表示に対応していません。');return;}
  follow=true;$('locate').setAttribute('aria-pressed','true');announce('現在地を取得しています。位置情報の利用を許可してください。');
  watchId=navigator.geolocation.watchPosition(position=>{
    latestPosition=[position.coords.latitude,position.coords.longitude];const accuracy=position.coords.accuracy;
    if(!userMarker){accuracyCircle=L.circle(latestPosition,{radius:accuracy,color:'#3979d6',weight:1,fillOpacity:.09,interactive:false}).addTo(map);userMarker=L.circleMarker(latestPosition,{radius:7,color:'white',weight:3,fillColor:'#3979d6',fillOpacity:1}).bindTooltip('現在地').addTo(map);}else{userMarker.setLatLng(latestPosition);accuracyCircle.setLatLng(latestPosition).setRadius(accuracy);}
    if(follow)map.setView(latestPosition,17,{animate:!reducedMotion});
    const outside=map.distance(latestPosition,[35.6958,139.7575])>3000;
    announce(`現在地を表示中（精度 約${Math.round(accuracy)}m）。${outside?'神保町の外にいます。「全体」で古書店の地図へ戻れます。':'地図を動かすと自動追従を止めます。'} もう一度押すと更新停止。`);
  },error=>stopLocation(error.code===1?'位置情報が許可されていません。ブラウザのサイト設定で許可すると利用できます。':error.code===3?'現在地の取得に時間がかかっています。屋外で「現在地」を押して再試行してください。':'現在地を取得できませんでした。端末の位置情報設定を確認してください。'),{enableHighAccuracy:true,timeout:20000,maximumAge:10000});
}
$('panel-toggle').onclick=()=>setPanel(!$('panel').classList.contains('open'));
$('shops').onclick=e=>{const b=e.target.closest('[data-index]');if(b)showShop(Number(b.dataset.index),true);};
$('overview').onclick=overview;$('locate').onclick=locate;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(selected!==null)showList();else setPanel(false);$('panel-toggle').focus();}});
window.addEventListener('pagehide',()=>stopLocation());
window.addEventListener('resize',()=>{if(map)map.invalidateSize();});
paint();
if(window.L){
  map=L.map('map',{zoomControl:false}).setView([35.6958,139.7575],16);
  L.control.zoom({position:'topright'}).addTo(map);L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);
  let tileFailures=0;const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  tiles.on('tileerror',()=>{if(++tileFailures===3)announce('背景地図を読み込めません。通信状態を確認してください。古書店一覧は利用できます。');});
  shops.forEach((s,i)=>{const m=L.marker([s.lat,s.lng],{icon:icon(i),title:s.name,keyboard:true}).addTo(map).bindTooltip(s.name,{direction:'top',offset:[0,-15],className:'map-tooltip'}).on('click',()=>showShop(i,true));markers.push(m);});
  map.on('dragstart',()=>{follow=false;});paint();overview();
}else{announce('地図を読み込めませんでした。通信状態を確認して再読み込みしてください。古書店一覧は利用できます。');setPanel(true);}
if(window.innerWidth>=760)setPanel(true);
