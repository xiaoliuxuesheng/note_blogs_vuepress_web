(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{429:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("Flutter文档：")]),t._v(" "),s("ul",[s("li",[t._v("中文网址：https://flutter.cn/")]),t._v(" "),s("li",[t._v("官网网址：https://flutter.dev/")])])]),t._v(" "),s("h2",{attrs:{id:"_2-1-window系统安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-window系统安装"}},[t._v("#")]),t._v(" 2.1 Window系统安装")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载Flutter稳定版软件包：https://flutter.cn/docs/release/archive")])]),t._v(" "),s("li",[s("p",[t._v("解压Flutter软件包到安装目录，并配置bin目录到环境变量")])]),t._v(" "),s("li",[s("p",[t._v("测试环境变量配置")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("flutter doctor\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("安装AndroidStudio")])]),t._v(" "),s("li",[s("p",[t._v("AndroidStudio安装插件：Flutter、Rainbow Brackets、JsonToDart、GetX、Flutter Enhancement Suite、WidgetGenerator、flutter-img-sync")])]),t._v(" "),s("li",[s("p",[t._v("根据"),s("code",[t._v("flutter doctor")]),t._v("环境变量测试工具，完善AndroidStudio配置")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("问题1：cmdline-tools component is missing")]),t._v(" "),s("blockquote",[s("p",[t._v("因为没安装cmdline-tools工具：SDK Manager→SDK Tools→Android SDK Command-line Tools")])])]),t._v(" "),s("li",[s("p",[t._v("问题2：Android license status unknown.")])])]),t._v(" "),s("blockquote",[s("p",[t._v("没有安装android 证书，需要执行命令："),s("code",[t._v("flutter doctor --android-licenses")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("问题3：HTTP Host availability check")]),t._v(" "),s("blockquote",[s("p",[t._v("在用户环境变量中配置")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUTTER_STORAGE_BASE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://storage.flutter-io.cn\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PUB_HOSTED_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://pub.flutter-io.cn\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])])]),t._v(" "),s("li",[s("p",[t._v("AndroidStudio安装虚拟机：")])]),t._v(" "),s("li",[s("p",[t._v("配置Flutter的Gradle：flutter\\packages\\flutter_tools\\gradle\\flutter.gradle")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/central/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/public/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/gradle-plugin/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:7.3.0'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String DEFAULT_MAVEN_HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://storage.flutter-io.cn"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("修改Flutter项目中的android配置：android/build.gradle")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kotlin_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.7.10'")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/central/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/public/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/gradle-plugin/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:7.3.0'")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.jetbrains.kotlin:kotlin-gradle-plugin:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("kotlin_version")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nallprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/central/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/public/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/gradle-plugin/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-2-mac系统安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mac系统安装"}},[t._v("#")]),t._v(" 2.2 Mac系统安装")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载FlutterSDK：")]),t._v(" "),s("ul",[s("li",[t._v("中文网址：https://flutter.cn/")]),t._v(" "),s("li",[t._v("官网网址：https://flutter.dev/")])])]),t._v(" "),s("li",[s("p",[t._v("解压并配置环境变量："),s("code",[t._v("~/.bash——profile")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FLUTTER_INSTALL_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/flutter/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("ul",[s("li",[t._v("FLUTTER_INSTALL_PATH：表示flutter的解压安装目录")]),t._v(" "),s("li",[t._v("配置完成后执行source $HOME/.bash_profile刷新变量，Mac系统需要在"),s("code",[t._v("～/.zshrc")]),t._v(" ，在其中添加：source ～/.bash_profile保证每次打开终端可以刷新.bash_profile配置文件")])])])]),t._v(" "),s("li",[s("p",[t._v("安装开发必须软件：xCode、AndroidStudio（或VSCode）、Chrome等等")])]),t._v(" "),s("li",[s("p",[t._v("安装开发工具的Flutter插件：flutter")])]),t._v(" "),s("li",[s("p",[t._v("Flutter升级：Flutter SDK有多个分支，如beta、dev、master、stable，其中stable分支为稳定分支；安装flutter后，你可以运行"),s("code",[t._v("flutter channel")]),t._v("查看所有分支，切换分支只需要执行命令flutter channel 分支名称 `即可，升级Flutter只需要一条命令")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("flutter upgrade\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-3-flutter开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-flutter开发环境"}},[t._v("#")]),t._v(" 2.3 Flutter开发环境")]),t._v(" "),s("ol",[s("li",[t._v("VSCode安装并配置")]),t._v(" "),s("li",[t._v("AndroidStudio安装并配置")]),t._v(" "),s("li",[t._v("模拟器独立窗口配置：File | Settings | Tools | Emulator | Launch in a tool window（×）")]),t._v(" "),s("li")])])}),[],!1,null,null,null);s.default=e.exports}}]);