const discoveryPhotos = [
  {
    "src": "assets/courtyard-card-v2.jpg",
    "alt": "Gothic arcades and illuminated windows in the inner courtyard of Munich’s Neues Rathaus.",
    "source": "https://commons.wikimedia.org/wiki/File:Courtyard_of_the_Neues_Rathaus_in_Munich.jpg",
    "author": "Wilfredor",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "position": "50% 50%",
    "changes": "Resized and compressed; displayed with responsive crop. Border trimmed.",
    "width": 1136,
    "height": 810
  },
  {
    "src": "assets/bronze-trail-card-v2.jpg",
    "alt": "Bronze memorial trail winding through the cobblestones of Viscardigasse in Munich.",
    "source": "https://commons.wikimedia.org/wiki/File:Viscardigasse_(16920849306).jpg",
    "author": "dom fellowes",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "position": "53% 50%",
    "changes": "Resized and compressed; displayed with responsive crop. Border trimmed.",
    "width": 1196,
    "height": 668
  },
  {
    "src": "assets/garden-card-v2.jpg",
    "alt": "Quiet meadow and mature trees in Hirschau, the northern Englischer Garten in Munich.",
    "source": "https://commons.wikimedia.org/wiki/File:Hirschau_Englischer_Garten_Nordteil_Muenchen-1.jpg",
    "author": "Rufus46",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "position": "44% 50%",
    "changes": "Resized and compressed; displayed with responsive crop.",
    "width": 1280,
    "height": 853
  },
  {
    "src": "assets/amalienburg-card-v2.jpg",
    "alt": "Ornate silver Rococo mirrors and windows in the Amalienburg Hall of Mirrors.",
    "source": "https://commons.wikimedia.org/wiki/File:Spiegelsaal,_Amalienburg,_Park_Schloss_Nymphenburg.jpg",
    "author": "Yelkrokoyade",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "position": "65% 50%",
    "changes": "Resized and compressed; displayed with responsive crop.",
    "width": 1280,
    "height": 848
  },
  {
    "src": "assets/asamkirche-card-v2.jpg",
    "alt": "Gilded altar and painted ceiling inside Munich’s Asamkirche.",
    "source": "https://commons.wikimedia.org/wiki/File:Asamkirche_-_Munich_-_Interior.jpg",
    "author": "Sumit Surai",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "position": "50% 45%",
    "changes": "Resized and compressed; displayed with responsive crop.",
    "width": 933,
    "height": 1400
  }
];
const days=[
{title:'Ease into the old town',area:'ALTSTADT · AN EASY FIRST DAY',stops:[['MORNING','Arrive, drop your bags, exhale.','Take the S-Bahn into the city, leave your luggage at your hotel, and find a coffee. Keep this first morning flexible after the overnight flight.'],['AFTERNOON','A market lunch & a first look around.','Browse Viktualienmarkt for a casual lunch, then wander to Marienplatz. Take your time with the old town’s courtyards and shopfronts.'],['EVENING','Your first taste of Bavaria.','Settle into a traditional inn near the center for a Bavarian dinner. Try a pretzel and a seasonal local dish, then call it an early night.']],practical:'Both S1 and S8 connect Munich Airport with the city. Check your ticket covers the airport and your destination before boarding; allow roughly 40–50 minutes to reach the center.',discovery:'A courtyard hiding in plain sight.',copy:'Slip into the courtyard of the Neues Rathaus. Just off busy Marienplatz, the neo-Gothic stonework offers a quieter moment to look up and take it all in.'},
{title:'Art, alleys & a very good lunch',area:'MAXVORSTADT · CULTURE AT YOUR PACE',stops:[['MORNING','Pick one museum. Go deep.','Explore the Alte Pinakothek’s European paintings. Give yourself time to linger with the works that catch your eye.'],['AFTERNOON','Follow your appetite through Maxvorstadt.','Find lunch around Türkenstraße, then browse the neighborhood’s bookshops and cafés. Leave a little time without a destination.'],['EVENING','A different side of the center.','Head back toward Odeonsplatz for an evening stroll, then choose a restaurant on a side street away from the main squares.']],practical:'Museum opening days vary. Check the Alte Pinakothek calendar before locking in this day, and swap it with a park day if needed.',discovery:'A shortcut with a story.',copy:'Viscardigasse is a tiny cobbled passage with a bronze trail. Known as “Drückebergergasserl,” it recalls people who took this detour to avoid the Nazi salute required on the main route.'},
{title:'Follow the city into the green',area:'ENGLISCHER GARTEN · OPEN-AIR WANDERING',stops:[['MORNING','Start in the Hofgarten.','Take your coffee for a slow walk through the formal garden, then continue toward the southern end of the Englischer Garten.'],['AFTERNOON','A picnic, a park, no rush.','Pick up picnic supplies before entering the park. Find a patch of grass, then wander toward the Monopteros for a view over the treetops.'],['EVENING','Dinner under the chestnut trees.','If the weather is good, settle into a beer garden for an easy supper. Choose a nearby indoor restaurant if rain changes the plan.']],practical:'This is a walking-heavy day: comfortable shoes and a refillable water bottle help. Beer gardens are weather-dependent, so keep an indoor dinner option.',discovery:'The quieter half of the park.',copy:'Keep walking beyond the busier southern lawns toward the northern park. The paths feel more spacious, and the city begins to sound a little further away.'},
{title:'A palace, with room to wander',area:'NYMPHENBURG · A DAY WEST OF THE CENTER',stops:[['MORNING','Take the scenic route to Nymphenburg.','Head west by public transport to Schloss Nymphenburg. Explore the palace interiors if art and architecture are your thing.'],['AFTERNOON','Trade the grand rooms for garden paths.','Walk through the palace park and stop for lunch nearby. Follow a smaller path instead of trying to cover every corner.'],['EVENING','Back to your neighborhood.','Return to the city for a relaxed dinner near your hotel. A familiar café or a restaurant you spotted earlier is a good place to start.']],practical:'The park and palace interiors have separate access details, and smaller park buildings may be seasonal. Check the official Nymphenburg schedule before you travel.',discovery:'A palace within the palace grounds.',copy:'Seek out the Amalienburg, a small Rococo hunting lodge tucked into the park. Its ornate Hall of Mirrors is a surprising contrast to the woodland paths outside.'},
{title:'One last wander, your way',area:'GLOCKENBACH · A SLOW SEND-OFF',stops:[['MORNING','Breakfast without an alarm.','Find a neighborhood café in the Glockenbachviertel. Make time for a slow breakfast and the kind of people-watching you cannot put on a checklist.'],['AFTERNOON','A riverside pause.','Walk along the Isar, browse a few independent shops, and pick up something small to take home. Leave the afternoon open if you are flying out today.'],['EVENING','A final meal—or the journey home.','If departure is tomorrow, celebrate with dinner in the neighborhood. Otherwise, swap the evening for a comfortable airport buffer.']],practical:'These are five days in Munich; the outbound flight from Chicago may leave the day before. Adjust the final day to your flight time and follow your airline’s airport arrival guidance.',discovery:'A grand church on a narrow street.',copy:'On Sendlinger Straße, the compact Asamkirche opens into an astonishingly ornate Baroque interior. If it is open to visitors, take a quiet moment before returning to the bustle.'}
];
const tabs=[...document.querySelectorAll('[role="tab"]')];
function showDay(index,focus=false){const day=days[index];updateDiscoveryPhoto(index);tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',i===index?'true':'false');tab.tabIndex=i===index?0:-1});document.getElementById('day-panel').setAttribute('aria-labelledby',`tab-${index}`);document.getElementById('day-title').textContent=day.title;document.getElementById('day-area').textContent=day.area;const list=document.getElementById('timeline');list.replaceChildren();day.stops.forEach(([time,title,copy])=>{const li=document.createElement('li');const t=document.createElement('time');t.textContent=time;const div=document.createElement('div');const h=document.createElement('h5');h.textContent=title;const p=document.createElement('p');p.textContent=copy;div.append(h,p);li.append(t,div);list.append(li)});document.getElementById('practical-copy').textContent=day.practical;document.getElementById('discovery-title').textContent=day.discovery;document.getElementById('discovery-copy').textContent=day.copy;if(focus){tabs[index].focus();tabs[index].scrollIntoView({block:'nearest',inline:'nearest'})}}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>showDay(index));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%5;if(event.key==='ArrowLeft')next=(index+4)%5;if(event.key==='Home')next=0;if(event.key==='End')next=4;if(next!==undefined){event.preventDefault();showDay(next,true)}})});
document.getElementById('trip-form').addEventListener('submit',event=>{event.preventDefault();const departure=document.getElementById('departure');const destination=document.getElementById('destination');for(const field of [departure,destination]){if(!field.value.trim()){field.setCustomValidity('Please enter a city.');field.reportValidity();field.addEventListener('input',()=>field.setCustomValidity(''),{once:true});return}}const pace=document.getElementById('pace').selectedOptions[0].text;const notice=document.getElementById('result-notice');notice.textContent=`Your trip idea: ${departure.value.trim()} → ${destination.value.trim()} · ${pace}. This prototype shows a fixed five-day Chicago → Munich itinerary; your entries do not generate a new trip.`;notice.hidden=false;showDay(0);document.getElementById('itinerary-title').focus({preventScroll:true});document.getElementById('itinerary').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});showDay(0);

function updateDiscoveryPhoto(index){
 const photo=discoveryPhotos[index];
 const img=document.getElementById('discovery-image');
 img.src=new URL(photo.src, document.baseURI).href;img.alt=photo.alt;img.style.objectPosition=photo.position||'center';
 const credit=document.getElementById('discovery-credit');
 const author=document.createElement('a');author.href=photo.source;author.textContent=photo.author;author.target='_blank';author.rel='noreferrer';
 const license=document.createElement('a');license.href=photo.licenseUrl;license.textContent=photo.license;license.target='_blank';license.rel='noreferrer';
 credit.replaceChildren(document.createTextNode('Photo: '),author,document.createTextNode(' · '),license,document.createTextNode(' · cropped'));
}
