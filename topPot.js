var stores = new Array();
  stores[0] = new TopPotShop("Downtown", 8, 43, 4.5);
  stores[1] = new TopPotShop("Capitol Hill", 4, 37, 2.00);
  stores[2] = new TopPotShop("South Lake Union", 9, 12, 6.33);
  stores[3] = new TopPotShop("Wedge wood",2, 28, 1.25);
  stores[4] = new TopPotShop("Ballard", 8, 58, 3.75);

for (var index = 0; index < stores.length; index++) {
    stores[index].toReport();
}

function TopPotShop(location, minCustPerHour, maxCustPerHour,
  avgDonutPerCust) {
  this.location = location;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.avg = avgDonutPerCust;

  this.donutsPerHour = function() {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min) * this.avg;
  };

  this.donutsPerDay = function(){
    return Math.round(this.donutsPerHour() * 11);
  };

  this.toReport = function() {
    var shopsTable = document.createElement('table');
    var shopsRow = document.createElement('tr');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    td1.textContent = this.location;
    td2.textContent = Math.round(this.donutsPerHour());
    td3.textContent = Math.round(this.donutsPerHour());
    td4.textContent = Math.round(this.donutsPerHour());
    td5.textContent = Math.round(this.donutsPerHour());
    td6.textContent = Math.round(this.donutsPerHour());
    td7.textContent = Math.round(this.donutsPerHour());
    td8.textContent = Math.round(this.donutsPerHour());
    td9.textContent = Math.round(this.donutsPerHour());
    td10.textContent = Math.round(this.donutsPerHour());
    td11.textContent = Math.round(this.donutsPerHour());
    td12.textContent = Math.round(this.donutsPerHour());
    td13.textContent = this.donutsPerDay();
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    row.appendChild(td8);
    row.appendChild(td9);
    row.appendChild(td10);
    row.appendChild(td11);
    row.appendChild(td12);
    row.appendChild(td13);
    shopsTable.appendChild(row);
    document.body.appendChild(shopsTable);
  };
}
