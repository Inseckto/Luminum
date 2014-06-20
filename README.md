<p align="center">
<img src="https://cloud.githubusercontent.com/assets/7937110/3344610/57504ea6-f8ad-11e3-8493-1da896924b94.png">
</p>
#Luminum.js
A script that determines color brightness from hex or rgb color.
##How to use?
It's very simple to use, just 2 lines
```js
Luminum = new Luminum("#bf2e2e"); //or new Luminum("rgb(191,46,46)");
var getBrightness = Luminum.getColorBrightness();
```
___
<code>new Luminum()</code> requires one parameter, that is the hex color(with or without "#") or rgb color (with or without "rgb(...)").

<code>getColorBrightness()</code> return a boolean value: <b>true</b> if the color is light, <b>false</b> if the color is dark.
###Setting tollerance
___
You can modify the brightness threshold when you need to consider a color dark for, for example, mantain the color of text light. The tollerance value is between 0 and 125.

```js
Luminum = new Luminum("#bf2e2e");
Luminum.tollerance = 10;
var getBrightness = Luminum.getColorBrightness();
```
##Example
Now, for example, you can use <i>Luminum</i> to change the color of a text if the parent background-color is light or dark.
```html
<div id="background">
  <p>My text</p>
</div>
```

```js
// background-color from #background
var Color = $('#background').css('backgroundColor');

Luminum = new Luminum(Color);
var getBrightness = Luminum.getColorBrightness();
  
if(getBrightness) {
	$('#background > p').css('color', 'black');
} else 
{
	$('#background > p').css('color', 'white');
}	
```
<i>ps: In this example is used jQuery library</i>
