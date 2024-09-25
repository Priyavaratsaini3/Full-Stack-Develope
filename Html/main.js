const msgerForm =  get(".msger-inputarea");
const msgerInput =  get(".msger-input");
const msgerChat =  get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "bot.png";
const BOT_NAME = "TRAVEL BOT";
const PERSON_NAME = "SHORYANG";

const prompts = [
    "What type of activities are you interested in for your trip?",
    "Are you looking for recommendations on places to visit or things to do?",
    "What destination are you planning to visit?",
    "Do you need information about local attractions or landmarks?",
    "Would you like suggestions for hotels or restaurants in your destination?",
    "Are you looking for budget-friendly or luxury accommodation options?",
    "How many days are you planning to spend at your destination?",
    "Do you need help organizing your travel itinerary?",
    "Would you like assistance with booking flights or accommodation?",
    "Are you interested in guided tours or local experiences?",
    "Do you need tips on how to stay safe while traveling?",
    "Would you like advice on local customs and etiquette?",
    "Are you interested in finding local events or festivals happening during your visit?",
    "Do you need suggestions for family-friendly or adventure activities?",
    "Do you need information on local transportation options?",
    "Would you like help with renting a car or finding public transport?",
    "Would you like to know the current weather conditions at your destination?",
    "Do you need advice on what to pack based on the weather forecast?",
    "Do you need information on emergency contacts or services at your destination?",
    "Are you looking for assistance with travel insurance or health recommendations?",
    "Would you like to learn more about the cultural or historical significance of your destination?",
    "Are you interested in local traditions or historical landmarks?",
    "Do you need information on visa requirements or travel restrictions for your destination?",
    "Would you like updates on current travel advisories or entry requirements?"
];

const replies = [
    "I'm here to help with all kinds of activities and recommendations.",
    "I can provide details on local attractions and landmarks.",
    "Tell me more about your destination, and I can offer tailored advice.",
    "I can suggest hotels and restaurants based on your preferences.",
    "Let me know your budget, and I can recommend suitable options.",
    "How long are you planning to stay? I can help with itinerary planning.",
    "I can assist with booking flights, accommodation, or local tours.",
    "I have tips on staying safe and advice on local customs and etiquette.",
    "I can find local events and activities suitable for all interests.",
    "Let me provide information on transportation options or car rentals.",
    "I can give you the current weather conditions and packing advice.",
    "I can help with emergency contacts, travel insurance, and health tips.",
    "Learn about cultural and historical sites or local traditions.",
    "Get the latest on visa requirements, travel restrictions, and advisories."
];

const alternative = [
    "Try again...",
    "I'm listening...",
    "I don.t understand :/ "
]

const robot = ["I am not a Bot" ];
msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const mesText = msgerInput.value;
    if(!imgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", mesText);
    output(mesText);
});
function output(input){
    let product ;
    let text = input.toLowerCase().replies(/[\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, "")
    .replace(/ i feel /g, "")
    .replace(/ whats /g, "What is")
    .replace(/ please /g, "")
    .replace(/ r u  /g, "are you");

    if(compare(prompts, replies, text)){
        product = compare(prompt , replies, text);
    }
    else if (text.match(/thanks/gi)){
        product = "You are welcome"
    }
    else if(text.Match(/(robot|bot|robo)/gi)){
        product: robot[match.floor(Math.random() * robot.length())]
    }
    else{
        product.alternative[Math.floor(Math.random() * alternative.length)];
    }

    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    
    }, delay);

}
function compare(promptsArray, repliesArray, string ){
    let replay;
    let replayFound = false ;
    for(let x = 0 ; x < promptsArray.length; x++){
        for(let y= 0 ; y < promptsArray[x].length; y++){
            if (promptsArray[x][y] === string){
            let replies = repliesArray[x];
            replay = replies[Math.floor(Math.random() * replies.length)];
            replayFound = true;
            break;
        }
    }
    if(replayFound){
        break;
    }
}
return replay; 
}

function addChat(name , img , side , text){
    const msgHTML = ` 
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image:url(${img})"></div>
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">${name}</div>
    <div class="msg-info-time">${FormDate(new Date())}</div>
    </div>
    <div class="msg-text"${text}></div>
    </div>
    </div>`;
    msgerChat.insertAdjacentHTML("beforend", msgHTML);
    msgerChat.scrollTop += 500;
}

function get(selector, root = document){
    return root.querySelector(selector);
}
function FormDate(date){
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}: ${m.slice(-2)}`;

}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}