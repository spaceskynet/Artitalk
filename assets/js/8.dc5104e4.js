(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{341:function(t,a,s){"use strict";s.r(a);var n=s(8),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"👀-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👀-前言"}},[t._v("#")]),t._v(" 👀 前言")]),t._v(" "),s("p",[t._v("Github仓库："),s("a",{attrs:{href:"https://github.com/Drew233/Artitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("因为项目初期版本更新较为频繁，所以教程仅作参考，请仔细阅读使用文档，以此为准。")]),t._v(" "),s("h3",{attrs:{id:"🎉-特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🎉-特性"}},[t._v("#")]),t._v(" 🎉 特性")]),t._v(" "),s("ul",[s("li",[t._v("实时发布,点击删除")]),t._v(" "),s("li",[t._v("支持markdown/html语法")]),t._v(" "),s("li",[t._v("支持剪切板图片直接上传，支持点击上传图片，音频，视频")]),t._v(" "),s("li",[t._v("支持点赞")]),t._v(" "),s("li",[t._v("方便引用")])]),t._v(" "),s("h3",{attrs:{id:"⛵-关于资源上传的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⛵-关于资源上传的说明"}},[t._v("#")]),t._v(" ⛵ 关于资源上传的说明")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("图片单张支持最大为5M")])]),t._v(" "),s("li",[s("p",[t._v("音频单张支持最大为10M")])]),t._v(" "),s("li",[s("p",[t._v("视频单张支持最大为25M")])]),t._v(" "),s("li",[s("p",[t._v("因为本功能是基于GitHub的存储实现的，所以如果上传失败请检查是否可以正常访问GitHub。")])]),t._v(" "),s("li",[s("p",[t._v("如果您上传的文件较大，请耐心稍等片刻")])])]),t._v(" "),s("h3",{attrs:{id:"👍-关于点赞功能的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👍-关于点赞功能的说明"}},[t._v("#")]),t._v(" 👍 关于点赞功能的说明")]),t._v(" "),s("ol",[s("li",[t._v("点赞依赖于一个新的名为"),s("code",[t._v("star")]),t._v("的class，若未手动创建，js会帮你创建。但是如果考虑到安全问题可以自行修改这个class的权限，但是这个class不会影响到存储说说的class，可以放心使用")]),t._v(" "),s("li",[t._v("默认最初点赞数为0，对于一人多赞不进行判断（判断了感觉也没什么用。当前点赞机制：不刷新的情况下只允许一个赞")]),t._v(" "),s("li",[t._v("首次使用点赞为手动创建class时会出现所有点赞数为"),s("code",[t._v("loading")]),t._v("的情况，这属于正常情况，刷新之后即可正常使用。")])]),t._v(" "),s("h2",{attrs:{id:"🚀-快速使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚀-快速使用"}},[t._v("#")]),t._v(" 🚀 快速使用")]),t._v(" "),s("p",[t._v("部分Hexo主题已将本js整合进去，可以直接使用。\n感谢以下主题对本js的支持~")]),t._v(" "),s("h3",{attrs:{id:"hexo-theme-volantis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-theme-volantis"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/xaoxuu/hexo-theme-volantis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-theme-volantis"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("新建页面（注意不要命名为artitalk，不然会出现重复的id导致js加载失败）")]),t._v(" "),s("li",[t._v("页面的layout填为artitalk，comments设置为false")]),t._v(" "),s("li",[t._v("在主题config里面填写artitalk的相关配置项即可")])]),t._v(" "),s("h2",{attrs:{id:"🚀-开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚀-开始使用"}},[t._v("#")]),t._v(" 🚀 开始使用")]),t._v(" "),s("h3",{attrs:{id:"🌈-leancloud的相关准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌈-leancloud的相关准备"}},[t._v("#")]),t._v(" 🌈 leancloud的相关准备")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🌍 使用国际版的leancloud")]),t._v(" "),s("p",[t._v("因为leancloud的国内节点需要接入备案域名作为安全域名。明显违背了适用性强的理念。这里推荐大家使用国际版，当然国内版的也可以，但是不要忘了填写severurl即可。")])]),t._v(" "),s("ol",[s("li",[t._v("前往"),s("a",{attrs:{href:"https://leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leancloud国际版"),s("OutboundLink")],1),t._v("，注册账号。")]),t._v(" "),s("li",[t._v("注册完成之后根据leancloud的提示绑定手机号和邮箱。")]),t._v(" "),s("li",[t._v("绑定完成之后点击"),s("code",[t._v("创建应用")]),t._v("，应用名称随意，接着在"),s("code",[t._v("结构化数据")]),t._v("中创建"),s("code",[t._v("class")]),t._v("，命名为"),s("code",[t._v("shuoshuo")]),t._v("。")]),t._v(" "),s("li",[t._v("在你新建的应用中找到"),s("code",[t._v("结构化数据")]),t._v("下的"),s("code",[t._v("用户")]),t._v("。点击"),s("code",[t._v("添加用户")]),t._v("，输入想用的用户名及密码。")]),t._v(" "),s("li",[t._v("回到"),s("code",[t._v("结构化数据")]),t._v("中，点击"),s("code",[t._v("class")]),t._v("下的"),s("code",[t._v("shuoshuo")]),t._v("。找到权限，在"),s("code",[t._v("Class 访问权限")]),t._v("中将"),s("code",[t._v("add_fields")]),t._v("以及"),s("code",[t._v("create")]),t._v("权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将"),s("code",[t._v("delete")]),t._v("和"),s("code",[t._v("update")]),t._v("也设置为跟它们一样的权限。")]),t._v(" "),s("li",[t._v("点击"),s("code",[t._v("class")]),t._v("下的"),s("code",[t._v("_User")]),t._v("添加列，列名称为"),s("code",[t._v("img")]),t._v("，默认值填上你这个账号想要用的头像url，这一项不进行配置，说说头像会显示为默认头像——Artitalk的logo。")]),t._v(" "),s("li",[t._v("在最菜单栏中找到设置->应用keys，记下来"),s("code",[t._v("AppID")]),t._v("和"),s("code",[t._v("AppKey")]),t._v("，一会会用。")]),t._v(" "),s("li",[t._v("最后将"),s("code",[t._v("_User")]),t._v("中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。")]),t._v(" "),s("li",[t._v("因为leancloud功能的限制。若想同时使用valine和artitalk，请在"),s("code",[t._v("class")]),t._v("中添加名为"),s("code",[t._v("Comment")]),t._v("的class。不推荐在存储valine的应用中新建名为"),s("code",[t._v("shuoshuo")]),t._v("的class，可能会出现神奇的bug。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("❗ 关于设置权限的这几步")]),t._v(" "),s("p",[t._v("这几步一定要设置好，才可以保证不被“闲人”破解发布说说的验证")])]),t._v(" "),s("h3",{attrs:{id:"🌼-html片段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌼-html片段"}},[t._v("#")]),t._v(" 🌼 HTML片段")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果你加载本js后出现一直是加载页面的情况，请检查你的主题是否会对其中内容进行渲染（F12查看即可）。\n如果是因为渲染导致的问题，请在"),s("code",[t._v("<script>")]),t._v("标签外面使用"),s("code",[t._v("{% raw %}")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% raw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endraw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"🎅-配置项的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🎅-配置项的说明"}},[t._v("#")]),t._v(" 🎅 配置项的说明")]),t._v(" "),s("p",[t._v("可以通过修改配置项快捷更改部分功能，"),s("RouterLink",{attrs:{to:"/settings.html"}},[t._v("点我查看详细说明")])],1),t._v(" "),s("h3",{attrs:{id:"🔨-测试使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-测试使用"}},[t._v("#")]),t._v(" 🔨 测试使用")]),t._v(" "),s("p",[t._v("如果上面的配置没有问题，打开你的页面，点击页面右下角的登录输入用户密码后，点击发布说说即可。")]),t._v(" "),s("h3",{attrs:{id:"🔨-说说内容的删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-说说内容的删除"}},[t._v("#")]),t._v(" 🔨 说说内容的删除")]),t._v(" "),s("p",[t._v("登录后点击说说内容框右上角的查，点击确定删除即可。")]),t._v(" "),s("h3",{attrs:{id:"🔨-说说内容的修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-说说内容的修改"}},[t._v("#")]),t._v(" 🔨 说说内容的修改")]),t._v(" "),s("p",[t._v("在leancloud中找到自己添加的名为"),s("code",[t._v("shuoshuo")]),t._v("的class，在里面的"),s("code",[t._v("content")]),t._v("中编辑即可。")]),t._v(" "),s("h2",{attrs:{id:"🦄-在typecho中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🦄-在typecho中使用"}},[t._v("#")]),t._v(" 🦄 在Typecho中使用")]),t._v(" "),s("ol",[s("li",[t._v("登陆后台后新增独立页面")]),t._v(" "),s("li",[t._v("标题随意填，内容填为")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("!!!\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n!!!\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("发布页面")])]),t._v(" "),s("h2",{attrs:{id:"🕸-使用cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕸-使用cdn"}},[t._v("#")]),t._v(" 🕸 使用cdn")]),t._v(" "),s("h3",{attrs:{id:"🕸-unpkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕸-unpkg"}},[t._v("#")]),t._v(" 🕸 UNPKG")]),t._v(" "),s("h4",{attrs:{id:"⭐-获取最新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐-获取最新"}},[t._v("#")]),t._v(" ⭐ 获取最新")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//默认获取最新，推荐使用\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"🍳-获取指定版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🍳-获取指定版本"}},[t._v("#")]),t._v(" 🍳 获取指定版本")]),t._v(" "),s("p",[t._v("使用指定版本，在版本号填上对应版本即可，例如："),s("a",{attrs:{href:"https://unpkg.com/artitalk@1.1.15/artitalk.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/artitalk@1.1.15/artitalk.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("关于版本可查看："),s("a",{attrs:{href:"https://unpkg.com/artitalk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/artitalk/"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk@版本号/artitalk.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"🕸-jsdelivr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕸-jsdelivr"}},[t._v("#")]),t._v(" 🕸 JsDelivr")]),t._v(" "),s("h4",{attrs:{id:"⭐-获取最新-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐-获取最新-2"}},[t._v("#")]),t._v(" ⭐ 获取最新")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//默认获取最新，推荐使用\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"🍳-获取指定版本-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🍳-获取指定版本-2"}},[t._v("#")]),t._v(" 🍳 获取指定版本")]),t._v(" "),s("p",[t._v("使用指定版本，在版本号填上对应版本即可，例如："),s("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/artitalk@1.1.15",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cdn.jsdelivr.net/npm/artitalk@1.1.15"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("关于版本可查看："),s("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/artitalk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cdn.jsdelivr.net/npm/artitalk/"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/artitalk@版本号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-9420537843748923","data-ad-slot":"8405286900"}}),t._v(" "),s("script",[t._v("\n(adsbygoogle = window.adsbygoogle || []).push({});\n")])])])}),[],!1,null,null,null);a.default=r.exports}}]);