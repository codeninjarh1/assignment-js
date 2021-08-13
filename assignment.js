

//1: kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = 1000;
    var totalMeter = kilometer * meter;
    return totalMeter;
}

var result = kilometerToMeter(10);
console.log(result);

// 2: budgetCalculator

function budgetCalculator(budget, computerPrice, mobilePrice, watchPrice) {
    let totalCost = computerPrice + mobilePrice + watchPrice;
    if(totalCost < budget) {
        return budget - totalCost;
    }else {
        return - [totalCost - budget];
    }
}

let totalBudget = budgetCalculator(20000, 10000, 2000, 2000);
console.log(totalBudget);
  



// // 3: hotelCost

function hotelCost(stay) {
    var hotelRent = 0;
    if (stay <= 10) {
        hotelRent = stay * 400;
        return hotelRent;
    }else if(stay <= 20) {
        var regularStayCost = 10 * 400;
        var remaining = stay - 10;
        var regularDiscountCost = remaining * 300;
        hotelRent = regularStayCost + regularDiscountCost;
        return hotelRent;
    }else {
        var regularStayCost = 10 * 400;
        var regularDiscountCost = 10 * 300;
        var remaining = stay - 20;
        var premiumDiscountCost = remaining * 250;
        hotelRent = regularStayCost + regularDiscountCost + premiumDiscountCost;
        return hotelRent;
    }

}

var totalRent = hotelCost(25);
console.log(totalRent);

// 4: megaFriend

function megaFriend(friends) {
    let friendCircle = 0;
    let max = [''];

    for(let i = 0; i < friends.length; i++) {
        if(friends[i].length>=friendCircle) {
            friendCircle = friends[i].length;
            if(max[max.length-1].length < friends[i].length) {
                max = [];
                max.push(friends[i])
            }
            else {
                max = [...max,friends[i]];
            }
        }
    }
    return [...max];
}

var topFriend = megaFriend(["Hasan", "Nadim", "shafayat", "Lifan", "Tamim"]);
console.log(topFriend);



