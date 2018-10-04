module.exports = function makeExchange(currency) {
    let Obj = new Object();
    if (currency <= 0)
    {
        return Obj;
    }
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else if (currency <= 10000 && currency > 0)
    {
        let temp = Math.floor(currency/50);
        if (temp){
        Obj["H"] = temp;
        currency -= temp*50;};
        if (currency == 0)
        {
            return Obj;
        };
        temp = Math.floor(currency/25);
        if (temp){
        Obj["Q"] = temp;
        currency -= temp*25;};
        if (currency == 0)
        {
            return Obj;
        };
        temp = Math.floor(currency/10);
        if (temp){
        Obj["D"] = temp;
        currency -= temp*10;};
        if (currency == 0)
        {
            return Obj;
        };
        temp = Math.floor(currency/5);
        if(temp){
        Obj["N"] = temp;
        currency -= temp*5;};
        if (currency == 0)
        {
            return Obj;
        };
        temp = Math.floor(currency/1);
        if (temp){
        Obj["P"] = temp;
        return Obj;};
    }
}
