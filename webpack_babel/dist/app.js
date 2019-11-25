/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _console;\n\n// TEST\nvar name = \"Clement\";\nconsole.log(name); // VARIABLES\n\nvar firstname = \"Clement\";\nvar lastname = \"Barbaza\";\nvar results = [];\n\nfor (var i = 0; i < 10; i++) {\n  var _firstname = \"Jacques\";\n  var lastname = \"Hugues\";\n}\n\nconsole.log(lastname); // Hugues\n\nconsole.log(firstname); // Clement\n// Results using var\n\nfor (var i = 0; i < 10; i++) {\n  console.log(i); // 0, 1, 2, 3...\n\n  results.push(function () {\n    console.log(i); // 10, 10, 10... \n\n    return i % 2 === 0 ? 'even' : 'odd';\n  });\n}\n\nresults.forEach(function (result) {\n  console.log(result()); // (10) Even\n}); // Results using let\n\nvar _loop = function _loop(_i) {\n  console.log(_i); // 0, 1, 2, 3...\n\n  results.push(function () {\n    console.log(_i); // 10, 10, 10... \n\n    return _i % 2 === 0 ? 'even' : 'odd';\n  });\n};\n\nfor (var _i = 0; _i < 10; _i++) {\n  _loop(_i);\n}\n\nresults.forEach(function (result) {\n  console.log(result()); // (10) Even\n}); // Works only using let and not var\n\nvar messages = ['Hello', 'I am good', 'How are you my friend?'];\n\nvar _loop2 = function _loop2(_i2) {\n  setTimeout(function () {\n    console.log(messages[_i2]);\n  }, _i2 * Math.floor(Math.random() * 2500 + 1500));\n};\n\nfor (var _i2 = 0; _i2 < messages.length; _i2++) {\n  _loop2(_i2);\n} // CONSTANTS\n\n\nvar tax = 20; // tax = 10 // app.js:1 Uncaught Error: \"tax\" is read-only\n\nconsole.log(tax); // Not overwritten but you can modify\n\nvar names = ['Clement', 'Jacques'];\nnames.push('Tomy');\nconsole.log(names);\nvar user = {\n  authenticated: true,\n  name: 'Clement'\n};\nuser.authenticated = false;\nconsole.log(user); // ARROW FUNCTIONS\n\n/*\nvar calc = function calc(one, two) {\n    return one + two\n}\n*/\n\n/*\nvar calc = (one, two) => {\n    return one + two\n}\n*/\n\nvar calc = function calc(one, two) {\n  return one + two;\n};\n\nconsole.log(calc(1, 2));\nlocalStorage.setItem('token', 'abc');\nvar storage = {\n  get: function get(key, callback) {\n    callback(localStorage.getItem(key));\n  }\n};\nstorage.get('token', function (value) {\n  return console.log(value);\n});\nvar component = {\n  data: {\n    token: null\n  },\n\n  /*\n  run: function () {\n      var that = this\n      storage.get('token', function (value) {\n          this.data.token = value // Cannot set property 'token' of undefined\n          that.data.token = value // OK\n      })\n  }\n  */\n  run: function run() {\n    var _this = this;\n\n    storage.get('token', function (value) {\n      return _this.data.token = value;\n    });\n  }\n};\ncomponent.run();\nconsole.log(component); // FUNCTION PARAMETERS DEFAUT\n\n/*\nvar greet = (greeting, name) => {\n    if (typeof greeting === 'undefined') {\n        greeting = \"Hello\"\n    }\n\n    if (typeof name === 'undefined') {\n        name = \"Clement\"\n    }\n\n    return greeting + ' ' + name\n}\n*/\n\nvar greet = function greet() {\n  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Hello\";\n  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Clement\";\n  return greeting + ' ' + name;\n};\n\nconsole.log(greet()); // SHORTHAND OBJECT PROPERTIES\n\nvar animal = {\n  username: \"Marou\",\n  sound: function sound() {\n    return 'Meow';\n  }\n};\nvar animal = {};\nanimal.username = 'Marou';\n\nanimal.sound = function () {\n  return 'Meow';\n};\n\nvar username = \"Marou\";\n\nvar sound = function sound() {\n  return 'Meow';\n};\n\nvar animal = {\n  username: username,\n  sound: sound\n};\nconsole.log(animal.sound());\nconsole.log(animal);\nvar sounds = {\n  meow: function meow() {\n    return \"Meow\";\n  },\n  hiss: function hiss() {\n    return \"Hiss\";\n  }\n};\nvar username = \"Marou\";\nvar marou = {\n  name: name,\n  sounds: sounds\n};\nconsole.log(marou); // OBJECT DESTRUCTURING\n\nvar form = {\n  username: 'Clement',\n  password: 'admin'\n};\n/*\nvar login = (username, password) => {\n    console.log(username)\n}\n\nlogin(form.username, form.password)\n*/\n\nvar login = function login(_ref) {\n  var username = _ref.username,\n      password = _ref.password;\n  console.log(username);\n};\n\nlogin(form);\nvar api = {\n  register: function register(payload) {\n    console.log(payload);\n  }\n};\n/*\nvar register = (email, username, password) => {\n    api.register({ email, username, password })\n}\n\nvar component = {\n    data: {\n        email: \"clement@barbaza.com\",\n        username: \"clement\",\n        password: \"password\"\n    }\n}\n\nregister(component.data.email, component.data.username, component.data.password)\n*/\n\nvar register = function register(_ref2) {\n  var email = _ref2.email,\n      username = _ref2.username,\n      password = _ref2.password;\n  api.register({\n    email: email,\n    username: username,\n    password: password\n  });\n};\n\nvar component = {\n  data: {\n    email: \"clement@barbaza.com\",\n    username: \"clement\",\n    password: \"password\"\n  }\n};\nregister(component.data); // SPREAD OPERATOR\n\nvar usernames = ['clement', 'jacques', 'tomy'];\n\n(_console = console).log.apply(_console, usernames);\n\nvar register = function register(email, username, password) {\n  console.log('Registered', email, username, password);\n};\n\nvar payload = ['clement@barbaza.com', 'clement', 'admin'];\nregister.apply(void 0, payload);\nregister.apply(null, payload);\nvar posts = [{\n  title: \"Post 1\",\n  body: \"Lorem ipsum 1\"\n}, {\n  title: \"Post 2\",\n  body: \"Lorem ipsum 2\"\n}];\nvar newPosts = [{\n  title: \"New title 3\",\n  body: \"New body 3\"\n}, {\n  title: \"New title 4\",\n  body: \"New body 4\"\n}];\nposts.push.apply(posts, newPosts);\nconsole.log(posts);\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ })

/******/ });