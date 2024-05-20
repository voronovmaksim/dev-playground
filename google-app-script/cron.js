function log(parms, letter, control) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];

    var log=1
    for(var i=1; log!=0;i++)
    {
        log=sheet.getRange(letter+i).getValue().length;
    }
    i--;

    if(i>control+1)
    {
        for(;i!=2;i--)
            sheet.getRange(letter+i).clear();
    }

    sheet.getRange(letter+i).setValue(parms);
}

function sleep(t,m)
{
    var time=t;
    var min=m;

    var now=new Date();
    var now_min=now.getHours()*60+now.getMinutes();
    Logger.log(now_min);

    var arr_time=time.split(':');
    var  in_time=arr_time[0]*60+(+arr_time[1]);
    Logger.log(in_time);

    if(now_min>=in_time && now_min-in_time<min) return false;
    else return true;
}



function cron1() {
    try {
        var zak=UrlFetchApp.fetch('http://h122544.s04.test-hf.ru/sidar/');
        log(zak,'A',5);

    } catch (e) {}
}

function cron2() {
    try {
        if(sleep('14:00',120))
        {
            var zak=UrlFetchApp.fetch('http://h122544.s04.test-hf.ru/tomas/FaryTayl/');
            log(zak,'B',5);
        }
    } catch (e) {}
}

function cron3() {
    try {
        var zak=UrlFetchApp.fetch('h122544.s04.test-hf.ru/Bah/vse_chs/');
        log(zak,'C',5);

    } catch (e) {}
}


function chek_time(inp) {
    var input=inp;
    var i=(+input.charAt(1));
    var latter=input.charAt(0);
    var two=i+1;

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var min=sheet.getRange(latter+i).getValue();
    var last=sheet.getRange(latter+two).getValue();

    if(typeof(min)=='string'||last.length==0)
    {
        i++;
        sheet.getRange(latter+i).setValue(new Date());
        return true;
    }

    var last_date=new Date(last);
    var now_date = new Date();
    var raz=now_date-last_date;

    min=min*60*1000;
    if (raz>=min)
    {
        sheet.getRange(latter+two).setValue(now_date);
        return true;
    }
    else return false;

}