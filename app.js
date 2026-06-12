const regions=[
 {id:'all',ru:'Вся Япония',en:'All Japan',jp:'日本全国'},
 {id:'hokkaido',ru:'Хоккайдо',en:'Hokkaido',jp:'北海道'},
 {id:'tohoku',ru:'Тохоку',en:'Tohoku',jp:'東北地方'},
 {id:'kanto',ru:'Канто',en:'Kanto',jp:'関東地方'},
 {id:'chubu',ru:'Тюбу',en:'Chubu',jp:'中部地方'},
 {id:'kansai',ru:'Кансай',en:'Kansai',jp:'関西地方'},
 {id:'chugoku',ru:'Тюгоку',en:'Chugoku',jp:'中国地方'},
 {id:'shikoku',ru:'Сикоку',en:'Shikoku',jp:'四国地方'},
 {id:'kyushu',ru:'Кюсю и Окинава',en:'Kyushu & Okinawa',jp:'九州・沖縄'}
];

const prefectureRows=[
 ['hokkaido','Hokkaido','Хоккайдо','北海道','hokkaido'],
 ['aomori','Aomori','Аомори','青森県','tohoku'],['iwate','Iwate','Иватэ','岩手県','tohoku'],['miyagi','Miyagi','Мияги','宮城県','tohoku'],['akita','Akita','Акита','秋田県','tohoku'],['yamagata','Yamagata','Ямагата','山形県','tohoku'],['fukushima','Fukushima','Фукусима','福島県','tohoku'],
 ['ibaraki','Ibaraki','Ибараки','茨城県','kanto'],['tochigi','Tochigi','Тотиги','栃木県','kanto'],['gunma','Gunma','Гумма','群馬県','kanto'],['saitama','Saitama','Сайтама','埼玉県','kanto'],['chiba','Chiba','Тиба','千葉県','kanto'],['tokyo','Tokyo','Токио','東京都','kanto'],['kanagawa','Kanagawa','Канагава','神奈川県','kanto'],
 ['niigata','Niigata','Ниигата','新潟県','chubu'],['toyama','Toyama','Тояма','富山県','chubu'],['ishikawa','Ishikawa','Исикава','石川県','chubu'],['fukui','Fukui','Фукуи','福井県','chubu'],['yamanashi','Yamanashi','Яманаси','山梨県','chubu'],['nagano','Nagano','Нагано','長野県','chubu'],['gifu','Gifu','Гифу','岐阜県','chubu'],['shizuoka','Shizuoka','Сидзуока','静岡県','chubu'],['aichi','Aichi','Айти','愛知県','chubu'],
 ['mie','Mie','Миэ','三重県','kansai'],['shiga','Shiga','Сига','滋賀県','kansai'],['kyoto','Kyoto','Киото','京都府','kansai'],['osaka','Osaka','Осака','大阪府','kansai'],['hyogo','Hyogo','Хёго','兵庫県','kansai'],['nara','Nara','Нара','奈良県','kansai'],['wakayama','Wakayama','Вакаяма','和歌山県','kansai'],
 ['tottori','Tottori','Тоттори','鳥取県','chugoku'],['shimane','Shimane','Симанэ','島根県','chugoku'],['okayama','Okayama','Окаяма','岡山県','chugoku'],['hiroshima','Hiroshima','Хиросима','広島県','chugoku'],['yamaguchi','Yamaguchi','Ямагути','山口県','chugoku'],
 ['tokushima','Tokushima','Токусима','徳島県','shikoku'],['kagawa','Kagawa','Кагава','香川県','shikoku'],['ehime','Ehime','Эхимэ','愛媛県','shikoku'],['kochi','Kochi','Коти','高知県','shikoku'],
 ['fukuoka','Fukuoka','Фукуока','福岡県','kyushu'],['saga','Saga','Сага','佐賀県','kyushu'],['nagasaki','Nagasaki','Нагасаки','長崎県','kyushu'],['kumamoto','Kumamoto','Кумамото','熊本県','kyushu'],['oita','Oita','Оита','大分県','kyushu'],['miyazaki','Miyazaki','Миядзаки','宮崎県','kyushu'],['kagoshima','Kagoshima','Кагосима','鹿児島県','kyushu'],['okinawa','Okinawa','Окинава','沖縄県','kyushu']
];
const prefectures=prefectureRows.map(([id,en,ru,jp,region])=>({id,en,ru,jp,region}));
const byId=Object.fromEntries(prefectures.map(p=>[p.id,p]));

