const jokes=['A SQL query goes into a bar, walks up to two tables and asks, “Can I join you?”',
'When your hammer is C++, everything begins to look like a thumb.',

'If you put a million monkeys at a million keyboards, one of them will eventually write a Java program.The rest of them will write Perl programs.',

'A Cobol programmer made so much money doing Y2K remediation that he was able to have himself cryogenically frozen when he died. One day in the future, he was unexpectedly resurrected.When he asked why he was unfrozen, he was told:“It’s the year 9999 – and you know Cobol.”',

'The C language combines all the power of assembly language with all the ease-of-use of assembly language.',
'Why are Assembly programmers always soaking wet? They work below C-level.',
'Why do Java programmers have to wear glasses? Because they don’t C#.',

'How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It’s HTML5.',

'A programmer had a problem. He decided to use Java. He now has a ProblemFactory.',
' 3 SQL databases walked into a NoSQL bar. A little while later they walked out, because they couldn’t find a table.',

   'An SQL query goes into a bar, walks up to two tables, and asks, “Can I join you?”',
   'A web developer walks into a restaurant. He immediately leaves in disgust as the restaurant was laid out in tables.What’s the object-oriented way to become wealthy? Inheritance.',
   'To understand what recursion is, you must first understand recursion.',

   'I called the janitor the other day to see what he could do about my dingy linoleum floor.',
   'He said he would have been happy to loan me a polisher, but that he hadn’t the slightest idea what he had done with it.',
     
   'I told him not to worry about it – that as a programmer it wasn’t the first time I had experienced a buffer allocation failure due to a memory error.',

   'These two strings walk into a bar and sit down. The bartender says, “+So what’ll it be?”',
     
   '“Please excuse my friend,” the second string says, “He isn’t null-terminated.”',
   
   'ASCII stupid question, get a stupid ANSI.',
   ' Two bytes meet. The first byte asks, “Are you ill?”The second byte replies, “No, just feeling a bit off.”',
'Two threads walk into a bar. The barkeeper looks up and yells, “Hey, I want don’t any conditions race like time last!”',
'A programmer is sent to the grocery store with instructions to “Buy butter and see whether they have eggs, if they do, then buy 10.”',

'Returning with 10 butters, the programmer says, “They had eggs.”',
'Eight bytes walk into a bar. The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes. “Make us a double.”',
'Why did the programmer quit his job?Because he didn’t get arrays.',
'UNIX is user friendly. It’s just very particular about who its friends are.',
'I don’t see women as objects. I consider each to be in a class of her own.',
'There are 2 types of people in the world. Those who can extrapolate from incomplete data…',
'There are 2 hard problems in computer science: caching, naming, and off-by-1 errors.',
'3 Errors walk into a bar. The barman says, “Normally I’d Throw you all out, but tonight I’ll make an Exception.”',
'How do you change a light bulb in c programming? You don’t. Instead, you tell the lamp to do it.',
'How do you change a light bulb in functional programming?You can’t, at least not in pure functional programming.',
'How do you change a light bulb in logical programming? You imply that it is changed.',
'How do you change a light bulb in concurrent programming?',
'You take the lamp to a secure area so nobody else can try to change the light bulb while you’re changing it. Alternatively, you might get a lamp with light bulbs that can’t be changed, and just get a new lamp when the light bulb goes out.'

 ]
 let r=0
let no=Math.floor(Math.random()*jokes.length);
let joke=document.getElementById('display');  
    joke.innerHTML=jokes[no]; 
  
let next=document.getElementById("button");
next.addEventListener('click',()=>{
   no=Math.floor(Math.random()*jokes.length); 
    joke.innerHTML=jokes[no]; 
})
let intervalId; // Declare intervalId outside the event listener

let auto = document.getElementById("button1");
 // Assuming no is declared somewhere else in your code

auto.addEventListener('click', (e) => {
    if (auto.innerHTML === 'auto joke') {
        // Start the interval if it's not already running
        intervalId = setInterval(function () {
            let no = Math.floor(Math.random() * jokes.length);
            joke.innerHTML = jokes[no]; // Assuming jokes array is declared somewhere else in your code
        }, 4000);
        auto.innerHTML = 'stop';
    } else {
        // Stop the interval if it's running
        if (intervalId) {
            clearInterval(intervalId);
            auto.innerHTML = 'auto joke';
        }
    }
});
