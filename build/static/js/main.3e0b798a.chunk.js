(this.webpackJsonpreactweather=this.webpackJsonpreactweather||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(14),a(1)),s=a.n(o),m=a(4),l=a(5),h=a(7),d=a(6),u=a(8);var p=function(e){return r.a.createElement("div",{className:'container text-light style = {{height: "100vh"}}'},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",{className:"py-4"},e.date),r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp?r.a.createElement("h1",{className:"py-2"},e.temp,"\xb0F"):null,function(e,t){if(t&&e)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},"High: ",e,"\xb0F"),r.a.createElement("span",{className:"px-4"},"Low: ",t,"\xb0F"))}(e.temp_max,e.temp_min),r.a.createElement("h4",{className:"py-3"},e.description)))},w=(a(16),function(e){return r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country...!")}),y=function(e){return r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?w():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"City",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},f=(a(17),a(18),a(19),"7b7154eb47e573afde1536472685b7fb"),v="https://api.openweathermap.org/data/2.5/",b=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a,", ").concat(r)},E=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).getWeather=function(t){var a,n,r;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.preventDefault(),!(a=t.target.elements.city.value)){c.next=14;break}return c.next=5,s.a.awrap(fetch("".concat(v,"weather?APPID=").concat(f,"&q=").concat(a,",us&units=imperial")));case 5:return n=c.sent,c.next=8,s.a.awrap(n.json());case 8:r=c.sent,console.log(r),e.setState({date:b(new Date),city:"".concat(r.name),temp:Math.round(r.main.temp),temp_max:Math.round(r.main.temp_max),temp_min:Math.round(r.main.temp_min),description:r.weather[0].description,icon:e.getWeatherIcon(r.weather[0].icon),error:!1}),e.getWeatherIcon(e.weatherIcon,r.weather[0].id),c.next=15;break;case 14:e.setState({error:!0});case 15:case"end":return c.stop()}}))},e.state={date:void 0,city:void 0,country:void 0,icon:void 0,main:void 0,temp:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{loadweather:this.getWeather}),r.a.createElement(p,{date:this.state.date,city:this.state.city,temp:this.state.temp,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.3e0b798a.chunk.js.map