const copy={
 ru:{progress:'ПРОГРЕСС',accuracy:'ТОЧНОСТЬ',mistakes:'ОШИБКИ',homeKicker:'47 ПРЕФЕКТУР · ОДНА КАРТА',homeTitle:'Знаешь ли ты<br><span>Японию?</span>',homeText:'Получай название префектуры и находи её на карте по памяти. Пять ошибок — и карта покажет правильный ответ.',start:'ВЫБРАТЬ РЕГИОН',back:'← НАЗАД',regionKicker:'РЕЖИМ ИГРЫ',regionTitle:'Выбери <span>регион</span>',regionText:'Названия крупно на русском, японское название — снизу.',pref:'ПРЕФ.',instruction:'НАЙДИ НА КАРТЕ',click:'Нажми на нужную префектуру',wrong:'Не здесь. Попробуй ещё раз.',left:n=>`Осталось попыток: ${n}`,correct:'Верно! Следующая префектура…',revealed:'Пять ошибок. Правильный ответ подсвечен.',finishKicker:'ТРЕНИРОВКА ЗАВЕРШЕНА',finishTitle:'Отличная работа',finishText:'Префектур найдено без подсказки',clicks:'ВСЕГО КЛИКОВ',region:'РЕГИОН',replay:'СЫГРАТЬ ЕЩЁ РАЗ',change:'Сменить регион'},
 en:{progress:'PROGRESS',accuracy:'ACCURACY',mistakes:'MISTAKES',homeKicker:'47 PREFECTURES · ONE MAP',homeTitle:'How well do you<br><span>know Japan?</span>',homeText:'Get a prefecture name and locate it on the map from memory. After five mistakes, the correct answer will light up.',start:'CHOOSE A REGION',back:'← BACK',regionKicker:'GAME MODE',regionTitle:'Choose a <span>region</span>',regionText:'Names are shown in English with Japanese underneath.',pref:'PREF.',instruction:'FIND ON THE MAP',click:'Click the correct prefecture',wrong:'Not there. Try again.',left:n=>`${n} attempts remaining`,correct:'Correct! Loading the next prefecture…',revealed:'Five mistakes. The correct answer is highlighted.',finishKicker:'PRACTICE COMPLETE',finishTitle:'Great work',finishText:'Prefectures found without a hint',clicks:'TOTAL CLICKS',region:'REGION',replay:'PLAY AGAIN',change:'Change region'}
};

const state={lang:localStorage.getItem('nihonDropLanguage')||'ru',region:'all',queue:[],index:0,mistakes:0,totalClicks:0,correct:0,locked:false,solved:new Set()};
const zoom={x:0,y:0,w:438,h:516,home:null,dragging:false,moved:false,startX:0,startY:0,startBox:null};
const $=s=>document.querySelector(s);const tr=k=>copy[state.lang][k];
const name=p=>p[state.lang];const region=id=>regions.find(r=>r.id===id);
const screens=['homeScreen','regionScreen','quizScreen','finishScreen'];
let currentScreen='homeScreen';

function show(id){currentScreen=id;screens.forEach(s=>$('#'+s).classList.toggle('active',s===id));$('#gameStats').style.display=id==='quizScreen'?'flex':'none'}
function navigate(id,{replace=false}={}){show(id);const method=replace?'replaceState':'pushState';history[method]({screen:id},'',`#${id.replace('Screen','')}`)}
function shuffle(items){return [...items].sort(()=>Math.random()-.5)}

