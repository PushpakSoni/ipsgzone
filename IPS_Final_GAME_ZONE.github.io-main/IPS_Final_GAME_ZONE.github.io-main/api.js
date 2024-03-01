fetch("https://ipsgwalior.org/scoreboard/screenscore.php/prescore?key_teamA=a&key_teamB=b&key_date=29/2/2024&key_game=BADMINTON").then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
    })