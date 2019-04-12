(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{174:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("See: "),n("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns.js",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Runnable example")]),n("OutboundLink")],1),t._v(" for quick starting.")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("Normally a Token's pattern is defined using a JavaScript regular expression:")]),t._v(" "),t._m(3),n("p",[t._v("However in some circumstances the capability to provide a custom pattern matching implementation may be required.\nThere are a few use cases in which a custom pattern could be used:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("The token cannot be easily (or at all) defined using pure regular expressions.")]),t._v(" "),n("ul",[n("li",[t._v("When context on previously lexed tokens is needed.\nFor example: "),n("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),n("OutboundLink")],1),t._v(".")])])]),t._v(" "),n("li",[n("p",[t._v("Workaround performance issues in specific regExp engines by providing a none regExp matcher implementation:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://bugs.webkit.org/show_bug.cgi?id=152578",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebKit/Safari multiple orders of magnitude performance degradation for specific regExp patterns"),n("OutboundLink")],1),t._v(" 😞")])])])]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("A custom pattern has a similar API to the API of the "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExp.prototype.exec"),n("OutboundLink")],1),t._v("\nfunction. But with a small constraint.")]),t._v(" "),n("ul",[n("li",[t._v("A custom pattern should behave as though the RegExp "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky",target:"_blank",rel:"noopener noreferrer"}},[t._v("sticky flag"),n("OutboundLink")],1),t._v(" has been set.\nThis means that attempted matches must begin at the offset argument, "),n("strong",[t._v("not")]),t._v(" at the start of the input.")])]),t._v(" "),n("p",[t._v("The basic syntax for supplying a custom pattern is defined by the "),n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_3_3/interfaces/icustompattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICustomPattern"),n("OutboundLink")],1),t._v(" interface.\nExample:")]),t._v(" "),t._m(5),n("p",[t._v("Using an Object literal with only a single property is still a little verbose so an even more concise syntax is also supported:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("A custom token matcher has two optional arguments which allows accessing the current lexing context.\nThis context can be used to allow or disallow lexing certain Token Types depending\non the previously lexed tokens.")]),t._v(" "),n("p",[t._v("Lets expand the previous example to only allow lexing integers if the previous token was not an identifier (contrived example).")]),t._v(" "),t._m(8),n("p",[t._v("A larger and non contrived example can seen here: "),n("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("It is important to note that The matchedTokens and groups arguments match the token and groups properties of the tokenize output ("),n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_3_3/interfaces/ilexingresult.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ILexingResult"),n("OutboundLink")],1),t._v(").\nThese arguments are the current state of the lexing result so even if the lexer has performed error recovery any tokens found\nin those arguments are still guaranteed to be in the final result.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"custom-token-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-token-patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Token Patterns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tldr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tldr","aria-hidden":"true"}},[this._v("#")]),this._v(" TLDR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[this._v("#")]),this._v(" Background")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" IntegerToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("matchInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" endOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" startOffset\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" charCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0-9 digits")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("charCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" charCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        endOffset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        charCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" startOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" matchedString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// according to the RegExp.prototype.exec API the first item in the returned array must be the whole matched string.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("matchedString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" matchInteger "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional properrty that will enable optimizations in the lexer")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See: https://sap.github.io/chevrotain/documentation/4_3_3/interfaces/itokenconfig.html#start_chars_hint")]),t._v("\n    start_chars_hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pattern is passed the matcher function directly.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" matchInteger "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lexing-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lexing-context","aria-hidden":"true"}},[this._v("#")]),this._v(" Lexing Context")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tokenMatcher "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chevrotain"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("matchInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchedTokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastMatchedToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("last")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matchedTokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An Integer may not follow an Identifier")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tokenMatcher")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastMatchedToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Identifier"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rest of the code from the example above...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);