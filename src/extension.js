const vscode = require('vscode');

const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    console.log('vfpweb扩展插件已激活');
    console.log(vscode);
    //require('./helloword')(context); // helloworld
    //require('./test-command-params')(context); // 测试命令参数
    //require('./test-menu-when')(context); // 测试菜单when命令
    //require('./jump-to-definition')(context); // 跳转到定义
    require('./completion')(context); // 自动补全
    //require('./hover')(context); // 悬停提示
    //require('./webview')(context); // Webview
    //require('./welcome')(context); // 欢迎提示
    //require('./other')(context); // 其它杂七杂八演示代码

    //const testFn = require('./test-require-function');
    //console.log(testFn); // vscode的日志输出不可靠，这里竟然会打印null？！
    //testFn(1, 2);

    // 自动提示演示，在dependencies后面输入.会自动带出依赖
    // this.dependencies.
};