function renderRegions(){
 $('#regionGrid').innerHTML=regions.map(r=>{const count=r.id==='all'?47:prefectures.filter(p=>p.region===r.id).length;return `<button class="region-card" data-region="${r.id}"><span><b class="region-name">${r[state.lang]}</b><span class="region-jp">${r.jp}</span></span><span class="region-card-count">${count} ${tr('pref')}</span></button>`}).join('');
 document.querySelectorAll('.region-card').forEach(button=>button.onclick=()=>startGame(button.dataset.region));
}

function renderMap(){
 const allowed=new Set(prefectures.filter(p=>state.region==='all'||p.region===state.region).map(p=>p.id));
 $('#japanMap').innerHTML=window.JAPAN_MAP.locations.map(location=>`<path class="prefecture-shape${allowed.has(location.id)?'':' disabled'}" data-id="${location.id}" aria-label="${location.name}" d="${location.path}"></path>`).join('');
 document.querySelectorAll('.prefecture-shape:not(.disabled)').forEach(path=>{
   path.addEventListener('click',()=>{if(!zoom.moved)handleGuess(path.dataset.id)});
 });
 requestAnimationFrame(fitSelectedRegion);
}

function setViewBox(box){
 const svg=$('#japanMap');zoom.x=box.x;zoom.y=box.y;zoom.w=box.w;zoom.h=box.h;svg.setAttribute('viewBox',`${zoom.x} ${zoom.y} ${zoom.w} ${zoom.h}`);svg.classList.toggle('can-pan',zoom.w<437);$('#dragHint').classList.toggle('visible',zoom.w<400);
}
function clampBox(box){
 let w=Math.max(55,Math.min(438,box.w)),h=w*(516/438);if(h>516){h=516;w=438}const x=Math.max(0,Math.min(438-w,box.x)),y=Math.max(0,Math.min(516-h,box.y));return{x,y,w,h};
}
function fitSelectedRegion(){
 if(state.region==='all'){zoom.home={x:0,y:0,w:438,h:516};setViewBox(zoom.home);return}
 const paths=[...document.querySelectorAll('.prefecture-shape:not(.disabled)')];if(!paths.length)return;const boxes=paths.map(path=>path.getBBox());const minX=Math.min(...boxes.map(b=>b.x)),minY=Math.min(...boxes.map(b=>b.y)),maxX=Math.max(...boxes.map(b=>b.x+b.width)),maxY=Math.max(...boxes.map(b=>b.y+b.height));const width=maxX-minX,height=maxY-minY,pad=Math.max(width,height)*.18;let box={x:minX-pad,y:minY-pad,w:width+pad*2,h:height+pad*2};const ratio=438/516;if(box.w/box.h>ratio){const h=box.w/ratio;box.y-=(h-box.h)/2;box.h=h}else{const w=box.h*ratio;box.x-=(w-box.w)/2;box.w=w}zoom.home=clampBox(box);setViewBox(zoom.home);
}
function zoomBy(factor){const cx=zoom.x+zoom.w/2,cy=zoom.y+zoom.h/2,w=zoom.w*factor,h=zoom.h*factor;setViewBox(clampBox({x:cx-w/2,y:cy-h/2,w,h}))}
function resetZoom(){setViewBox(zoom.home||{x:0,y:0,w:438,h:516})}
function beginPan(event){if(zoom.w>=437)return;zoom.dragging=true;zoom.moved=false;zoom.startX=event.clientX;zoom.startY=event.clientY;zoom.startBox={x:zoom.x,y:zoom.y,w:zoom.w,h:zoom.h};$('#japanMap').classList.add('is-panning')}
function movePan(event){if(!zoom.dragging)return;const rect=$('#japanMap').getBoundingClientRect(),dx=(event.clientX-zoom.startX)*zoom.w/rect.width,dy=(event.clientY-zoom.startY)*zoom.h/rect.height;if(Math.abs(event.clientX-zoom.startX)>4||Math.abs(event.clientY-zoom.startY)>4)zoom.moved=true;setViewBox(clampBox({x:zoom.startBox.x-dx,y:zoom.startBox.y-dy,w:zoom.w,h:zoom.h}))}
function endPan(){if(!zoom.dragging)return;zoom.dragging=false;$('#japanMap').classList.remove('is-panning');setTimeout(()=>zoom.moved=false,0)}

