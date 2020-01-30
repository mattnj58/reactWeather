(this.webpackJsonpreactweather=this.webpackJsonpreactweather||[]).push([[0],{37:function(e,t,a){e.exports=a(77)},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(42),a(4)),i=a.n(s),m=a(27),l=a(28),u=a(35),d=a(29),h=a(36);var p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",{className:"py-4"},e.date),r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp?r.a.createElement("h1",{className:"py-2"},e.temp,"\xb0F"):null,function(e,t){if(t&&e)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},"High: ",e,"\xb0F"),r.a.createElement("span",{className:"px-4"},"Low: ",t,"\xb0F"))}(e.temp_max,e.temp_min),r.a.createElement("h4",{className:"py-3"},e.description)))},y=(a(44),function(e){return r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country...!")}),f=function(e){return r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?y():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"City",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},w=(a(45),a(14),a(15),a(79));var v=function(e){var t=e.forecast;return t?r.a.createElement("div",{className:"container"},t.map((function(e,t){return r.a.createElement(w.a,{key:t},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,function(e){var t=new Date(1e3*e),a=t.getDay(),n=t.getHours(),r="am";n>12&&(r="pm",n-=12);return function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e%7]}(a)+" "+n+r}(e.dt)),r.a.createElement("td",null,Math.round(e.main.temp_max),"\xb0F"),r.a.createElement("td",null,Math.round(e.main.temp_min),"\xb0F"))))}))," "):null},E="7b7154eb47e573afde1536472685b7fb",b="https://api.openweathermap.org/data/2.5/",g=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a,", ").concat(r)},x=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getWeather=function(t){var a,n,r,c,o,s;return i.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(t.preventDefault(),!(a=t.target.elements.city.value)){m.next=21;break}return m.next=5,i.a.awrap(fetch("".concat(b,"weather?APPID=").concat(E,"&q=").concat(a,",us&units=imperial")));case 5:return n=m.sent,m.next=8,i.a.awrap(fetch("".concat(b,"forecast?APPID=").concat(E,"&q=").concat(a,",us&units=imperial&cnt=360")));case 8:return r=m.sent,m.next=11,i.a.awrap(n.json());case 11:return c=m.sent,m.next=14,i.a.awrap(r.json());case 14:o=m.sent,s=o.list,e.setState({date:g(new Date),city:"".concat(c.name),temp:Math.round(c.main.temp),temp_max:Math.round(c.main.temp_max),temp_min:Math.round(c.main.temp_min),description:c.weather[0].description,icon:e.getWeatherIcon(c.weather[0].icon),forecast:s,error:!1}),console.log(e.state.forecast),e.getWeatherIcon(e.weatherIcon,c.weather[0].id),m.next=22;break;case 21:e.setState({error:!0});case 22:case"end":return m.stop()}}))},e.state={date:void 0,city:void 0,country:void 0,icon:void 0,main:void 0,temp:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1,forecast:void 0},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{loadweather:this.getWeather}),r.a.createElement(p,{date:this.state.date,city:this.state.city,temp:this.state.temp,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}),r.a.createElement(v,{forecast:this.state.forecast}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5c0b1e48.chunk.js.map