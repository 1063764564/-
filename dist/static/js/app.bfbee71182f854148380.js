webpackJsonp([1],{"4ml/":function(a,e){},K0al:function(a,e){},MpC3:function(a,e){},NHnr:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("7+uW"),r={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},r,!1,function(a){t("K0al")},null,null).exports,i=t("/ocq"),o=t("Dd8w"),c=t.n(o),p=t("pFYg"),l=t.n(p),u=t("//Fk"),_=t.n(u),h=t("mtWM"),v=t.n(h),m=(t("mw3O"),v.a.create({baseURL:"https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather",timeout:2e3}));m.interceptors.request.use(function(a){return a.headers["Content-Type"]="application/json;charset=UTF-8",a},function(a){return console.log(a),_.a.reject(a)}),m.interceptors.response.use(function(a){return _.a.resolve(a.data)},function(a){return _.a.reject(a.response)});var w=m;var d={name:"Home",data:function(){return{city:"",weatherData:{},earlywarn:{}}},created:function(){var a=this;console.log("process.env.BASE_API:","https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather"),this.$nextTick(function(){a.hetrequest("深圳")})},methods:{onSearch:function(a){console.log("搜索val:",a),this.hetrequest(a)},hetrequest:function(a){var e=this;(function(a){return w({url:"https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather&app_key=B62F573DA64D74D8EF8493FE2AFC9FCF&sign=&city="+a,method:"get"})})(a).then(function(a){console.log("天氣查询res:",a),200==a.ret?"object"==l()(a.data.weather)?(e.weatherData=c()({},a.data.weather),e.earlywarn=a.data.weather.alarm?a.data.weather.alarm:""):(console.log("吐司吐司吐司"),e.$toast({message:a.data.weather,icon:"warning"})):e.$toast({message:a.data.weather,icon:"warning"})}).catch(function(a){e.$toast({message:res.data.weather,icon:"warning"})})}}},f={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("van-search",{attrs:{shape:"round",background:"#a0c5e8",placeholder:"请输入搜索关键词"},on:{search:a.onSearch},model:{value:a.city,callback:function(e){a.city=e},expression:"city"}}),a._v(" "),t("div",{staticClass:"main"},[t("h2",[a._v("天气实况:")]),a._v(" "),t("ul",[t("li",[t("p",[t("i",{staticClass:"iconfont icon-tianqi-duoyunlan blue ft-25"}),t("span",[a._v(a._s(a.weatherData.city))]),t("span",{staticClass:"mar-20"},[a._v(a._s(a.weatherData.weather))]),t("i",{staticClass:"iconfont icon-wendu3 yello"}),t("span",{staticClass:"mar-20"},[a._v("温度:"+a._s(a.weatherData.tem))])]),a._v(" "),t("p",[t("span",{staticClass:"mar-20"},[a._v("日期:"+a._s(a.weatherData.date))]),t("i",{staticClass:"iconfont blue icon-tianqi"}),a._v(" "),t("span",[a._v("风向:"+a._s(a.weatherData.win))])]),a._v(" "),t("p",[t("span",[a._v("风速等级:"+a._s(a.weatherData.win_meter))])]),a._v(" "),t("p",[t("span",{staticClass:"mar-20"},[a._v("湿度:"+a._s(a.weatherData.humidity))]),t("span",[a._v("气压:"+a._s(a.weatherData.pressure)+" hPa")])]),a._v(" "),t("p",[t("span",{staticClass:"mar-20"},[a._v("空气质量:"+a._s(a.weatherData.air))]),t("span",[a._v("PM2.5:"+a._s(a.weatherData.air_pm25))])]),a._v(" "),t("p",[t("span",{staticClass:"mar-20"},[a._v("空气质量等级:"+a._s(a.weatherData.air_level))])]),a._v(" "),t("p",[t("span",{staticClass:"mar-20 fw-600"},[a._v("空气质量描述:"+a._s(a.weatherData.air_tips))])]),a._v(" "),t("p",[t("span",[a._v("预警级别:"+a._s(a.earlywarn.alarm_level?a.earlywarn.alarm_level:"无"))])]),a._v(" "),t("p",[t("span",[a._v("预警类型:"+a._s(a.earlywarn.alarm_type?a.earlywarn.alarm_type:"无"))])]),a._v(" "),t("p",[t("span",[a._v("预警信息:"+a._s(a.earlywarn.alarm_content?a.earlywarn.alarm_content:"无"))])])])])])],1)},staticRenderFns:[]};var y=t("VU/8")(d,f,!1,function(a){t("MpC3")},null,null).exports;n.a.use(i.a);var C=new i.a({routes:[{path:"/",name:"Home",component:y}]}),D=(t("muQq"),t("Fd2+"));t("4ml/");n.a.use(D.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:s},template:"<App/>"})},muQq:function(a,e){}},["NHnr"]);
//# sourceMappingURL=app.bfbee71182f854148380.js.map