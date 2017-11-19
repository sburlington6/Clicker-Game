/*

*/
class Game{
    constructor(totalMoney){
        this.totalMoney = totalMoney;
    }
    
    addMoney(amount){
        this.totalMoney = this.totalMoney + amount;
        $('#gameMoney').html('$'+this.totalMoney);
    }
    
    subtractMoney(amount){
        this.totalMoney = this.totalMoney - amount;
        $('#gameMoney').html('$'+this.totalMoney);
    }
    
    getMoney(){
        return this.totalMoney;
    }
    
    addItem(item){
        
        $('#game').append('<div id="'+item.name+'"></div>');
        
        //item name
         $('#'+item.name).append('<span>'+item.name+'</span> ');
        
        //buying item controls
        $('#'+item.name).append('<button onclick="'+item.name+'.buyItem(1)" id="'+item.name+'Buy">Buy 1 $<span id="'+item.name+'Cost">'+item.cost+'</span></button> ');
        $('#'+item.name).append('<span>Item Count: </span><span id="'+item.name+'Count">'+item.count+'</span>');
        
        //using item  controls
        $('#'+item.name).append('<button onclick="'+item.name+'.run()" id="'+item.name+'Run">$<span id="'+item.name+'Pays">'+item.getPays()+'</span> Per Click</button> ');
        
        
         $('#'+item.name).append('<br/><br/>');
    }
    
    start(){
        $('#game').append('<span>Total Money:</span><span id="gameMoney">$'+this.totalMoney+'</span>');
    }
}


/*
name=items name
cost=cost per item
count=total number of this item owned
pays=ammount paid per time
time=time to get pays ammount in seconds
*/
class Item{
    constructor(name, cost, costFactor, count, pays, payFactor, time){
        this.name = name;
        this.cost = cost;
        this.count = count;
        this.pays = pays;
        this.time = time;
        this.costFactor = costFactor;
        this.payFactor = payFactor;
    }
    
    buyItem (amount){
        
        if (this.cost <= game.getMoney()){
    
        //subtract item cost from total
        game.subtractMoney(this.cost);
        
        //add the number of items to count
        this.count = this.count + amount;
        $('#'+this.name+'Count').html(this.count);
        
        //increase the cost of the item
        this.cost = (this.cost*this.costFactor).toFixed(0);
        $('#'+this.name+'Cost').html(this.cost)
        
        //increase what the item pays
        this.pays = (this.pays*this.payFactor).toFixed(0);
        $('#'+this.name+'Pays').html(this.pays);
            
        }
        
    }
    
    getPays(){
        return this.pays;
    }
    
    run(){
        game.addMoney(this.pays*this.count);
    }
}

var game = new Game(20);
game.start();


//constructor(name, cost, costFactor, count, pays, payFactor, time)
var bacon = new Item('bacon', 10, 1.25, 0, 20, 1.05, 5);
game.addItem(bacon);
var ham = new Item('ham', 20, 1.25, 0, 30, 1.05, 10);
game.addItem(ham);



