setInterval(function() {
    $("span").each(function(index, value) {
        value.className = value.className === 'red' ? 'green' : 'red';
    });
}, 500);