
function dat(){
const today =new Date();
const option= {
    week:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
}
return today.toLocaleString("en-US",option);

}

module.exports.dat=dat;