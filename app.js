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
    ],
    "category": "古書店"
  },
  {
    "id": "kitazawa",
    "name": "北沢書店",
    "genre": "洋書・英米文学・人文科学",
    "address": "神田神保町2-5 北沢ビル2F",
    "lat": 35.6957004,
    "lng": 139.7563252,
    "description": "北澤弥三郎が現在地で創業。学校や図書館への納本を主な仕事として出発しました。1955年に、大学英文科の助教授だった2代目が継ぎ、洋書の専門店となりました。神保町と教育・研究のつながりが、店の歩みにも表れています。",
    "source": "https://abaj.gr.jp/shop_info.php?shopid=8",
    "founded": "1902年（明治35年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "日本古書籍商協会｜北澤書店の来歴",
        "url": "https://abaj.gr.jp/shop_info.php?shopid=8"
      }
    ],
    "category": "古書店",
    "buildingId": "building-1691109",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "yaguchi",
    "name": "矢口書店",
    "genre": "映画・演劇・演芸",
    "address": "神田神保町2-5-1",
    "lat": 35.6957383,
    "lng": 139.7570282,
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
    ],
    "category": "古書店",
    "buildingId": "building-1695963",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "isseido",
    "name": "一誠堂書店",
    "genre": "和書・洋書・古典籍",
    "address": "神田神保町1-7",
    "lat": 35.6958084,
    "lng": 139.7588467,
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
    ],
    "category": "古書店",
    "buildingId": "building-1694654",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "komiyama",
    "name": "小宮山書店",
    "genre": "写真集・アート・ファッション",
    "address": "神田神保町1-7",
    "lat": 35.6958262,
    "lng": 139.7595572,
    "description": "1939年に神田神保町で創立した古書店。現在は写真集、美術、ファッションなどの本に加え、写真作品やポスター、アート作品も扱います。神保町の古書商が、古い本を売買する仕事から写真・美術の展示や海外のブックフェアへと活動を広げている一例です。",
    "source": "https://www.book-komiyama.co.jp/about/shop.php",
    "founded": "1939年（昭和14年）",
    "built": "建築年未確認",
    "references": [
      {
        "label": "小宮山書店｜創立と現在の取扱分野",
        "url": "https://www.book-komiyama.co.jp/about/index.php"
      }
    ],
    "category": "古書店",
    "buildingId": "building-1694682",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "tamura",
    "name": "田村書店",
    "genre": "文学・哲学・仏独洋書",
    "address": "神田神保町1-7",
    "lat": 35.6958268,
    "lng": 139.7595044,
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
    ],
    "category": "古書店",
    "buildingId": "building-1694646",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "ohya",
    "name": "大屋書房",
    "genre": "和本・古地図・浮世絵",
    "address": "神田神保町1-1",
    "lat": 35.6958528,
    "lng": 139.7605077,
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
    ],
    "category": "古書店",
    "buildingId": "building-1694648",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "yamada",
    "name": "山田書店 美術部",
    "genre": "浮世絵・版画・美術書",
    "address": "神田神保町1-8 山田ビル2・3F",
    "lat": 35.6961513,
    "lng": 139.7588155,
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
    ],
    "category": "古書店",
    "buildingId": "building-1694633",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "wonder",
    "name": "＠ワンダー",
    "genre": "SF・ミステリ・映画・サブカルチャー",
    "address": "神田神保町2-5-4 開拓社ビル1・2F",
    "lat": 35.6957218,
    "lng": 139.7561963,
    "description": "映画関連品、SF、ミステリなどを扱う古書店。「二十世紀記憶装置」を店のキーワードに掲げています。本だけでなく映画の資料やサブカルチャーの品々を通じて、20世紀の大衆文化を伝える店です。創業年と建物の建築年は、今回の確認資料では確かめられていません。",
    "source": "https://www.kosho.or.jp/abouts/?id=12011430",
    "founded": "創業年未確認",
    "built": "建築年未確認",
    "references": [
      {
        "label": "日本の古本屋｜＠ワンダーの店舗紹介",
        "url": "https://www.kosho.or.jp/abouts/?id=12011430"
      }
    ],
    "category": "古書店",
    "buildingId": "building-1691108",
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson"
  },
  {
    "id": "gyokueido",
    "name": "玉英堂書店",
    "genre": "稀覯本・文学初版本・文人の筆跡",
    "category": "古書店",
    "address": "神田神保町1-1",
    "lat": 35.695831,
    "lng": 139.7602271,
    "founded": "1902年（明治35年）",
    "built": "建築年未確認",
    "description": "本郷湯島天神下で古本と貸本の店として創業し、1926年から神田神保町で営業しています。古写本や古版本、文学作品の初版本、文豪の草稿や書簡などを扱う書店です。書かれた内容だけでなく、著者の筆跡や本そのものの成り立ちを伝える資料が集まります。",
    "source": "https://gyokueido.com/",
    "references": [
      {
        "label": "玉英堂書店｜創業・神保町への移転・取扱分野",
        "url": "https://gyokueido.com/"
      },
      {
        "label": "日本の古本屋｜所在地と店舗登録情報",
        "url": "https://www.kosho.or.jp/abouts/?id=12010090"
      }
    ],
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson",
    "buildingId": "building-1694658"
  },
  {
    "id": "yukyudo",
    "name": "悠久堂書店",
    "genre": "美術・料理・山岳・動植物",
    "category": "古書店",
    "address": "神田神保町1-3-2",
    "lat": 35.6958427,
    "lng": 139.759977,
    "founded": "1915年（大正4年）",
    "built": "建築年未確認",
    "description": "1915年にこの地で開業。当初は、周辺の大学に通う学生向けの教科書販売が中心でした。2代目は山岳・動植物、3代目は食文化、4代目は美術へと、代を重ねるごとに取扱分野を増やしてきました。店ごとに専門が分かれる神保町の変化が、一軒の書棚の歩みにも表れています。",
    "source": "https://yukyudou.com/aboutus/",
    "references": [
      {
        "label": "悠久堂書店｜店の歴史と各代の専門分野",
        "url": "https://yukyudou.com/aboutus/"
      },
      {
        "label": "日本の古本屋｜店舗登録情報・位置",
        "url": "https://www.kosho.or.jp/abouts/?id=12010110"
      }
    ],
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson",
    "buildingId": "building-1694657"
  },
  {
    "id": "nanyodo",
    "name": "南洋堂書店",
    "genre": "建築・都市・デザイン",
    "category": "古書店",
    "address": "神田神保町1-21",
    "lat": 35.6951991,
    "lng": 139.7611147,
    "founded": "1926年（取材資料による）",
    "built": "1980年（昭和55年）",
    "description": "建築の新刊・古書・洋書を扱う専門書店。地域紙が店員に行った取材では、創業を1926年としています。近隣大学の建築学科とのつながりを背景に、建築分野を専門とする店へ変わっていきました。",
    "building": "1980年、土岐新の設計で建てられたコンクリート打ち放しの建物です。正方形をモチーフとする外観が特徴。2007年には菊地宏が1・2階を改装しました。本を扱う店そのものも、神保町で見られる建築の一つです。",
    "source": "https://nanyodo.com/",
    "references": [
      {
        "label": "南洋堂書店｜取扱書籍と店舗案内",
        "url": "https://nanyodo.com/"
      },
      {
        "label": "おさんぽ神保町｜店員への取材・創業と建物",
        "url": "https://osanpo-jimbo.com/info/5002135"
      }
    ],
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson",
    "buildingId": "building-1694725"
  },
  {
    "id": "bumpodo",
    "name": "文房堂",
    "genre": "画材・スクラッチタイルの外壁",
    "category": "画材店・建物",
    "address": "神田神保町1-21-1",
    "lat": 35.6952732,
    "lng": 139.7609316,
    "founded": "1887年（明治20年）",
    "built": "1922年の外壁を保存／1990年改築",
    "description": "小川町の中西屋書店の一部を借りて創業した画材店。1906年に現在のすずらん通りへ移り、1921年には専門家向けの国産油絵具を製造・販売しました。本の街には、絵を描く人のための道具を届けてきた店も残っています。",
    "building": "すずらん通り側の外壁は1922年のもの。1990年にその外壁を残して、背後の建物本体を建て替えました。筋のあるスクラッチタイル、アーチ窓、窓上のライオンやテラコッタ装飾が見られます。建物全体が1922年のまま残っているわけではありません。",
    "source": "https://www.bumpodo.co.jp/company/",
    "references": [
      {
        "label": "文房堂｜創業・移転・画材製造の歴史",
        "url": "https://www.bumpodo.co.jp/company/history.html"
      },
      {
        "label": "千代田区｜文房堂ビルの竣工・外壁保存",
        "url": "https://www.city.chiyoda.lg.jp/documents/4200/13-bumbodobiru-r405.pdf"
      }
    ],
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson",
    "buildingId": "building-1694724"
  },
  {
    "id": "sabouru",
    "name": "さぼうる",
    "genre": "喫茶店・路地と店内の造り",
    "category": "喫茶店",
    "address": "神田神保町1-11",
    "lat": 35.6955733,
    "lng": 139.7586758,
    "founded": "1955年（昭和30年）",
    "built": "建築年未確認",
    "description": "神保町駅近くの路地にある、1955年創業の喫茶店。店名はスペイン語の「味」に由来します。創業時のオーナーが内装の構想にも関わり、木彫りの品々が置かれた独特の店内をつくりました。",
    "building": "入ると少し上がった床と地下へ下りる階段があり、店内は3つのフロアに分かれます。低い天井や近い席の間隔が、奥行きのある空間をつくっています。創業年と現建物の竣工年が同じかは確認できていません。",
    "source": "https://visit-chiyoda.tokyo/app/spot/detail/482",
    "references": [
      {
        "label": "千代田区観光協会｜店名・内装・フロア構成",
        "url": "https://visit-chiyoda.tokyo/app/spot/detail/482"
      },
      {
        "label": "GOOD LUCK TRIP（店監修）｜1955年創業",
        "url": "https://www.gltjp.com/ja/directory/item/14176/"
      }
    ],
    "coordinateSource": "https://github.com/builtbyko/jinbocho/blob/main/public/data/places.geojson",
    "buildingId": "building-1694686"
  },
  {
    "id": "kandachurch",
    "name": "カトリック神田教会",
    "genre": "1928年の聖堂・教育の歴史",
    "category": "教会・建物",
    "address": "西神田1-1-12",
    "lat": 35.699389,
    "lng": 139.757371,
    "founded": "1874年（明治7年）",
    "foundedLabel": "教会の創立",
    "built": "1928年（昭和3年）",
    "description": "1874年、外国語を教えるラテン学校が神田へ移り、その地に聖堂を設けたことが教会の始まりです。のちの白百合学園や暁星学園につながる教育活動も、教会の敷地を起点としました。神保町の北側に、学校と街の関係を伝える場所があります。",
    "building": "現在の聖堂はマックス・ヒンデルの設計で、1928年に献堂。ルネッサンス・ロマネスク様式を取り入れた建物で、戦災を免れて残りました。明治期の教会創立と、いま見える昭和初期の聖堂を分けてたどれます。",
    "visitNote": "聖堂は礼拝の場です。見学は公式の公開案内を確認してください。儀式中は見学できない場合があります。",
    "infoLabel": "公開時間・見学案内",
    "source": "https://catholickandachurch.org/about/open-hours/",
    "references": [
      {
        "label": "神田教会｜創立・学校・聖堂の歴史",
        "url": "https://catholickandachurch.org/about/church/history/"
      },
      {
        "label": "神田教会｜所在地と交通案内",
        "url": "https://catholickandachurch.org/contact/access/"
      }
    ],
    "coordinateSource": "https://mapfan.com/spots/S5CY5,J,WHJR80"
  }
];
const $ = id => document.getElementById(id);
let map, selected = null, watchId = null, userMarker, accuracyCircle, latestPosition, follow = false;
const markers = [];
let atlasBuildings, selectedOutline, placeLabels, roadLabels, chomeLabels;
const placeColor = s => s.category==='古書店'?'#a6533c':s.category==='喫茶店'?'#4f7f78':'#a28b48';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function announce(message) { $('status').textContent = message; $('status').hidden = false; }
function setPanel(open) { $('panel').classList.toggle('open',open); $('panel-body').hidden = !open; $('panel-toggle').setAttribute('aria-expanded',String(open)); if(map) setTimeout(()=>{map.invalidateSize();if(selected===null)overview();},0); }
function icon(i) { return L.divIcon({className:'book-marker',html:`<span style="--place-color:${placeColor(shops[i])}" class="pin${selected===i?' active':''}">${i+1}</span>`,iconSize:[30,30],iconAnchor:[15,15]}); }
function paint() {
  $('shops').innerHTML = shops.map((s,i)=>`<button class="shop-row" data-index="${i}"><span class="number">${i+1}</span><span class="row-text"><strong>${s.name}</strong><small>${s.category} · ${s.genre}</small></span><span class="row-arrow" aria-hidden="true">›</span></button>`).join('');
  markers.forEach((m,i)=>{m.setIcon(icon(i));m.setZIndexOffset(selected===i?1000:0);m.getElement()?.setAttribute('aria-label',`${i+1} ${shops[i].name}`);});
}
function showList() { selected=null;if(selectedOutline)selectedOutline.clearLayers(); $('list-view').hidden=false; $('detail-view').hidden=true; paint(); $('panel-body').scrollTop=0; }
function showShop(i,focus=false) {
  selected=i; const s=shops[i]; setPanel(true); $('list-view').hidden=true; $('detail-view').hidden=false;
  $('detail-view').innerHTML=`<div class="detail-content"><button class="back" id="back">← 場所一覧</button><div class="detail-title"><span class="number">${i+1}</span><h2 tabindex="-1">${s.name}</h2></div><span class="tag">${s.genre}</span><dl class="dates"><div><dt>${s.foundedLabel || '店の創業'}</dt><dd>${s.founded}</dd></div><div><dt>建物の竣工</dt><dd>${s.built}</dd></div></dl><h3 class="card-heading">この場所の歴史</h3><p class="intro">${s.description}</p>${s.building?`<h3 class="card-heading">建物について</h3><p class="intro">${s.building}</p>`:''}${s.historyNote?`<p class="history-note">${s.historyNote}</p>`:''}<p class="detail-address">東京都千代田区${s.address}<br>${s.visitNote || '営業時間・休業日は下の案内でご確認ください。'}</p><a class="source-link" href="${s.source}" target="_blank" rel="noopener noreferrer">${s.infoLabel || '案内・店舗情報'} ↗</a><details class="references"><summary>出典</summary>${s.references.map(r=>`<a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label} ↗</a>`).join('')}</details></div>`;
  $('back').onclick=()=>{showList();$('shops').querySelector(`[data-index="${i}"]`).focus();};
  $('panel-body').scrollTop=0; paint(); highlightBuilding(s);
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
// Reuse the reference map's building footprints, streets, sidewalks and chome.
async function loadAtlasBasemap() {
  const names=['boundary','basemap-roads','basemap-sidewalks','basemap-road-names','buildings'];
  try {
    const [boundary,roads,sidewalks,roadNames,buildings]=await Promise.all(names.map(async name=>{
      const response=await fetch(`data/${name}.geojson`);
      if(!response.ok)throw new Error(name);
      return response.json();
    }));
    atlasBuildings=buildings;
    const pane=(name,z)=>{map.createPane(name);map.getPane(name).style.zIndex=z;map.getPane(name).style.pointerEvents='none';return L.canvas({pane:name});};
    const groundRenderer=pane('atlasGround',210),roadRenderer=pane('atlasRoads',220),walkRenderer=pane('atlasWalks',230),buildingRenderer=pane('atlasBuildings',240);
    const layer=(data,renderer,style)=>L.geoJSON(data,{renderer,interactive:false,style}).addTo(map);
    layer(boundary,groundRenderer,{fillColor:'#faf9f5',fillOpacity:1,stroke:false});
    layer(roads,roadRenderer,{fillColor:'#e9ebe8',fillOpacity:1,color:'#cfd3cf',opacity:.85,weight:.7});
    layer(sidewalks,walkRenderer,{fillColor:'#fbfaf7',fillOpacity:1,color:'#d8dbd6',weight:.55});
    const occupants=new Map(shops.filter(s=>s.buildingId).map(s=>[s.buildingId,s]));
    layer(buildings,buildingRenderer,feature=>{
      const place=occupants.get(feature.properties.id);
      return {fillColor:place?placeColor(place):'#dadbd6',fillOpacity:place?.85:.96,color:'#717a73',opacity:.48,weight:.7};
    });
    const selectedRenderer=pane('atlasSelected',250);
    selectedOutline=L.geoJSON(null,{renderer:selectedRenderer,interactive:false,style:{fill:false,color:'#244f42',weight:3,opacity:1}}).addTo(map);
    map.createPane('atlasText');map.getPane('atlasText').style.zIndex=350;map.getPane('atlasText').style.pointerEvents='none';
    roadLabels=L.layerGroup().addTo(map);chomeLabels=L.layerGroup().addTo(map);placeLabels=L.layerGroup().addTo(map);
    for(const feature of roadNames.features){
      const coordinates=feature.geometry.type==='LineString'?feature.geometry.coordinates:feature.geometry.coordinates[0];
      const lengths=coordinates.slice(1).map((p,i)=>map.distance([coordinates[i][1],coordinates[i][0]],[p[1],p[0]]));
      let distance=lengths.reduce((a,b)=>a+b,0)/2,index=0;
      while(index<lengths.length-1&&distance>lengths[index])distance-=lengths[index++];
      const a=coordinates[index],b=coordinates[index+1];if(!b)continue;
      const fraction=lengths[index]?distance/lengths[index]:0;
      const point=[a[1]+(b[1]-a[1])*fraction,a[0]+(b[0]-a[0])*fraction];
      const pa=map.project([a[1],a[0]],18),pb=map.project([b[1],b[0]],18);
      let angle=Math.atan2(pb.y-pa.y,pb.x-pa.x)*180/Math.PI;if(angle>90)angle-=180;if(angle<-90)angle+=180;
      L.marker(point,{interactive:false,keyboard:false,pane:'atlasText',icon:L.divIcon({className:'atlas-road-label',html:`<span style="transform:translate(-50%,-50%) rotate(${angle}deg)">${feature.properties.name}</span>`,iconSize:[0,0]})}).addTo(roadLabels);
    }
    for(const feature of boundary.features){
      const center=L.geoJSON(feature).getBounds().getCenter();
      const name=feature.properties.name.replace('神田神保町','');
      L.marker(center,{interactive:false,keyboard:false,pane:'atlasText',icon:L.divIcon({className:'atlas-chome-label',html:`<span>${name}</span>`,iconSize:[0,0]})}).addTo(chomeLabels);
    }
    map.attributionControl.addAttribution('<a href="https://catalog.data.metro.tokyo.lg.jp/dataset/t000008d2000000019" target="_blank" rel="noopener">東京都・2021年建物現況（加工）</a> / <a href="https://geoshape.ex.nii.ac.jp/ka/" target="_blank" rel="noopener">CODH町丁目（CC BY 4.0・加工）</a>');
    highlightBuilding(selected===null?null:shops[selected]);updateAtlasLabels();
  } catch(error) {
    announce('白地図の一部を読み込めませんでした。背景地図と場所一覧は引き続き利用できます。');
  }
}
function highlightBuilding(place) {
  if(!selectedOutline||!atlasBuildings)return;
  selectedOutline.clearLayers();
  if(place?.buildingId){const feature=atlasBuildings.features.find(f=>f.properties.id===place.buildingId);if(feature)selectedOutline.addData(feature);}
}
function updateAtlasLabels() {
  if(!placeLabels)return;
  const zoom=map.getZoom();
  map.getContainer().classList.toggle('atlas-close',zoom>=17);
  map.getContainer().classList.toggle('atlas-wide',zoom<17.5);
  placeLabels.clearLayers();if(zoom<17)return;
  const mapRect=$('map').getBoundingClientRect();
  const occupied=[...document.querySelectorAll('.title-card,.map-tools,.panel')].map(el=>{
    const r=el.getBoundingClientRect();return {x:r.left-mapRect.left,y:r.top-mapRect.top,w:r.width,h:r.height};
  });
  const overlaps=(a,b)=>a.x<b.x+b.w+5&&a.x+a.w+5>b.x&&a.y<b.y+b.h+5&&a.y+a.h+5>b.y;
  const size=map.getSize(),order=shops.map((s,i)=>({s,i})).sort((a,b)=>(b.i===selected)-(a.i===selected));
  for(const {s} of order){
    const p=map.latLngToContainerPoint([s.lat,s.lng]),width=Math.min(160,s.name.length*11+12);
    let box,side;
    for(const candidate of [{x:p.x+19,y:p.y-10,w:width,h:22,side:'right'},{x:p.x-width-19,y:p.y-10,w:width,h:22,side:'left'}]){
      if(candidate.x<5||candidate.x+width>size.x-5||candidate.y<5||candidate.y+22>size.y-30)continue;
      if(!occupied.some(r=>overlaps(candidate,r))){box=candidate;side=candidate.side;break;}
    }
    if(!box)continue;occupied.push(box);
    L.marker([s.lat,s.lng],{interactive:false,keyboard:false,pane:'atlasText',icon:L.divIcon({className:`atlas-place-label ${side}`,html:`<span>${s.name}</span>`,iconSize:[0,0]})}).addTo(placeLabels);
  }
}

