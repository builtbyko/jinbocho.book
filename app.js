'use strict';

const shops = [
  {id:'seishindo',name:'誠心堂書店',genre:'和本・漢籍・書道',address:'神田神保町2-24',lat:35.69758,lng:139.75709,description:'和本や漢籍、書道の本を扱う古書店。拓本や印譜など、文字のかたちと歴史をたどる資料にも出会えます。活字の本とはひと味違う、筆で書かれた文字の世界をのぞいてみましょう。',source:'https://book-seishindo.com/'},
  {id:'kitazawa',name:'北沢書店',genre:'洋書・英米文学・人文科学',address:'神田神保町2-5 北沢ビル2F',lat:35.69559,lng:139.75635,description:'1902年創業。英米文学、哲学、歴史など、人文分野の洋書を探せるお店です。背表紙の文字や装丁に目を向けると、日本語の本とは異なる本づくりの表情も楽しめます。',source:'https://abaj.gr.jp/shop_info.php?shopid=8'},
  {id:'yaguchi',name:'矢口書店',genre:'映画・演劇・演芸',address:'神田神保町2-5-1',lat:35.69573,lng:139.75701,description:'映画、演劇、演芸の専門店。脚本や戯曲、映画のパンフレットなどから、作品が生まれた時代の空気が伝わってきます。好きな映画や俳優を入口に、紙に残った舞台やスクリーンの記憶を探してみてください。',source:'https://yaguchishoten.jp/about/'},
  {id:'isseido',name:'一誠堂書店',genre:'和書・洋書・古典籍',address:'神田神保町1-7',lat:35.69581,lng:139.75885,description:'和書・洋書から和本まで、幅広い研究資料を扱う古書店。大学や図書館、美術館などへの納本も手がけています。神保町が、散歩で本を楽しむ街であると同時に、研究を支える街でもあることを感じられる一軒です。',source:'https://abaj.gr.jp/shop_info.php?shopid=3'},
  {id:'komiyama',name:'小宮山書店',genre:'写真集・アート・ファッション',address:'神田神保町1-7',lat:35.695778,lng:139.759197,description:'写真集や美術、ファッションなどの本を扱うお店。作品や展示も扱い、本とアートの両方に触れられます。読みたい本を探すだけでなく、ページや表紙のデザインに惹かれる一冊を探すのも楽しみ方のひとつです。',source:'https://www.book-komiyama.co.jp/about/shop.php'},
  {id:'tamura',name:'田村書店',genre:'文学・哲学・仏独洋書',address:'神田神保町1-7',lat:35.695756,lng:139.759546,description:'日本書に加え、フランス語・ドイツ語の文学や哲学、挿絵本などの洋書を扱います。装丁や挿絵にも目を向けると、本を読むことと、本という物を味わうことの両方を楽しめます。',source:'https://www.kosho.or.jp/abouts/?id=12010180'},
  {id:'ohya',name:'大屋書房',genre:'和本・古地図・浮世絵',address:'神田神保町1-1',lat:35.695637,lng:139.760563,description:'江戸時代の和本、古地図、浮世絵などを扱う専門店です。地図や絵に残された街を眺めると、いま歩いている東京とは異なる姿が見えてきます。江戸の人々の好奇心を、本を通じてたどってみましょう。',source:'https://ohya-shobo.com/'},
  {id:'yamada',name:'山田書店 美術部',genre:'浮世絵・版画・美術書',address:'神田神保町1-8 山田ビル2F',lat:35.696185,lng:139.758809,description:'浮世絵や版画、美術書を扱う専門店。本の街には、紙に刷られた絵を探す楽しみもあります。線や色、構図に目を向けながら、一枚の作品が語る時代や風景を味わってみてください。',source:'https://www.yamada-shoten.com/'},
  {id:'wonder',name:'＠ワンダー',genre:'SF・ミステリ・映画・サブカルチャー',address:'神田神保町2-5-4 開拓社ビル1・2F',lat:35.695727,lng:139.756343,description:'SF、ミステリ、映画関連品などが集まる古書店。小説だけでなく、雑誌やパンフレットといった紙の資料からも、かつて夢中になった文化をたどれます。好きなジャンルを手がかりに、思いがけない一冊を探す寄り道に。',source:'https://www.kosho.or.jp/abouts/?id=12011430'}
];
const $ = id => document.getElementById(id);
const storageKey = 'jinbocho.book.visited.v1';
let visited = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if(Array.isArray(saved)) visited = new Set(saved.filter(id => shops.some(s=>s.id===id))); } catch {}
let map, selected = null, routeLayer, startMarker, watchId = null, userMarker, accuracyCircle, latestPosition, follow = false;
const markers = [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function announce(message) { $('status').textContent = message; $('status').hidden = false; }
function setPanel(open) { $('panel').classList.toggle('open',open); $('panel-body').hidden = !open; $('panel-toggle').setAttribute('aria-expanded',String(open)); if(map) setTimeout(()=>{map.invalidateSize();if(selected===null)overview();},0); }
function icon(i) { return L.divIcon({className:'book-marker',html:`<span class="pin${selected===i?' active':''}${visited.has(shops[i].id)?' done':''}">${visited.has(shops[i].id)?'✓':i+1}</span>`,iconSize:[30,30],iconAnchor:[15,15]}); }
function paint() {
  $('progress').textContent = `訪問 ${visited.size} / ${shops.length}`;
  $('shops').innerHTML = shops.map((s,i)=>`<button class="shop-row${visited.has(s.id)?' visited':''}" data-index="${i}"><span class="number">${visited.has(s.id)?'✓':i+1}</span><span class="row-text"><strong>${s.name}</strong><small>${s.genre}${i===8?' · 寄り道':''}</small></span><span class="row-arrow" aria-hidden="true">›</span></button>`).join('');
  markers.forEach((m,i)=>{m.setIcon(icon(i));m.setZIndexOffset(selected===i?1000:0);m.getElement()?.setAttribute('aria-label',`${i+1} ${shops[i].name}${visited.has(shops[i].id)?' 訪問済み':''}`);});
}
function showList() { selected=null; $('list-view').hidden=false; $('detail-view').hidden=true; paint(); $('panel-body').scrollTop=0; }
function showShop(i,focus=false) {
  selected=i; const s=shops[i]; setPanel(true); $('list-view').hidden=true; $('detail-view').hidden=false;
  const destination = encodeURIComponent(`東京都千代田区${s.address} ${s.name}`);
  $('detail-view').innerHTML=`<div class="detail-content"><button class="back" id="back">← 古書店一覧</button><div class="detail-title"><span class="number">${i+1}</span><h2 tabindex="-1">${s.name}</h2></div><span class="tag">${s.genre}</span><p class="intro">${s.description}</p><p class="detail-address">東京都千代田区${s.address}<br>営業時間・休業日は下の店舗情報でご確認ください。</p><div class="detail-actions"><a class="primary" href="https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=walking" target="_blank" rel="noopener noreferrer">徒歩で行く ↗</a><button id="visit" aria-pressed="${visited.has(s.id)}">${visited.has(s.id)?'✓ 訪問済み':'訪問を記録する'}</button></div><a class="source-link" href="${s.source}" target="_blank" rel="noopener noreferrer">店舗情報・確認元 ↗</a><div class="next"><button id="next">${i<7?`次のお店：${shops[i+1].name} →`:i===7?'寄り道：＠ワンダー →':'一覧に戻る →'}</button></div></div>`;
  $('back').onclick=()=>{showList();$('shops').querySelector(`[data-index="${i}"]`).focus();};
  $('visit').onclick=()=>{if(visited.has(s.id))visited.delete(s.id);else visited.add(s.id); let saved=true;try{localStorage.setItem(storageKey,JSON.stringify([...visited]));}catch{saved=false;}$('visit').textContent=visited.has(s.id)?'✓ 訪問済み':'訪問を記録する';$('visit').setAttribute('aria-pressed',String(visited.has(s.id)));paint();announce(saved?(visited.has(s.id)?`${s.name}の訪問を記録しました。`:`${s.name}の訪問記録を取り消しました。`):'このブラウザでは保存できません。訪問記録はこの画面を閉じるまで有効です。');};
  $('next').onclick=()=>i<8?showShop(i+1,true):showList();
  $('panel-body').scrollTop=0; paint();
  if(map){follow=false;const size=map.getSize(); const pixel=map.project([s.lat,s.lng],18);pixel.y+=window.innerWidth<760?-size.y*.20:0;pixel.x+=window.innerWidth>=760?-170:0;map.setView(map.unproject(pixel,18),18,{animate:!reducedMotion});}
  if(focus)$('detail-view').querySelector('h2').focus({preventScroll:true});
}
function overview() {
  if(!map)return;follow=false;
  const bottom=window.innerWidth<760?$('panel').getBoundingClientRect().height+24:35;
  map.fitBounds(L.latLngBounds(shops.map(s=>[s.lat,s.lng])).extend([35.694,139.75365]),{paddingTopLeft:[window.innerWidth>=760?405:30,110],paddingBottomRight:[85,bottom],maxZoom:17,animate:!reducedMotion});
}
function toggleRoute() {
  if(!map){announce('地図を読み込めないため、コースを表示できません。通信状態を確認して再読み込みしてください。');return;}
  const visible=$('route').getAttribute('aria-pressed')!=='true';$('route').setAttribute('aria-pressed',String(visible));$('route').textContent=visible?'おすすめ順を隠す':'おすすめ順を表示';$('route-note').hidden=!visible;
  if(visible){routeLayer=L.polyline([[35.694,139.75365],...shops.slice(0,8).map(s=>[s.lat,s.lng])],{color:'#6e8d7a',weight:3,dashArray:'5 9',opacity:.8,interactive:false}).addTo(map);startMarker=L.marker([35.694,139.75365],{icon:L.divIcon({className:'start-marker',iconSize:[14,14]}),title:'出発：千代田区役所'}).bindTooltip('出発：千代田区役所').addTo(map);overview();}else{map.removeLayer(routeLayer);map.removeLayer(startMarker);}
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
$('route').onclick=toggleRoute;$('overview').onclick=overview;$('locate').onclick=locate;
$('reset').onclick=()=>{$('reset-confirm').hidden=false;$('reset-yes').focus();};
$('reset-no').onclick=()=>{$('reset-confirm').hidden=true;$('reset').focus();};
$('reset-yes').onclick=()=>{visited.clear();try{localStorage.removeItem(storageKey);}catch{}paint();$('reset-confirm').hidden=true;announce('訪問記録をリセットしました。');$('reset').focus();};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(selected!==null)showList();else setPanel(false);$('panel-toggle').focus();}});
window.addEventListener('pagehide',()=>stopLocation());
window.addEventListener('resize',()=>{if(map)map.invalidateSize();});
paint();
if(window.L){
  map=L.map('map',{zoomControl:false}).setView([35.6958,139.7575],16);
  L.control.zoom({position:'topright'}).addTo(map);L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);
  let tileFailures=0;const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  tiles.on('tileerror',()=>{if(++tileFailures===3)announce('背景地図を読み込めません。通信状態を確認してください。古書店一覧と徒歩ナビは利用できます。');});
  shops.forEach((s,i)=>{const m=L.marker([s.lat,s.lng],{icon:icon(i),title:s.name,keyboard:true}).addTo(map).bindTooltip(s.name,{direction:'top',offset:[0,-15],className:'map-tooltip'}).on('click',()=>showShop(i,true));markers.push(m);});
  map.on('dragstart',()=>{follow=false;});paint();overview();
}else{announce('地図を読み込めませんでした。通信状態を確認して再読み込みしてください。古書店一覧と徒歩ナビは利用できます。');setPanel(true);}
if(window.innerWidth>=760)setPanel(true);
