(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6,7,8,9],{235:function(t,e,o){"use strict";o.r(e);var r={props:["text","type","clickAction","additionalClass"],methods:{callMethod:function(t){if("function"!=typeof this[t])return!0;this[t]()},defaultClickAction:function(){alert("Button clicked!")}}},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button",class:"button--"+t.type+" "+t.additionalClass,on:{click:function(e){return t.callMethod(t.clickAction)}}},[t._v("\n    "+t._s(t.text)+"\n\n    "),"primary"==t.type?r("img",{staticClass:"button__arrow-icon",attrs:{src:o(238),alt:"Ikona strzałki w prawo"}}):r("img",{staticClass:"button__arrow-icon",attrs:{src:o(239),alt:"Ikona strzałki w prawo"}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(235).default})},236:function(t,e,o){"use strict";o.r(e);var r={props:["showDecorator","decoratorType"]},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticClass:"section-title"},[t._t("default",(function(){return[t._v("\n        Domyślny tytuł - aby zmienić podaj wartość dla komponentu.\n    ")]})),t._v(" "),t.showDecorator?o("span",{staticClass:"section-title__decorator",class:"section-title__decorator--"+t.decoratorType}):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},237:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIESURBVHgB7VfLUcMwEH2SDRd+pgN3AKkAUwEwnLhBBdABoQKgAigAhtCBb1yYCVSASzDhSGLx5MSOPQnOSNbklDej+BNJ+7R6uysDK4whYIig/xBgtBXB+4nTzkUKB/BhjO0+PITATsyHQziAkSeC/ksIZF/TN4NdF96QJp3TzknCS1K+yDaO4QBGJMaG1Wtl+D4cwJyEzD6m9+IIDmBOAmu9ykOYR8uySVAXWohJ+cKBLiw8gboupHeAlrAjoRBXniK0hEWyIjwvpjsS3oVs8aLuuW6Gm/vwfXpNRWwcJx+5tTf6f+O0PZ1YJ64hm/8x0UmTUR3KMwJOO6e5fTtPYE7iKgk8UajigTPTaNYwg7ov7qxJNOASc1ZNaG/1yOsTUvYmizAjEbzR/eu/EeSI1fMs+b+n0JETNRmdGbHYaB6COhcUq0tYuDquyrhGzRPBO/fTy1NxxP0MGQbzxoRwjJJE0H++4uW2ubuK2V5deqFGglkwZEHCrFHuKVRvXigWYLhes7AFyAY3NgSnJKTXBUaF8UajdQLP51xBN4/GbPubv10YoiQxMXgFU2QUbJH8pbCqI3a1ozaDrJR2FdmU9tYkJvFf2bZN49NWe09oqEppz4Tx+cIRCVE58sk9GMINiZa6cEJiRhf6C23ZJHJUdSGUkTjdkRDeHcbnixTSf8QKFvgDX6evGJFtF18AAAAASUVORK5CYII="},238:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7dS9DcIwEIbhzwZqboRsANkARnCDxDZsQokEhSdBlxEYIQPwdymjxE6RuyJR3iJFUjzS5WxgaZYRXyn33WM0cCuALRPf97BC6vL8AlwA1jEFOShFHAX4ReAd6vJUmSA5SBVJQepIH+To+bjAIu938jwAn+Po7RpuYzWuZpVXMi4v4wqVwY9vA8075RXuAqpIClBDcoAKImdCbuAvpwC1BCqwNKn+nfRLYWJEdxoAAAAASUVORK5CYII="},239:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7ZRhCQAhDIUfxwW4CBfBCibRKDazig2MMJ9ghYnDffAY7Mc+xmCAcw0i8kEbSgLTZ4U2lGSX2Za9q1mgQ2Mq58cH1uEWSf1OLjlSsvWp/nBMMwDjWouuLiQcnAAAAABJRU5ErkJggg=="},240:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgBrVbLcdswEH2AqBw1LIGpQOJkcjZdQexxdMjJcgWZVGCpgtgVSDnl4HgkVWDmmhzIDsJ0gMnREwLeJWmLgE1JpPxmIIrAYt9ysR8I7ID/+yaC5x0BJqIR0FRQLSlApJAmxb1eq/fjeJsesZ2gd1kS7IUMGjP17myxF5GfzH1g8JX+TtANC+B+psJPWSORn3wPgDd32LjHhSqHYbexjN8glxHZcZ1M7EFCSvU14C1UeJrZhi1H0DqCxOcX9pHsv1CFF8omSm/nMK67DBH0pkSgsAVEGAD5lNSdO0srFZ6dPhH5ye2EHnNbRn9R4fgKLeAnN1NAXjp6yIXjWFZvziJFT0sSBu2Z0mNlz/YK3aIMY3lXW8noc9+iI8iNFCD6D6xA0ccSUpxYkpQLOADFeWoOnrpOcUJEGFqTUsY4FBKx835EZyRGdYPcEO4GL7XfRcDBUPOlSPEKqNKhnhK+tEWKovlasKoGE2VNi50ZisizkBGRyeoylHQRDkWeR/aEICJtflpz2gn3LvCcUqTzNYW3Z2eyFOdlge0G/xcVWgPbWOKQFCEUaSauywL9ZdmXWpKwgX29tGdFzClTRZ1xqgHn1mDehqz0Qp9JAkfXBf8WRFxd6ayunb30+YOkqIW7SAoZ7mVW8jNmjwXA6bA/Fi/0FBZjQ9ZUw1L894qN6Ocj9HrD6tISPd9jvqnw4+RJwzPrGsnawCZhSFekFNBdK7gqG6ZNwmi+bm3a8wfsrhiP94qrprYvsAfInZwXEY3hhlRk5KK/NFZcrXfdKx4Azr/hMvWuFx4AAAAASUVORK5CYII="},241:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGqSURBVHgBpZRPTsJAFMbfDA0rQsYb9Aa28QC2JxCDrMETiCcATqCeAF2ZqIiegLo2ZvAGvYGzcAlTv+m0xEAbW3xJM9PXmd/7872UaE8TH7OhkE+dsu8O1QXKqSBqT7EFlCmsL0XnONUwIe9dQKWFWpeQj8G/wEI+eETNBbYunpjyTDXr7A0W8rlP1MigyRLXQhBvLIH1bXtqgoWcjQC7NVusdwgQKv80Vn4vgk9Zf8urBRZyfoVlnL1OlH82AFRtDugsa2qMKoFNaSgfpethRrhUfndMu7cju0m87XbwXWiufBJQWqpG6b1rKjDbjiQy10i3BqVg8W5Gp2nGyaVUee5nvSw3nbxZUuOkEIx+XpDDF2RFSpU3ItFfxp2smiT43Q5uoUZ5nR/YKE8VzIqZtgOI9nAD3lI+ppUZLUW1TLNXS2PHuYvhR4KeMq/geIxniZH6JA31ne+l8s8LIyI5tEB/ZVGM2BHAc5do7UEEz0ZMg4iS3OKyYEgQ+rAA/ok66o5ZSQZu7WDWzH9DYeYPGFU0W+4KwSggzg/hMsHc4tM6rAyuEQy+dfgDDumzmDb+5rcAAAAASUVORK5CYII="},242:function(t,e,o){"use strict";o.r(e);var r={props:["text","hideSubtitle","subtitle","hideButton","buttonType","pageName"]},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"page-header"},[r("div",{staticClass:"page-header__half"},[r("h4",{staticClass:"page-header__subtitle",class:t.hideSubtitle&&"page-header__subtitle--hide"},[t._v(t._s(t.subtitle))]),t._v(" "),t._t("default",(function(){return[r("Title",{attrs:{showDecorator:"true",decoratorType:"primary"}},[t._v("\n                Przykładowy tytuł nagłówka strony.\n            ")])]})),t._v(" "),r("p",{staticClass:"page-header__text"},[t._v(t._s(t.text))]),t._v(" "),t.hideButton?t._e():r("Button",{attrs:{type:t.buttonType,text:"Dowiedz się więcej",additionalClass:"page-header__button",clickAction:"defaultClickAction"}})],2),t._v(" "),r("div",{staticClass:"page-header__half page-header__half--second"},["index"==t.pageName?r("img",{staticClass:"page-header__image",attrs:{src:o(247),alt:"Ilustracja nagłówka strony"}}):t._e()]),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--circle-1",attrs:{src:o(240),alt:"Circle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--cross-1",attrs:{src:o(237),alt:"Cross decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--circle-2",attrs:{src:o(240),alt:"Circle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--cross-2",attrs:{src:o(237),alt:"Cross decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--triangle-1",attrs:{src:o(241),alt:"Triangle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--triangle-2",attrs:{src:o(241),alt:"Triangle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--cross-3",attrs:{src:o(237),alt:"Cross decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--triangle-3",attrs:{src:o(241),alt:"Triangle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--circle-3",attrs:{src:o(240),alt:"Circle decoration",load:"lazy"}}),t._v(" "),r("img",{staticClass:"page-header__bg-asset page-header__bg-asset--cross-4",attrs:{src:o(237),alt:"Cross decoration",load:"lazy"}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(236).default,Button:o(235).default,Header:o(242).default})},243:function(t,e,o){"use strict";o.r(e);var r=o(37),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("p",{staticClass:"footer__text footer__text--bold"},[t._v("Copyright 2021 uneo")]),t._v(" "),o("span",{staticClass:"footer__separator"},[t._v("/")]),t._v(" "),t._m(0),t._v(" "),o("span",{staticClass:"footer__separator"},[t._v("/")]),t._v(" "),o("NuxtLink",{staticClass:"footer__link text-hover--primary",attrs:{to:"/"}},[t._v("Polityka prywatności")])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"footer__text"},[t._v("\n        Zadzwoń "),o("a",{staticClass:"footer__phone text-hover",attrs:{href:"tel:601700700"}},[t._v("601 700 700")]),t._v(" lub napisz \n        "),o("a",{staticClass:"footer__email text-hover--primary",attrs:{href:"mailto:biuro@uneo.pl"}},[t._v("biuro@uneo.pl")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(243).default})},244:function(t,e,o){t.exports=o.p+"img/logo.65ad0d7.png"},245:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABASURBVHgB7daxCQAhFETBf9eFiP0XJmIZ2oEGBiLMxBts+CIA4GHfbpByGXFRb3X58Q8AAJ6lRgEAuEeNAgAHJlw+DAqTqIgQAAAAAElFTkSuQmCC"},246:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZjRbYMwEIbPoHYGEBVilW7QTZJRMko3yCo8MkKliro+m7RKUiVn+7+HKvc9JRH4/g8F+IHIMAzDMB6B/mXcdV03kTI8o+/HnXT7RrJRP4x78v7g2qejpgSvzTOo8YcgsZfsIxLwa/NOnubwcdKS+AkfZvAs78NMAY6EhPUn16zHsMcUvs5+/XxdlmUmAFfhv9qw9jxL9hULpEF4iZrwTJZAGoiTqA3PZAukwfUSiPBMkUAKUC6BCs8UC6Qg+RLI8EyVQAokl0CHZ6oFUrD7EhrhGYgAc0tCKzwDE2D+kohDlMLHtQnMpcT2s0p4Bi7AXEiQVnhGVOby+Tg/NG77TQGFv9D5CbtNmQhcAE+AT+Lrq00cotRi49oE4talUrOKg25k96/zWhKAKiG/SWlIVJa5/DssWqKiTpfXA6RE4QNNfbdBSRQ8UuKKGUIi86Ee3yprJTJeq+hV4hoJkYBm+N8ZZRKiMufa5zdSDM/wmrF6nN4AujgTB78f5aNEyvCMfhhE70UNwzAM49/zDYK20eN6hbB/AAAAAElFTkSuQmCC"},247:function(t,e,o){t.exports=o.p+"img/header-image.6d3223c.png"},248:function(t,e,o){t.exports=o.p+"img/content-image-1.2096961.png"},249:function(t,e,o){t.exports=o.p+"img/content-image-2.44a201a.png"},250:function(t,e,o){t.exports=o.p+"img/content-image-3.8c157d8.png"},251:function(t,e,o){t.exports=o.p+"img/content-image-4.618ba93.png"},252:function(t,e,o){t.exports=o.p+"img/jurga.3d53d8b.png"},253:function(t,e,o){t.exports=o.p+"img/lebal.b5e9c63.png"},254:function(t,e,o){t.exports=o.p+"img/schoeps.e64d363.png"},255:function(t,e,o){t.exports=o.p+"img/deweloper.d38c281.png"},256:function(t,e,o){t.exports=o.p+"img/bocian.3276191.png"},257:function(t,e,o){t.exports=o.p+"img/shape-mobile.e36ae2b.png"},258:function(t,e,o){t.exports=o.p+"img/shape-large-tablet.89649e2.png"},259:function(t,e,o){t.exports=o.p+"img/shape-desktop.29329fd.png"},260:function(t,e,o){t.exports=o.p+"img/contact-form.d8f0f30.png"},261:function(t,e,o){"use strict";o.r(e);o(35),o(28),o(34),o(48),o(29),o(49);var r=o(21),n=o(60);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({mobileMenu:"getMobileMenu"})),methods:{toggleMobileMenu:function(t){this.$store.commit("set",{key:"mobileMenu",value:t})}}},A=o(37),component=Object(A.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"nav"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"nav__logo",attrs:{src:o(244),alt:"Uneo logo"}})]),t._v(" "),r("div",{staticClass:"nav__menu-wrapper"},[r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/o-nas"}},[t._v("O nas")]),t._v(" "),r("span",{staticClass:"nav__menu-item--separator"},[t._v("/")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/zakres-uslug"}},[t._v("Zakres usług")]),t._v(" "),r("span",{staticClass:"nav__menu-item--separator"},[t._v("/")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/outsourcing-i-audyty"}},[t._v("Outsourcing IT & Audyty")]),t._v(" "),r("span",{staticClass:"nav__menu-item--separator"},[t._v("/")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1),t._v(" "),r("img",{staticClass:"nav__menu-icon",attrs:{src:o(245),alt:"Menu"},on:{click:function(e){return t.toggleMobileMenu(!0)}}}),t._v(" "),r("div",{staticClass:"nav__menu-wrapper-mobile",class:t.mobileMenu&&"nav__menu-wrapper-mobile--show"},[r("img",{staticClass:"nav__close-icon",attrs:{src:o(246),alt:"Close"},on:{click:function(e){return t.toggleMobileMenu(!1)}}}),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/o-nas"}},[t._v("O nas")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/zakres-uslug"}},[t._v("Zakres usług")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/outsourcing-i-audyty"}},[t._v("Outsourcing IT & Audyty")]),t._v(" "),r("NuxtLink",{staticClass:"nav__menu-item",attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,o){"use strict";o.r(e);var r={props:["title","text","sectionName"]},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"grid-el"},[r("div",{staticClass:"grid-el__header"},[r("Title",{attrs:{showDecorator:"true",decoratorType:"primary"}},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),"uslugi"==t.sectionName?r("img",{staticClass:"grid-el__header-image",attrs:{src:o(248),alt:"Usługi - ilustracja",load:"lazy"}}):t._e(),t._v(" "),"kalkulator"==t.sectionName?r("img",{staticClass:"grid-el__header-image",attrs:{src:o(249),alt:"Kalkulator usług IT - ilustracja",load:"lazy"}}):t._e(),t._v(" "),"outsourcing"==t.sectionName?r("img",{staticClass:"grid-el__header-image",attrs:{src:o(250),alt:"Outsourcing IT - ilustracja",load:"lazy"}}):t._e(),t._v(" "),"audyty"==t.sectionName?r("img",{staticClass:"grid-el__header-image",attrs:{src:o(251),alt:"Audyty IT - ilustracja",load:"lazy"}}):t._e()],1),t._v(" "),r("p",{staticClass:"grid-el__text"},[t._v(t._s(t.text))]),t._v(" "),t._t("default",(function(){return[r("Button",{attrs:{type:"primary",text:"Przykładowy button",clickAction:"defaultClickAction"}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(236).default,Button:o(235).default})},263:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"partner-logos__wrapper"},[r("img",{staticClass:"partner-logos__image",attrs:{src:o(252),alt:"Jurga - logo",load:"lazy"}}),t._v(" "),r("img",{staticClass:"partner-logos__image",attrs:{src:o(253),alt:"Lebal - logo",load:"lazy"}}),t._v(" "),r("img",{staticClass:"partner-logos__image",attrs:{src:o(254),alt:"Schoeps - logo",load:"lazy"}}),t._v(" "),r("img",{staticClass:"partner-logos__image",attrs:{src:o(255),alt:"Deweloper - logo",load:"lazy"}}),t._v(" "),r("img",{staticClass:"partner-logos__image",attrs:{src:o(256),alt:"Bocian - logo",load:"lazy"}})])}],n=o(37),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"partner-logos"},[o("Title",{attrs:{showDecorator:"true",decoratorType:"primary"}},[t._v("Oni nam zaufali")]),t._v(" "),t._m(0)],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(236).default})},264:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-form__inputs-wrapper"},[o("input",{staticClass:"contact-form__input contact-form__input--half",attrs:{type:"email",placeholder:"ADRES EMAIL *"}}),t._v(" "),o("input",{staticClass:"contact-form__input contact-form__input--half",attrs:{type:"number",placeholder:"NUMER TELEFONU *"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-form__half"},[e("img",{staticClass:"contact-form__image",attrs:{src:o(260),alt:"Contact illustration",loading:"lazy"}})])}],n=o(37),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"contact-form"},[r("img",{staticClass:"contact-form__top-shape contact-form__top-shape--mobile",attrs:{src:o(257),alt:"Curvy shape",loading:"lazy"}}),t._v(" "),r("img",{staticClass:"contact-form__top-shape contact-form__top-shape--large-tablet",attrs:{src:o(258),alt:"Curvy shape",loading:"lazy"}}),t._v(" "),r("img",{staticClass:"contact-form__top-shape contact-form__top-shape--desktop",attrs:{src:o(259),alt:"Curvy shape",loading:"lazy"}}),t._v(" "),r("div",{staticClass:"contact-form__content"},[r("Title",{attrs:{showDecorator:"true",decoratorType:"secondary"}},[t._v("\n            Zapytaj o ofertę\n        ")]),t._v(" "),r("div",{staticClass:"contact-form__content-wrapper"},[r("div",{staticClass:"contact-form__half"},[r("p",{staticClass:"contact-form__text"},[t._v("Zostaw nam swoje dane kontaktowe, abyśmy mogli umówić się z Tobą na bezpłatną konsultację.")]),t._v(" "),r("input",{staticClass:"contact-form__input",attrs:{type:"text",placeholder:"IMIĘ I NAZWISKO *"}}),t._v(" "),t._m(0),t._v(" "),r("textarea",{staticClass:"contact-form__textarea",attrs:{placeholder:"TREŚĆ ZAPYTANIA *"}}),t._v(" "),r("Button",{attrs:{text:"Wyślij zapytanie",additionalClass:"contact-form__button",clickAction:"defaultClickAction"}})],1),t._v(" "),t._m(1)])],1)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(236).default,Button:o(235).default})},265:function(t,e,o){"use strict";o.r(e);var r={},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"theme-light"},[o("Navigation"),t._v(" "),o("Header",{attrs:{hideSubtitle:"true",pageName:"index",buttonType:"primary-filled",text:"Zapewniamy pełną opiekę informatyczną dla firm i gwarantujemy usługę IT na bardzo wysokim poziomie."}},[o("Title",{attrs:{showDecorator:"true",decoratorType:"primary"}},[t._v("\n                Nasze "),o("span",{staticClass:"text-color--primary"},[t._v("wsparcie IT")]),t._v(" to coś więcej niż zwykła pomoc\n            ")])],1),t._v(" "),o("div",{staticClass:"grid-wrapper"},[o("div",{staticClass:"grid-wrapper__half"},[o("GridElement",{attrs:{sectionName:"uslugi",title:"Usługi",text:"Potrzebujesz pomocy w obsłudze systemów informatycznych w Twojej firmie. Zobacz jaki zakres usług świadczymy. Jeżeli czegoś nie znajdziesz na liście to na pewno znajdziemy rozwiązanie dopasowane dla Twojej działalności."}},[o("Button",{attrs:{type:"primary","additional-class":"grid-el__button",text:"Zakres usług Uneo",clickAction:"defaultClickAction"}})],1),t._v(" "),o("GridElement",{attrs:{sectionName:"kalkulator",title:"Kalkulator usług IT",text:"Chcesz skorzystać z usług outsourcingu IT, ale obawiasz się, ile będzie to kosztować? Nie musisz się już dłużej zastanawiać. Specjalnie dla Ciebie stworzyliśmy cyfrowy kalkulator informatyczny."}},[o("Button",{attrs:{type:"primary","additional-class":"grid-el__button",text:"Skorzystaj z kalkulatora",clickAction:"defaultClickAction"}})],1)],1),t._v(" "),o("div",{staticClass:"grid-wrapper__half"},[o("GridElement",{attrs:{sectionName:"outsourcing",title:"Outsourcing IT",text:"Potrzebujesz pomocy w obsłudze systemów informatycznych w Twojej firmie. Zobacz jaki zakres usług świadczymy. Jeżeli czegoś nie znajdziesz na liście to na pewno znajdziemy rozwiązanie dopasowane dla Twojej działalności."}},[o("Button",{attrs:{type:"primary","additional-class":"grid-el__button",text:"Dowiedz się więcej",clickAction:"defaultClickAction"}})],1),t._v(" "),o("GridElement",{attrs:{sectionName:"audyty",title:"Audyty IT",text:"Chcesz skorzystać z usług outsourcingu IT, ale obawiasz się, ile będzie to kosztować? Nie musisz się już dłużej zastanawiać. Specjalnie dla Ciebie stworzyliśmy cyfrowy kalkulator informatyczny."}},[o("Button",{attrs:{type:"primary","additional-class":"grid-el__button",text:"Dowiedz się więcej",clickAction:"defaultClickAction"}})],1)],1)]),t._v(" "),o("PartnerLogos"),t._v(" "),o("ContactForm"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(261).default,Title:o(236).default,Header:o(242).default,Button:o(235).default,GridElement:o(262).default,PartnerLogos:o(263).default,ContactForm:o(264).default,Footer:o(243).default})}}]);