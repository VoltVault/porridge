<!-- @format -->

<br /> 
<br /> 
<br /> 
<br /> 
<br /> 
<br /> 
 
<p align="center"><a href="#Porridge.js"><img src="https://github.com/VoltVault/porridge-docs/blob/main/public/logo512.png?raw=true" alt="The Porridge.js logo" height="145px"></img></a></p> 
<h1 align="center">Porridge.js</h1> 
<p align="center"> 
🚗 Porridge.js is a new open source javascript 📖 library. Feel free to contribute, <br /> and include an emoji in the commit message 😄. 
</p> 
<p align="center"> 
<a href="https://github.com/VoltVault/porridge/network/members/"><img src="https://img.shields.io/github/forks/VoltVault/porridge" alt="Forks on this repo"></img></a> 
<a href="https://twitter.com/intent/tweet?text=Ckeck%20out%20this%20new%20javascript%20library%20called%20porridge%20js&url=https://github.com/VoltVault/porridge&via=porridge&hashtags=leiloukou,javascript,react,vue,developers"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="Tweet" height="20"/></a> <a href="https://github.com/VoltVault/porridge/stargazers/"><img src="https://img.shields.io/github/stars/VoltVault/porridge" alt="Stars on this repo"></img></a> <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/VoltVault/porridge/total"></a> <a href="https://github.com/voltvault/porridge/releases"><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/VoltVault/porridge"></a> <a href="https://github.com/VoltVault/porridge/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Code of conduct" /></a> 
</p> 
<h3 align="center"> 
 <a href="https://porridgejs.netlify.app/docs/">Get started</a> 
 <span> · </span> 
 <a href="https://porridgejs.netlify.app/docs/">Docs</a> 
 <span> · </span> 
 <a href="https://github.com/voltvault/porridge/discussions?discussions_q=category%3AIdeas">Feature request</a> 
 <span> · </span> 
 <a href="https://github.com/voltvault/porridge/issues">Report a bug</a> 
 <span> · </span> 
 Support: <a href="https://github.com/voltvault/porridge/discussions">Discussions</a> 
</h3> 
 
<br /> 
<br /> 
<br /> 
<br /> 
<br /> 
<br /> 
 
## 🙉 Why should I even like Porridge? 
 
Porridge.js is the \#1 Javascript library <br /> 
for beginners to experts. <br /> 
No matter how much you know javascript, <br /> 
Porridge.js will be perfect for you. <br /> 
Out of _**all**_ Javascript libraries and frameworks, <br /> 
Porridge.js has the _**lowest**_ learning curve. <br /> 
If you want to be the JavaScript developer <br /> 
that codes faster, more simply, readably, <br /> 
and securely than anyone else on your team; <br /> 
then Porridge.js is the JavaScript library for you! <br /> 
 
## ⚡ Fast implementation 
 
We have optimized our code to be as preformat as possible, <br /> 
and you can add it to you project with ease. <br />

### &lt;/> Implementation through a script tag:

Make sure to put it above all other scripts. <br />

```html
<script src="https://porridge-cdn.netlify.app/porridge/index.js" type="text/javascript" async defer></script>
```

<br /> 
 
### &lt;/> Implementation through self hosted javascript 
 
 > :warning: **Constant updates**: _Every_ time that Porridge.js updates, you have to _*copy && paste*_ the newest Porridge.js code. 
 
