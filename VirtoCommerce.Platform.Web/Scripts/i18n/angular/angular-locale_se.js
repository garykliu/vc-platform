"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return n==-1?0:a.length-n-1}function e(a,e){var u=e;void 0===u&&(u=Math.min(n(a),3));var o=Math.pow(10,u),m=(a*o|0)%o;return{v:u,f:m}}var u={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["iđitbeaivet","eahketbeaivet"],DAY:["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorasdat","bearjadat","lávvardat"],ERANAMES:["ovdal Kristtusa","maŋŋel Kristtusa"],ERAS:["o.Kr.","m.Kr."],FIRSTDAYOFWEEK:0,MONTH:["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"],SHORTDAY:["sotn","vuos","maŋ","gask","duor","bear","láv"],SHORTMONTH:["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss",short:"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"se",pluralCat:function(a,n){var o=0|a,m=e(a,n);return 1==o&&0==m.v?u.ONE:u.OTHER}})}]);