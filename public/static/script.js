jQuery(function ($) {
    var $bodyEl = $('body'),
        $sidedrawerEl = $('#sidedrawer');


    // ==========================================================================
    // 显示/隐藏抽屉
    // ==========================================================================
    function showSidedrawer() {
        // show overlay
        var options = {
            onclose: function () {
                $sidedrawerEl
                    .removeClass('active')
                    .appendTo(document.body);
            }
        };

        var $overlayEl = $(mui.overlay('on', options));

        // show element
        $sidedrawerEl.appendTo($overlayEl);
        setTimeout(function () {
            $sidedrawerEl.addClass('active');
        }, 20);
    }


    function hideSidedrawer() {
        $bodyEl.toggleClass('hide-sidedrawer');
    }


    $('.js-show-sidedrawer').on('click', showSidedrawer);
    $('.js-hide-sidedrawer').on('click', hideSidedrawer);


    // ==========================================================================
    // 左侧动态菜单
    // ==========================================================================
    var $titleEls = $('strong', $sidedrawerEl);

    $titleEls
        .next()
        .hide();

    $titleEls.on('click', function () {
        $(this).next().slideToggle(200);
    });
});



// 选夫节点,子节点,测试用 .css({"border":"2px solid red"});
// ==========================================================================
// 统计每个talk评论数
// ==========================================================================
$(document).ready(function () {
    setTimeout(test, 500);
    setInterval(test, 500);
});
function test() {
    var ArrayComments = $(".comments");
    for (var i = 0; i < ArrayComments.length - 1; i = i + 1) {
        //console.log($(ArrayComments[i]).children().length - 2);
        var commentcount = $(ArrayComments[i]).children().length - 2;
        $(ArrayComments[i]).parent().parent().children("div.talkheader").children("span.commentcount").html(commentcount+"条评论");
    }
}

// ==========================================================================
// 帖子分类
// ==========================================================================
var flag = -1;

$(document).ready(
    function(){
        $("#quanbu").click(function f1(){
            flag = 0;
            window.location.reload();
        });

        $("#xianliao").click(function f1(){
            flag = 1;
            var ArrayTalks = $(".talk");
            for(var i = 0; i < ArrayTalks.length - 1; i++){
                var talkType = $(ArrayTalks[i]).children(".mui--divider-right").children(".type").text();
                if(talkType==="[闲聊]"){
                    $(ArrayTalks[i]).show();
                }
                else{
                    $(ArrayTalks[i]).hide();
                }
            }
            $("#SubmitATalk").hide();
        });

        $("#yishu").click(function f1(){
            flag = 2;
            var ArrayTalks = $(".talk");
            for(var i = 0; i < ArrayTalks.length - 1; i++){
                var talkType = $(ArrayTalks[i]).children(".mui--divider-right").children(".type").text();
                if(talkType==="[艺术]"){
                    $(ArrayTalks[i]).show();
                }
                else{
                    $(ArrayTalks[i]).hide();
                }
            }
            $("#SubmitATalk").hide();
        });

        $("#jisuanji").click(function f1(){
            flag = 3;
            var ArrayTalks = $(".talk");
            for(var i = 0; i < ArrayTalks.length - 1; i++){
                var talkType = $(ArrayTalks[i]).children(".mui--divider-right").children(".type").text();
                if(talkType==="[计算机]"){
                    $(ArrayTalks[i]).show();
                }
                else{
                    $(ArrayTalks[i]).hide();
                }
            }
            $("#SubmitATalk").hide();
        });

        $("#wenshi").click(function f1(){
            flag = 3;
            var ArrayTalks = $(".talk");
            for(var i = 0; i < ArrayTalks.length - 1; i++){
                var talkType = $(ArrayTalks[i]).children(".mui--divider-right").children(".type").text();
                if(talkType==="[文史]"){
                    $(ArrayTalks[i]).show();
                }
                else{
                    $(ArrayTalks[i]).hide();
                }
            }
            $("#SubmitATalk").hide();
        });

        $("#shuxue").click(function f1(){
            flag = 4;
            var ArrayTalks = $(".talk");
            for(var i = 0; i < ArrayTalks.length - 1; i++){
                var talkType = $(ArrayTalks[i]).children(".mui--divider-right").children(".type").text();
                if(talkType==="[数学]"){
                    $(ArrayTalks[i]).show();
                }
                else{
                    $(ArrayTalks[i]).hide();
                }
            }
            $("#SubmitATalk").hide();
        });
    }
);


//
$(document).ready(function () {
    setTimeout(noteFunction, 500);
});

function noteFunction(){
    var ArrayTalks = $(".talk");
    for(var i = 0; i < ArrayTalks.length - 1; i++){
        var notes = $(ArrayTalks[i]).children("p.allNote").text();
        console.log(notes);
    }
}

function onSubmitButtonClick(){

}


// ==========================================================================
// 检验管理员登入,del按钮的出现
// ==========================================================================
var thisURL = document.URL;
var getval = thisURL.split('?')[1];
var showval = getval.split('=')[1];
function confirmAdmin() {
    $("#del").hide();
    if(showval==="tTc3Xq86RerCTLtq"){
        //$("#userName").hide();
        $("#websiteTitle").append("——管理员");
        $("#del").show();
    }
}