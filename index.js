const { default: axios } = require('axios');
const { Telegraf } = require('telegraf');

// How to get the secret token for creating a bot ? ---> Open telegram and search for BotFather
// To read instruction type /start and press enter
// To create a new bot type /newbot and press enter
// It will ask for a bot name . Give a bot name without a / . eg. codingbot
// Then it will ask for a username ending with bot. e.g dsa_made_simplified_bot
// URL of my bot is : t.me/dsa_made_simplified_bot

let binarySearch = `
This is the code for Binary Search In Javascript : 

let recursiveFunction = function (arr, x, start, end) {

	// Base Condition
	if (start > end) return false;

	// Find the middle index
	let mid = Math.floor((start + end) / 2);

	// Compare mid with given key x
	if (arr[mid] === x) return true;

	// If element at mid is greater than x,
	// search in the left half of mid
	if (arr[mid] > x)
		return recursiveFunction(arr, x, start, mid - 1);
	else

		// If element at mid is smaller than x,
		// search in the right half of mid
		return recursiveFunction(arr, x, mid + 1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else { console.log("Element not found!"); }

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else { console.log("Element not found!"); }

`;
const bot = new Telegraf('6868806311:AAHrNiH9AiEuX07CU_Vw4WnyW1VH6tS-XVI');

bot.start((ctx) => ctx.reply('Welcome To the Coding Bot from Vishal'));

bot.command('binarysearchjs', (ctx) => ctx.reply(binarySearch));
bot.command('whomadethis', (ctx) =>
  ctx.reply('Vishal Prakash : @prakashvishal93 ')
);
bot.command('binarytreejs', async function (ctx) {
  const response = await axios.get();
});

bot.on('sticker', (ctx) => ctx.reply('❤️'));

bot.launch();
