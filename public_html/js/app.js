function getIndex(items, item)
{
    for (var i = 0; i < items.length; i++)
    {
        var temp = items[i];
        if (temp[0] == item)
        {
            return i;
        }
    }
    return -1;
}

var paragraph = document.getElementById('secondDiv').innerHTML;
paragraph = paragraph.toLowerCase();
var occurences = {};
for (var char = 0; char < 26; char++)
{
    // console.log((char + 10).toString(36));
    var occurs = 0;
    for (var i = 0; i < paragraph.length; i++)
    {
        if (paragraph.charAt(i) == (char + 10).toString(36))
        {
            occurs += 1;
        }
    }
    occurences[(char + 10).toString(36)] = occurs;
}

var items = Object.keys(occurences).map(function (key) {
    return [key, occurences[key]];
});
items.sort(function (first, second) {
    return second[1] - first[1];
});

var text = "";
for (var i = 0; i < paragraph.length; i++)
{
    if (paragraph.charAt(i) == ' ')
    {
        text += paragraph.charAt(i);
    } else
    {
        var char = paragraph.charAt(i);
        // console.log("Item at:"+items.indexOf(char));
        var index = getIndex(items, char);
        console.log("Item at:" + index);
        if (index == -1)
        {
            text += "<span id='small'>" + char + "</span>";
        } else if (index <= items.length / 2 && index != -1)
        {
            text += "<span id='large'>" + char + "</span>";
        } else
        {
            text += "<span id='small'>" + char + "</span>";
        }
    }
}
document.getElementById('fourthDiv').innerHTML = text;
