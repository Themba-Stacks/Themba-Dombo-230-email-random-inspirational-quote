function randomGenerator (listArray){
    return listArray[Math.floor(Math.random() * listArray.length)]
}

module.exports = randomGenerator;
