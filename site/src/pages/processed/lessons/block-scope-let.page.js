export var page = {
    "title": "Block Scope (let)",
    "navGroup": ".lessons",
    "next": "lessons/block-scope-const",
    "nextText": "There's another way to do block scoping.  Learn about \"const\" next.",
    "heading": "Block Scope (\"let\" keyword)",
    "code": "function blockScoped() {\n    if(true) {\n        let zed = 'alive'; \n    }\n\n    console.log(\"Zed is \" + zed);\n}\n\nblockScoped();",
    "intro": "<p>Up until ES6, variables (<code>var</code>) are always function scoped.  It doesn&#39;t matter where you define your variable -- the variable is available anywhere within the function.  This allows you to write code that you wouldn&#39;t expect to work:</p>\n<pre><code class=\"lang-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">fnScoped</span><span class=\"hljs-params\">()</span> </span>{\n    <span class=\"hljs-keyword\">if</span>(<span class=\"hljs-literal\">true</span>) {\n        <span class=\"hljs-keyword\">var</span> zed = <span class=\"hljs-string\">'alive'</span>; <span class=\"hljs-comment\">// zed is \"hoisted\" to the function block</span>\n    }\n\n    <span class=\"hljs-keyword\">if</span>(<span class=\"hljs-literal\">true</span>) {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'zed is '</span> + zed); <span class=\"hljs-comment\">// zed is visible</span>\n    }\n}\n</code></pre>\n<p>In ES6, the <code>let</code> keyword allows you to define variables within the scope of the block (block scoping).  This makes variables behave more like what you might expect.</p>\n<pre><code class=\"lang-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">blockScoped</span><span class=\"hljs-params\">()</span> </span>{\n    <span class=\"hljs-keyword\">if</span>(<span class=\"hljs-literal\">true</span>) {\n        <span class=\"hljs-keyword\">let</span> zed = <span class=\"hljs-string\">'alive'</span>; <span class=\"hljs-comment\">// zed is not \"hoisted\" out of this block</span>\n    }\n\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'zed is '</span> + zed); <span class=\"hljs-comment\">// zed is not visible</span>\n}\n</code></pre>\n<p>Because of this, I&#39;m starting to write all of my variables using <code>let</code> instead of <code>var</code> unless I really want function scope, which is rare.</p>\n<h3 id=\"give-it-a-try\">Give it a try</h3>\n"
};