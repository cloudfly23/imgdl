function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function generate() {
    subject = document.getElementById("subject").value;
    if (subject.length==0 )
        return;
    var patt = /(\w+):\/\/([^/:]+)?([^# ]*)/;
    var a = subject.match(patt);
    ym = a[2];
    lj = a[3];
    if (ym.indexOf("xitu") != -1){
       hz = "jj";
    }
    else if (ym.indexOf("sinaimg") != -1){
        hz = "wb";
    }
    else if (ym.indexOf("hdslb") != -1){
        hz = "bili";
    }
    else if (ym.indexOf("qpic") != -1){
        hz = "qpic";
    }
    result = `https://dl.cloudflytc.now.sh/${hz}${lj}`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}