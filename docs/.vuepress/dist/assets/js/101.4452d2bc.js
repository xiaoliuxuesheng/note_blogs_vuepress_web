(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{426:function(t,e,r){"use strict";r.r(e);var a=r(4),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_1-1-移动开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-移动开发"}},[t._v("#")]),t._v(" 1.1 移动开发")]),t._v(" "),r("h3",{attrs:{id:"_1-1-1-原生开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-原生开发"}},[t._v("#")]),t._v(" 1.1.1 原生开发")]),t._v(" "),r("p",[t._v("原生应用程序是指某一个移动平台（比如iOS或安卓）所特有的应用，使用相应平台支持的开发工具和语言，并直接调用系统提供的SDK API。比如Android原生应用就是指使用Java或Kotlin语言直接调用Android SDK开发的应用程序；而iOS原生应用就是指通过Objective-C或Swift语言直接调用iOS SDK开发的应用程序。原生开发优缺点：")]),t._v(" "),r("ul",[r("li",[t._v("主要优势：①可访问平台全部功能（GPS、摄像头）；②速度快、性能高、可以实现复杂动画及绘制，整体用户体验好；")]),t._v(" "),r("li",[t._v("主要缺点：①平台特定，开发成本高；不同平台必须维护不同代码，人力成本随之变大；②内容固定，动态化弱，大多数情况下，有新功能更新时只能发版；")])]),t._v(" "),r("blockquote",[r("p",[t._v("总结一下，纯原生开发主要面临动态化和开发成本两个问题，而针对这两个问题，诞生了一些跨平台的动态化框架。")])]),t._v(" "),r("h3",{attrs:{id:"_1-1-2-跨平台技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-跨平台技术"}},[t._v("#")]),t._v(" 1.1.2 跨平台技术")]),t._v(" "),r("p",[t._v("针对原生开发面临问题，业界一直都在努力寻找好的解决方案，而时至今日，已经有很多跨平台框架（注意，本书中所指的“跨平台”若无特殊说明，即特指 Android 和 iOS 两个平台），根据其原理，主要分为三类：")]),t._v(" "),r("ul",[r("li",[t._v("H5 + 原生（Cordova、Ionic、微信小程序）：主要原理就是将 App 中需要动态变动的内容通过HTML5（简称 H5）来实现，通过原生的网页加载控件WebView （Android）或 WKWebView（iOS）来加载；H5 部分是可以随时改变而不用发版，动态化需求能满足；同时，由于 H5 代码只需要一次开发，就能同时在 Android 和 iOS 两个平台运行，这也可以减小开发成本，混合应用的优点是动态内容是 H5，Web 技术栈，社区及资源丰富，缺点是性能体验不佳，对于复杂用户界面或动画，WebView 有时会不堪重任。")]),t._v(" "),r("li",[t._v("JavaScript 开发 + 原生渲染 （React Native、Weex）：React Native （简称 RN ）是 Facebook 于 2015 年 4 月开源的跨平台移动应用开发框架，是 Facebook 早先开源的 Web 框架 React 在原生移动应用平台的衍生产物，目前支持 iOS 和 Android 两个平台")]),t._v(" "),r("li",[t._v("自绘UI + 原生 (Qt for mobile、Flutter)：自绘UI + 原生。这种技术的思路是：通过在不同平台实现一个统一接口的渲染引擎来绘制UI，而不依赖系统原生控件，所以可以做到不同平台UI的一致性。")])]),t._v(" "),r("h2",{attrs:{id:"_1-2-flutter概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-flutter概述"}},[t._v("#")]),t._v(" 1.2 Flutter概述")]),t._v(" "),r("h3",{attrs:{id:"_1-2-1-flutter简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-flutter简介"}},[t._v("#")]),t._v(" 1.2.1 Flutter简介")]),t._v(" "),r("p",[t._v("Flutter 是 Google 发布的一个用于创建跨平台、高性能移动应用的框架。Flutter 和 Qt mobile 一样，都没有使用原生控件，相反都实现了一个自绘引擎，使用自身的布局、绘制系统。但是Flutter是背靠Google，有着丰富的社区资源，并且性能高，在 iOS 和 Android 模拟器或真机上可以实现毫秒级热重载，并且不会丢失状态。Flutter 提供了丰富的组件、接口，开发者可以很快地为 Flutter 添加 Native 扩展。")]),t._v(" "),r("h3",{attrs:{id:"_1-2-2-flutter框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-flutter框架"}},[t._v("#")]),t._v(" 1.2.2 Flutter框架")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("flutter 从上到下可以分为三层：框架层、引擎层和嵌入层")]),t._v(" "),r("img",{attrs:{src:"https://s1.ax1x.com/2023/05/14/p9c1LvV.png",alt:"p9c1LvV.png",border:"0"}})]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Flutter Framework，即框架层")]),t._v("。这是一个纯 Dart实现的 SDK，它实现了一套基础库")]),t._v(" "),r("ul",[r("li",[t._v("底下两层（Foundation 和 Animation、Painting、Gestures）在 Google 的一些视频中被合并为一个dart UI层，对应的是Flutter中的dart:ui包，它是 Flutter Engine 暴露的底层UI库，提供动画、手势及绘制能力。")]),t._v(" "),r("li",[t._v("Rendering 层，即渲染层，这一层是一个抽象的布局层，它依赖于 Dart UI 层，渲染层会构建一棵由可渲染对象的组成的渲染树，当动态更新这些对象时，渲染树会找出变化的部分，然后更新渲染。渲染层可以说是Flutter 框架层中最核心的部分，它除了确定每个渲染对象的位置、大小之外还要进行坐标变换、绘制（调用底层 dart:ui ）。")]),t._v(" "),r("li",[t._v("Widgets 层是 Flutter 提供的的一套基础组件库，在基础组件库之上，Flutter 还提供了 Material 和 Cupertino 两种视觉风格的组件库，它们分别实现了 Material 和 iOS 设计规范。")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Engine，即引擎层")]),t._v("。毫无疑问是 Flutter 的核心， 该层主要是 C++ 实现，其中包括了 Skia 引擎、Dart 运行时、文字排版引擎等。在代码调用 dart:ui库时，调用最终会走到引擎层，然后实现真正的绘制和显示。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Embedder，即嵌入层")]),t._v("。Flutter 最终渲染、交互是要依赖其所在平台的操作系统 API，嵌入层主要是将 Flutter 引擎 ”安装“ 到特定平台上。嵌入层采用了当前平台的语言编写，例如 Android 使用的是 Java 和 C++， iOS 和 macOS 使用的是 Objective-C 和 Objective-C++，Windows 和 Linux 使用的是 C++。 Flutter 代码可以通过嵌入层，以模块方式集成到现有的应用中，也可以作为应用的主体。Flutter 本身包含了各个常见平台的嵌入层，假如以后 Flutter 要支持新的平台，则需要针对该新的平台编写一个嵌入层。")])])]),t._v(" "),r("h3",{attrs:{id:"_1-2-3-flutter应用结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-flutter应用结构"}},[t._v("#")]),t._v(" 1.2.3 Flutter应用结构")]),t._v(" "),r("ul",[r("li",[t._v("在Flutter应用中一切兼是Weight，不同的类型的Weight有着不同的功能，可以理解为HTML中内容是由标签标记，不同的标签有不同的样式；在HTML中有html基础骨架：html、head、title、body，FLutter也有自己的骨架，如上图，MaterialApp组件是根组件，根组件的home属性是Scaffold组件，表示是页面脚手架：如appBar是页面的头部，body是页面的主要内容区，floatingActionButton是页面底部导航栏；")])])])}),[],!1,null,null,null);e.default=i.exports}}]);