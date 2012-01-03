// ==UserScript==
// @name          Blackboard embedded to link
// @version		  1.0
// @namespace	  http://bear24rw.com
// @description	  Replaces embedded objects with a link
// @include       http*://blackboard.uc.edu/*
// ==/UserScript==

// http://userscripts.org/scripts/show/114014

var embed = document.getElementsByTagName("embed")[0].src;
if (embed) {
	var name = document.getElementById("pageTitleText").innerHTML;
	var string = '<a href="' + embed + '">' + name + '</a>';
	document.getElementById("containerdiv").innerHTML = string;
}
