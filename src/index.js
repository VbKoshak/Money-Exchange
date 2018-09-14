// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var Obj = new Object();
    try
    {
    if (currency <= 0)
    {
        return Obj;
    }
    else if (currency <= 10000 && currency > 0)
    {
        //HQDNP 50 25 10 5 1
        var H = Math.floor(currency/50);
        if (H){
        Obj["H"] = H;
        currency -= H*50;};
        if (currency == 0)
        {
            return Obj;
        };
        var Q = Math.floor(currency/25);
        if (Q){
        Obj["Q"] = Q;
        currency -= Q*25;};
        if (currency == 0)
        {
            return Obj;
        };
        var D = Math.floor(currency/10);
        if (D){
        Obj["D"] = D;
        currency -= D*10;};
        if (currency == 0)
        {
            return Obj;
        };
        var N = Math.floor(currency/5);
        if(N){
        Obj["N"] = N;
        currency -= N*5;};
        if (currency == 0)
        {
            return Obj;
        };
        var P = Math.floor(currency/1);
        if (P){
        Obj["P"] = P;
        return Obj;};
    }
    else if (currency > 10000)
    {
        throw new Error("You are rich, my friend! We don't have so much coins for exchange");
    }
}
catch(e)
{
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
}

}