function startGame(regionId){
 state.region=regionId;state.queue=shuffle(prefectures.filter(p=>regionId==='all'||p.region===regionId));state.index=0;state.mistakes=0;state.totalClicks=0;state.correct=0;state.locked=false;state.solved=new Set();
 navigate('quizScreen');renderMap();loadQuestion();
}

function loadQuestion(){
 if(state.index>=state.queue.length){finishGame();return}
 state.mistakes=0;state.locked=false;
 document.querySelectorAll('.prefecture-shape').forEach(path=>{path.classList.remove('wrong','correct','assisted','revealed');path.classList.toggle('solved',state.solved.has(path.dataset.id))});
 const target=state.queue[state.index];const card=$('.question-card');card.classList.remove('question-enter');void card.offsetWidth;card.classList.add('question-enter');$('#targetName').textContent=name(target);$('#targetJapanese').textContent=target.jp;$('#feedbackText').textContent=tr('click');$('#feedbackText').className='';renderDots();updateStats();
}

function handleGuess(id){
 if(state.locked)return;state.totalClicks++;const target=state.queue[state.index];const path=document.querySelector(`[data-id="${id}"]`);
 if(id===target.id){
   state.locked=true;state.correct++;state.solved.add(id);path.classList.remove('solved');path.classList.add(state.mistakes===0?'correct':'assisted');$('#feedbackText').textContent=tr('correct');$('#feedbackText').className=state.mistakes===0?'success':'warning';updateStats();setTimeout(advance,850);return;
 }
 state.mistakes++;path.classList.add('wrong');$('.map-card').classList.remove('flash');void $('.map-card').offsetWidth;$('.map-card').classList.add('flash');setTimeout(()=>path.classList.remove('wrong'),420);renderDots();updateStats();
 if(state.mistakes>=5){
   state.locked=true;const answer=document.querySelector(`[data-id="${target.id}"]`);answer.classList.remove('solved');answer.classList.add('revealed');$('#feedbackText').textContent=tr('revealed');$('#feedbackText').className='warning';setTimeout(advance,1500);
 }else{$('#feedbackText').textContent=state.mistakes===1?tr('wrong'):tr('left')(5-state.mistakes);$('#feedbackText').className=''}
}

function advance(){state.index++;loadQuestion()}
function renderDots(){$('#attemptDots').innerHTML=Array.from({length:5},(_,i)=>`<i class="${i<state.mistakes?'used':''}"></i>`).join('')}
function updateStats(){
 const finished=Math.min(state.index,state.queue.length);$('#progressValue').textContent=`${finished} / ${state.queue.length}`;$('#mistakesValue').textContent=`${state.mistakes} / 5`;
 const accuracy=state.totalClicks?Math.round(state.correct/state.totalClicks*100):100;$('#accuracyValue').textContent=`${accuracy}%`;
 const stats=$('#gameStats');stats.classList.remove('stat-bump');void stats.offsetWidth;stats.classList.add('stat-bump');
}
function finishGame(){
 const accuracy=state.totalClicks?Math.round(state.correct/state.totalClicks*100):100;$('#finishScore').textContent=`${state.correct} / ${state.queue.length}`;$('#finalAccuracy').textContent=`${accuracy}%`;$('#finalClicks').textContent=state.totalClicks;$('#finalRegion').textContent=region(state.region).jp;navigate('finishScreen',{replace:true});
}
function toggleReference(open){$('#referenceDrawer').classList.toggle('open',open);$('#referenceBackdrop').classList.toggle('open',open);$('#referenceDrawer').setAttribute('aria-hidden',String(!open))}

