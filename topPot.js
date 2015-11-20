//-- Object Constructor: TopPotShop ---------------------------
function TopPotShop(storeLocation, minCustPerHour, maxCustPerHour, avgDonutsPerCust) {
  this.storeLoc = storeLocation;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.perCust = avgDonutsPerCust;
  this.perHour = [];
}
//--- Function to add rows, cells and data to table --------------------------
TopPotShop.prototype.render = function() {
  var total = 0;
  this.donutsPerHour();
  var cell = document.createElement('tr');
  cell.id = this.storeLoc;
  var table = document.getElementById('reportTable');
  cell.innerHTML = this.storeLoc;
  table.appendChild(cell);

  for (var i = 0; i < this.perHour.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = this.perHour[i];
    cell.appendChild(td);
    total += this.perHour[i];
  }

  var donutsPerDay = document.createElement('td');
  donutsPerDay.innerHTML = total;
  cell.appendChild(donutsPerDay);
};
//---- Calculate donuts per hour and push to TopPotShop 'perHour' array -----
TopPotShop.prototype.donutsPerHour = function() {
  for (var i = 0; i < 12; i++) {
    this.perHour.push(Math.floor((Math.random() * (this.max - this.min +
     1) + this.min) * this.perCust));
  }
};
//---Event listener to add a new TopPotShop and call the 'render' function to
//-- add the new data to the table ------------------------------------------
document.getElementById('newStore').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var min = parseInt((document.getElementById('min').value), 10);
  var max = parseInt((document.getElementById('max').value), 10);
  var perCust = parseInt((document.getElementById('perCust').value), 10);
  var addLoc = [name , min , max , perCust];
  var newShop = new TopPotShop(addLoc[0], addLoc[1], addLoc[2], addLoc[3]);
//--- stop 'submit' if form is empty ----------------------------------------
  if (name === '' || min === '' || max === '' || perCust === '') {
    return false;
  } else {
  newShop.render();
  document.getElementById("addStore").reset();
  }
});

//--- static initial data stored in arrays to populate table with -----------
var stores = [];
  stores[0] = new TopPotShop("Downtown", 8, 43, 4.5);
  stores[1] = new TopPotShop("Capitol Hill", 4, 37, 2);
  stores[2] = new TopPotShop("SLU", 9, 23, 6.33);
  stores[3] = new TopPotShop("Wedgewood",2, 28, 1.25);
  stores[4] = new TopPotShop("Ballard", 8, 58, 3.75);
//--- iterate through the static arrays and call render function for each ---
stores.forEach(function(store, i) {
    stores[i].render();
});
//-- remove last row from table ---------------------------------------------
document.getElementById('deleteRow').addEventListener('click', function(){
  reportTable.deleteRow(-1);
});
