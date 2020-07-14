const restaraunt = {
  name: "Tuscano",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: available = (partySize) => {
    let seatsLeft = restaraunt.guestCapacity - restaraunt.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: party = (partySize) => {
      restaraunt.guestCount = restaraunt.guestCount + partySize
       
  } ,
  removeParty: remove = (partySize) => {
      restaraunt.guestCount = restaraunt.guestCount - partySize
  }
};


restaraunt.seatParty(72)
console.log(restaraunt.checkAvailability(4));

restaraunt.removeParty(5)
console.log(restaraunt.checkAvailability(4));
