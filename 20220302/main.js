$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //console.log(topicCount);
    for (var x = 0; x < topicCount; x++) {
        $("#courseTable").append(
            `<tr><td>${x + 1}</td><td>預計日期</td><td>${topic[x]}</td></tr>`);
    }

});