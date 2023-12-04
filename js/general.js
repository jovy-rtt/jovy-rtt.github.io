document.addEventListener("DOMContentLoaded", function () {

    var currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.includes("archives")) {
        deLetebackgtound();
        // 创建 link 元素
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "/css/archives.css";
        // 将 link 元素添加到页面头部
        document.head.appendChild(linkElement);
        var strings = ['Az 经常告诉我，及时归档是好习惯', '修狗很听话，修狗每次都及时归档', '要被Az 夸奖啦！嘿嘿'];
        insertBoard(strings.length, strings);
    } else if (currentURL.includes("categories")) {
        deLetebackgtound();
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "/css/categories.css";
        document.head.appendChild(linkElement);
        var strings = ['这儿是一类', '那儿也是一类', '这儿还有一类'];
        insertBoard(strings.length, strings);
    } else if (currentURL.includes("about")) {
        deLetebackgtound();
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "/css/about.css";
        document.head.appendChild(linkElement);
        deleteAbout();
    }
    else if (currentURL.includes("links")) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "/css/links.css";
        document.head.appendChild(linkElement);
    }
    else if (currentURL.includes("posts")) {
        deLetebackgtound();
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "/css/posts.css";
        document.head.appendChild(linkElement);
    }
});


// 删除背景元素
function deLetebackgtound() {
    // 删除默认背景图像
    var bannerElement = document.getElementById("banner");
    // 检查元素是否存在
    if (bannerElement) {
        // 删除背景图像
        bannerElement.style.background = "";
    }
}


// 插入小狗公告板内容
function insertBoard(count,contentArray) {
    var fadeContainers = document.getElementsByClassName('fade-in-up');

    // 遍历容器 div，向每个容器插入 <div><ul><li>
    for (var i = 0; i < fadeContainers.length; i++) {
        var container = fadeContainers[i];

        // 创建要插入的元素
        var newDiv = document.createElement('div');
        newDiv.className = 'bulletin-board';
        var newUl = document.createElement('ul');
        newUl.className = 'bulletin-board-ul';

        // 插入元素
        container.appendChild(newDiv);
        newDiv.appendChild(newUl);


        for (var j = 0; j < count; j++) {
            var newLi = document.createElement('li');
            newLi.className = 'bulletin-board-li';
            var newP = document.createElement('p');
            newP.className = 'bulletin-board-li-p';
            newP.innerHTML = contentArray[j];
            newUl.appendChild(newLi);
            newLi.appendChild(newP);
        }
    }
}


// 关于页删除
function deleteAbout() {
    // 获取所有具有类名 'fade-in-up' 的元素
    var fadeContainers = document.querySelectorAll('.fade-in-up');

    // 遍历并删除这些元素
    fadeContainers.forEach(function (element) {
        element.remove();
    });

}