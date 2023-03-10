function Pet(species) {
    this.health = 100;
    this.happiness = 55;
    this.hunger = 0;
    this.numHeals = 3;
    this.numFood = 10;
    this.species;
    this.petAge = 0;
}


$(document).ready(function() {
    function updateStats(){
        if(newPet.hunger<40){$("div#hungerBarStat").css("background-color", "green");
    }
        if(newPet.happiness>50){$("div#happinessBarStat").css("background-color", "green");
    }
        if(newPet.health>30) {$("div#healthBarStat").css("background-color", "green");
    }
        if(newPet.hunger<40 && newPet.happiness>50 && newPet.health > 30){
            $("div#petPic").html(`<img src="/images/${newPet.species}/${newPet.species}_happy.gif">`);
            $("#petMessage").text(`Çok Mutluyum HAHAHA`)
        }
        if(newPet.health<30) {
            $("div#petPic").html(`<img src="/images/${newPet.species}/${newPet.species}_sick.gif">`);
            $("div#healthBarStat").css("background-color", "red");
            $("#petMessage").text(`Oynarken hastalandım.Beni iyileştirir misin?!!`)
        }
        else if(newPet.happiness<=50){
            $("div#petPic").html(`<img src="/images/${newPet.species}/${newPet.species}_sad.gif">`);
            $("#petMessage").text(`Benimle Oynamazsan üzülürüm ama!!`)
            $("div#happinessBarStat").css("background-color", "red");
        
        }
        else if(newPet.hunger>40){
            $("div#petPic").html(`<img src="/images/${newPet.species}/${newPet.species}_sad.gif">`);
            $("#petMessage").text(`Çok acıktım. Kebap yiyelim mii?`)
            $("div#hungerBarStat").css("background-color", "red");
        }
        if(newPet.numHeals == 0 || newPet.numFood == 0){
            $("div#petPic").html(`<img src="/images/gameover.gif">`);
            $("#petMessage").text(`Oyun Bitti. Ama ${newPet.petAge} saniye de dayandın. Daha iyisini yapabilirsin.`);
            // $('button#feedPet').attr('disabled', 'disabled');
            // $('button#healPet').attr('disabled', 'disabled');
            // $('button#playPet').attr('disabled', 'disabled');
        }
        if(newPet.health == 0 || newPet.hunger == 100 || newPet.happiness == 0){
            $("div#petPic").html(`<img src="/images/gameover.gif">`);
            $("#petMessage").text(`Oyun Bitti. Ama ${newPet.petAge} saniye de dayandın. Daha iyisini yapabilirsin.`);
            // $('button#feedPet').attr('disabled', 'disabled');
            // $('button#healPet').attr('disabled', 'disabled');
            // $('button#playPet').attr('disabled', 'disabled');
        }

        
        $("span.heals").text(newPet.numHeals);
        $("span.food").text(newPet.numFood);
        $("#healthBarStat").width(newPet.health);
        $("#happinessBarStat").width(newPet.happiness);
        $("#hungerBarStat").width(newPet.hunger);
    }

    var newPet = new Pet();

    $('#select').on("click", function selectSpecies(){
        newPet = new Pet();
        var species = $('#species :selected').text().toLowerCase();
        newPet.species = species;
        $(".species").text(species);
        $("div#petPic").html(`<img src="/images/${species}/${species}_happy.gif">`);
        $("#petMessage").text(`Yeni bir Maceraaaa yuppy!!`)
        $("span.heals").text(newPet.numHeals);
        $("span.food").text(newPet.numFood)
        setInterval(function(){
            updateStats();
            if(newPet.numHeals == 0 || newPet.numFood == 0 || newPet.health == 0 || newPet.hunger == 100 || newPet.happiness == 0){
                return;
            }
            newPet.happiness--;
        }, 1000)    
        setInterval(function(){
            updateStats();
            if(newPet.numHeals == 0 || newPet.numFood == 0 || newPet.health == 0 || newPet.hunger == 100 || newPet.happiness == 0){
                return;
            }
            if(newPet.numHeals == 0 || newPet.numFood == 0 || newPet.health == 0 || newPet.hunger == 100 || newPet.happiness == 0){
                return;
            }
            newPet.hunger++;
        }, 2000)
        setInterval(function(){
            updateStats();
            if(newPet.numHeals == 0 || newPet.numFood == 0 || newPet.health == 0 || newPet.hunger == 100 || newPet.happiness == 0){
                return;
            }
            newPet.petAge++;
        }, 1000)
    });


    $('button#feedPet').on("click", function(){
        if(newPet.health<100){newPet.health += 5}
        if(newPet.hunger>0){
            if(newPet.hunger<20){newPet.hunger = 0}
            else{newPet.hunger -= 20}
        }
        if(newPet.happiness<100){newPet.happiness += 2}
        if(newPet.numFood != 0){newPet.numFood--};
        updateStats();

    });
    $('button#healPet').on("click", function(){
        if(newPet.health<100){newPet.health = 100}
        if(newPet.happiness>=15){newPet.happiness -= 15}
        if(newPet.numHeals != 0){newPet.numHeals -= 1};
        updateStats();

    });
    $('button#playPet').on("click", function(){
        if(newPet.health>=15){newPet.health -= 15} else if(newPet.health<15){newPet.health = 0}
        if(newPet.hunger<100){newPet.hunger += 12}
        if(newPet.happiness <= 80){newPet.happiness += 20}
        else{newPet.happiness = 100}
        updateStats();

    });
    if(newPet.health == 0 || newPet.hunger == 100){
        return;
    }


})