You can copy the code at the [index.js](https://github.com/VoltVault/porridge/blob/main/porridge/index.js) file. <br /> 
Or view the raw code at https://raw.githubusercontent.com/voltvault/porridge/main/porridge.js.

## 🎓 learning Porridge

If you would like to learn th art of Porridge, <br />
The documentation [lives here](https://porridgejs.netlify.app/docs/) <br />

## 🥐 Everyday uses

Let's look at some real world examples.

### Random filters

First you will include the porridge.js link, <br />
at the top of your head tag. <br />

```html
<script src="https://porridge-cdn.netlify.app/porridge/index.js" type="text/javascript" async defer></script>
```

Next, you will create a function that will <br />
get a random filter from an array of filters. <br />
⚠️ **Note:** Your array of filters can be an array of anything.. <br />

```javascript
// You do not have to have an array of objects,
// you can have an array of anything, including:
//     arrays, strings,
//     numbers, floats,
//     dates, objects,
//     booleans, other variables,
//     and even functions!
const filters = [
	{
		name: 'Pug Face',
		code: 'a91nc49'
	},
	{
		name: 'Flower Crown',
		code: '1nv0ehx'
	},
	{
		name: 'Balloon Head',
		code: 'hq9ch3b'
	},
	{
		name: 'French Fry',
		code: 'qn8e7dc'
	},
	{
		name: 'Stretch-a-Noodle',
		code: '8xhd3jc'
	}
];

let randomFilter;

function generateRandomFilter() {
	randomFilter = porridge.array.rand(filters);

	return randomFilter;
}
```

Make sure to check out the docs to see even more practical usage.

## 💬 Community

If you have a question or would like to talk with other Porridge.js <br />
users and join our community, please hop over to [Github discussions](https://github.com/Budibase/budibase/discussions). <br />

## ⚒️ Built With

-   Vanilla Javascript

## 🙌 Contributing

Please read [CONTRIBUTE.md](https://github.com/VoltVault/porridge/blob/main/CONTRIBUTE.md#contribution), [CODE_OF_CONDUCT.md](https://github.com/VoltVault/porridge/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct), and the [Github Site Policy](https://docs.github.com/github/site-policy) for details on our code of conduct, <br />
and the process for submitting pull requests to us. <br />

> :warning: **The code of conduct and contributing rules are always enforced**: <br /> you must abide by the rules, and terms in both the <br /> CODE_OF_CONDUCT.md file, the CONTRIBUTION.md file, and the Github Sit Policy <br />

## 🧮 Versioning

We use <a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a> && <a href="https://github.com/" target="_blank" rel="noopener">Github</a> for versioning. <br />
For the versions available, see the [tags on this repository](https://github.com/voltvault/porridge/tags/). <br />

## 🌱 Authors & Contributors

-   **Lil' Wuth** - _Initial work_ - [@leiloukou](https://github.com/leiloukou/).

See also the list of [contributors](https://github.com/voltvault/porridge/contributors) who participated in this project. <br />

## ❗ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. <br />

## 🤝 Acknowledgments

-   My Dad - For helping me with business decisions.
-   [@Nastyox](https://github.com/Nastyox) - For the creating [reporoster](https://reporoster.com/).
-   [Contributor Covenant][https://www.contributor-covenant.org/] - for creating an awesome code of conduct.

### ⭐ Stargazers

[![Stargazers repo roster for @VoltVault/porridge](https://reporoster.com/stars/dark/notext/VoltVault/porridge)](https://github.com/VoltVault/porridge/stargazers) <br />

### 🍽️ Forkers

[![Forkers repo roster for @VoltVault/porridge](https://reporoster.com/forks/dark/notext/VoltVault/porridge)](https://github.com/VoltVault/porridge/network/members) <br />

## 👏 Support this project

This project has been worked on for al long time, <br />
so if you want to contribute to our efforts, <br />
please give us a star. <br />

You can also share this on twitter. <br />

<!-- [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Ckeck%20out%20this%20new%20javascript%20library%20called%20porridge%20js&url=https://github.com/VoltVault/porridge&via=porridge&hashtags=leiloukou,javascript,react,vue,developers) <br />  -->

<p align="center"><a href="https://twitter.com/intent/tweet?text=Ckeck%20out%20this%20new%20javascript%20library%20called%20porridge%20js&url=https://github.com/VoltVault/porridge&via=porridge&hashtags=leiloukou,javascript,react,vue,developers"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="Twitter icon"> Tweet</a> <br /> 
<a href="#porridgejs"><img src="https://img.shields.io/badge/%E2%86%91-Back%20to%20top-lightgrey" alt="Back to top" height="29"/></a></p> <br />
