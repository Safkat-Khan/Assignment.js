// Problem 1 

function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const result = radian * (180 / Math.PI);
        return result.toFixed(2);
        
    } else {
        return "Please Provide a valid Number";
    }
  }
  // Problem 1 ---> End <-----.
  
  
  
  
  //  Problem 2 
  function isJavaScriptFile(filename) {
    if (typeof filename === "string") {
        const fileName = filename.split('.').pop();
        if (fileName === "js") {
            return true;
        }
        return false;
    } else {
        return "Please Provide a valid FileName";
    }
  }
  //  Problem 2 ----> End <----
  
  
  //  Problem 3 
  
  function oilPrice(diesel, petrol, octane) {
    const petrolPerLitre = 130;
    const octanePerLitre = 135;
    const dieselPerLitre = 114;
    if (typeof diesel === "number" && typeof petrol === "number" && typeof octane === "number") {
        const dieselPrice = diesel * dieselPerLitre;
        const petrolPrice = petrol * petrolPerLitre;
        const octanePrice = octane * octanePerLitre;
        sum = dieselPrice + octanePrice + petrolPrice;
        return sum;
    }
    return "Please Provide a valid Number";
  }
  
  
  //  Problem 3 ----> End <----
  
  
  
  //  Problem 4 
  function publicBusFare(numberOfPassengers) {
    let totalPassengers = Math.abs(numberOfPassengers);
    if (typeof totalPassengers === "number") {
        let publicBusPerTicket = 250;
        let microBusRemaining = 0;
        let reservedBusRemaining = totalPassengers % 50;
        if (reservedBusRemaining <= 11) {
            return publicBusPerTicket * reservedBusRemaining;
        } else {
            microBusRemaining = reservedBusRemaining % 11;
            return totalPublicBusFare = publicBusPerTicket * microBusRemaining;
        }
    } else {
        return "Please Provide a valid Number";
    }
  
    
  }
  
  //  Problem 4 ----> End <----
  
  
  
  //  Problem 5 
  function isBestFriend(firstObj, secondObj) {
        if (typeof firstObj === "object" && typeof secondObj === "object" ) {
            if (firstObj.name === secondObj.friend && firstObj.friend === secondObj.name) {
            return true;
        } else {
            return false;
        }
        } else {
            return "Please Provide valid Object"
    }
    
  }
  
  //  Problem 5 ----> End <----
  