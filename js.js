function task1() {
    var str = document.getElementById("string-task1");
    var words = str.value.replace(/\s+/g, ' ').trim().split(" ");
    var list = document.getElementById("list-task1")
    for (var i = 0; i < words.length; i++) {
        list.innerHTML += ("<li>" + words[i] + ": " + words[i].length + "</li>");
    }
    var button = document.getElementById("button-task1");
    button.disabled = true;
    str.disabled = true;
}

function task2() {
    var str = document.getElementById("string-task2");
    var letters = str.value.toUpperCase().split("");
    var lettersnumber = [];
    for (var i = 0; i < letters.length; i++) {
        if (!lettersnumber.includes(letters[i])) {
            lettersnumber.push(letters[i]);
        }
    }
    var answer = document.getElementById("answer-task2")
    answer.innerHTML = str.value.toUpperCase();
    for (var i = 0; i < lettersnumber.length; i++) {
        answer.innerHTML = answer.innerHTML.replaceAll(lettersnumber[i], i + ".");
    }
    var button = document.getElementById("button-task2");
    button.disabled = true;
    str.disabled = true;
}

function task3() {
    var str = document.getElementById("string-task3");
    var answer = document.getElementById("answer-task3");
    if (isNaN(str))
    {
        var count = 0;
        var letters = str.value.split("");
        answer.innerText = answer.innerText + letters[0];
        var isBracketOpen = false;
        for (var i = 1; i < letters.length; i++)
        {
            if (letters[i] == letters[i-1])
            {
                count++;
            } 
            else {
                if (isBracketOpen)
                {
                    answer.innerText += "]";
                    isBracketOpen = false;
                }
                count = 0;
            }
            if (count >= 2 && !isBracketOpen)
            { 
                answer.innerText += "[";
                isBracketOpen = true;
            }
            answer.innerText += letters[i];
            if (i == letters.length - 1 && isBracketOpen) {
                answer.innerText += "]";
            }
        }
    } else {
        answer.innerText = "Please enter a valid string";
    }
    var button = document.getElementById("button-task3");
    button.disabled = true;
    str.disabled = true;
}