function applyLanguage(){
 document.documentElement.lang=state.lang;$('#langButton').textContent=state.lang==='ru'?'EN':'RU';$('#progressLabel').textContent=tr('progress');$('#accuracyLabel').textContent=tr('accuracy');$('#mistakesLabel').textContent=tr('mistakes');
 $('#homeKicker').textContent=tr('homeKicker');$('#homeTitle').innerHTML=tr('homeTitle');$('#homeText').textContent=tr('homeText');$('#startText').textContent=tr('start');$('#backButton').textContent=tr('back');$('#regionKicker').textContent=tr('regionKicker');$('#regionTitle').innerHTML=tr('regionTitle');$('#regionText').textContent=tr('regionText');$('#instructionLabel').textContent=tr('instruction');
 $('#finishKicker').textContent=tr('finishKicker');$('#finishTitle').textContent=tr('finishTitle');$('#finishText').textContent=tr('finishText');$('#finalAccuracyLabel').textContent=tr('accuracy');$('#finalClicksLabel').textContent=tr('clicks');$('#finalRegionLabel').textContent=tr('region');$('#replayText').textContent=tr('replay');$('#changeRegionButton').textContent=tr('change');renderRegions();
 $('#referenceButtonText').textContent=state.lang==='ru'?'КАРТА С НАЗВАНИЯМИ':'LABELED MAP';$('#referenceKicker').textContent=state.lang==='ru'?'СПРАВОЧНАЯ КАРТА':'REFERENCE MAP';$('#referenceTitle').textContent=state.lang==='ru'?'Регионы и префектуры':'Regions and prefectures';$('#referenceNote').textContent=state.lang==='ru'?'Используй как подсказку и закрой, когда будешь готов продолжить.':'Use this as a hint, then close it when you are ready to continue.';$('#quizExitText').textContent=state.lang==='ru'?'НАЗАД К РЕГИОНАМ':'BACK TO REGIONS';$('#dragHint').textContent=state.lang==='ru'?'ПЕРЕТАСКИВАЙ КАРТУ':'DRAG TO MOVE';
 if(state.queue.length&&state.index<state.queue.length){const target=state.queue[state.index];$('#targetName').textContent=name(target);if(!state.locked)$('#feedbackText').textContent=state.mistakes?tr('left')(5-state.mistakes):tr('click')}
}

$('#startButton').onclick=()=>navigate('regionScreen');$('#backButton').onclick=()=>history.back();$('#homeButton').onclick=()=>navigate('homeScreen');$('#replayButton').onclick=()=>startGame(state.region);$('#changeRegionButton').onclick=()=>navigate('regionScreen');
$('#referenceButton').onclick=()=>toggleReference(true);$('#referenceClose').onclick=()=>toggleReference(false);$('#referenceBackdrop').onclick=()=>toggleReference(false);
$('#quizExitButton').onclick=()=>{toggleReference(false);state.locked=true;history.back()};
$('#zoomInButton').onclick=()=>zoomBy(.72);$('#zoomOutButton').onclick=()=>zoomBy(1.38);$('#zoomResetButton').onclick=resetZoom;
$('#japanMap').addEventListener('pointerdown',beginPan);$('#japanMap').addEventListener('pointermove',movePan);$('#japanMap').addEventListener('pointerup',endPan);$('#japanMap').addEventListener('pointerleave',endPan);$('#japanMap').addEventListener('pointercancel',endPan);
$('#langButton').onclick=()=>{state.lang=state.lang==='ru'?'en':'ru';localStorage.setItem('nihonDropLanguage',state.lang);applyLanguage()};
window.addEventListener('popstate',event=>{
 const screen=event.state?.screen||'homeScreen';toggleReference(false);show(screen);
 if(screen==='quizScreen'&&state.queue.length){state.locked=false;renderMap();loadQuestion()}
});
history.replaceState({screen:'homeScreen'},'','#home');
applyLanguage();
