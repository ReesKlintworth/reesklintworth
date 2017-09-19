var comfortable = true;
var proficient = true;
$(document).on( "click", "#skill-select-proficient", function() {
    proficient = !proficient;
    update_skills();
});

$(document).on("click", "#skill-select-comfortable", function() {
    comfortable = !comfortable;
    update_skills();
});

update_skills = function() {
    if (comfortable) {
        $("#skill-select-comfortable").addClass("btn-primary");
    } else {
        $("#skill-select-comfortable").removeClass("btn-primary");
    }
    $(".comfortable").each(function(index, value) {
        if (comfortable) {
            $(value).removeClass("skill-disabled");
        } else {
            $(value).addClass("skill-disabled");
        }
    });

    if (proficient) {
        $("#skill-select-proficient").addClass("btn-success");
    } else {
        $("#skill-select-proficient").removeClass("btn-success");
    }  
    $(".proficient").each(function(index, value) {
        if (proficient) {
            $(value).removeClass("skill-disabled");
        } else {
            $(value).addClass("skill-disabled");
        }
    });

    sort_skills($(".list-languages"), $(".list-languages").children());
    sort_skills($(".list-concepts"), $(".list-concepts").children());
}

sort_skills = function(parent, children) {
    children.detach().sort(function(a, b) {
        var aDisabled = $(a).find("span").hasClass("skill-disabled");
        var aText = $(a).find("span")[0].outerText;
        var bDisabled = $(b).find("span").hasClass("skill-disabled");
        var bText = $(b).find("span")[0].outerText;        
        if ((aDisabled && bDisabled) || !(aDisabled || bDisabled)) {
            return aText.localeCompare(bText);
        } else if (aDisabled) {
            return 1;
        }
        return -1;
    });
    parent.append(children);
}