$('panel-toggle').onclick=()=>setPanel(!$('panel').classList.contains('open'));
$('shops').onclick=e=>{const b=e.target.closest('[data-index]');if(b)showShop(Number(b.dataset.index),true);};
$('overview').onclick=overview;$('locate').onclick=locate;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(selected!==null)showList();else setPanel(false);$('panel-toggle').focus();}});
window.addEventListener('pagehide',()=>stopLocation());
window.addEventListener('resize',()=>{if(map)map.invalidateSize();});
paint();
if(window.L){
  map=L.map('map',{zoomControl:false,preferCanvas:true}).setView([35.6958,139.7575],16);
  L.control.zoom({position:'topright'}).addTo(map);L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);
  let tileFailures=0;const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,className:'context-tiles',opacity:0.58,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  tiles.on('tileerror',()=>{if(++tileFailures===3)announce('背景地図を読み込めません。通信状態を確認してください。場所一覧は利用できます。');});
  shops.forEach((s,i)=>{const m=L.marker([s.lat,s.lng],{icon:icon(i),title:s.name,keyboard:true}).addTo(map).bindTooltip(s.name,{direction:'top',offset:[0,-15],className:'map-tooltip'}).on('click',()=>showShop(i,true));markers.push(m);m.on('tooltipopen',()=>{if(placeLabels&&map.getZoom()>=17)m.closeTooltip();});});
  map.on('dragstart',()=>{follow=false;});map.on('zoomend moveend',updateAtlasLabels);paint();overview();loadAtlasBasemap();
}else{announce('地図を読み込めませんでした。通信状態を確認して再読み込みしてください。場所一覧は利用できます。');setPanel(true);}
if(window.innerWidth>=760)setPanel(true);
