window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/2b297286909c4501841155275aef2769"));
    }
})

async function getInfo() {
    //게좌 번호 사용하는 구간
    var address = '0x657C62b7dfeEAC38d625a74BA96C9e8190C36ea2';
    var balance;
    web3.eth.getBalance(address, function(error, wei){
        if(!error){
            balance = web3.utils.fromWei(wei, 'ether');
            //document.getElementById("output").innerHTML = balance + "ETH" + "<br>";
        }
    });

    //transaction hash 이용하는 구간
    var address, Thash, result
    var test_value, test_price, all_gas, test_gas, test_gasPrice, all_price,test_to, test_from
    Thash ='0x35b76e295784b0e8202ba6241e00b6b83e9d61c01e67e772c804356c2f36b2aa';
    //address = document.getElementById("address").value

    var receipt = await web3.eth.getTransaction(Thash);

    //입금 : value만 따로 띄우기.
    test_value = receipt.value;

    //출금 : value + gas * gasPrice
    //all_gas : gas * gasPrice
    test_gas = receipt.gas;
    test_gasPrice =  receipt.gasPrice;
    all_gas = test_gas * test_gasPrice;

    all_price = receipt.gas + all_gas;

    test_price = all_price;

    //주는 사람 : from
    test_from = receipt.from;

    //받는 사람 : to
    test_to = receipt.to;


    //출력            
    var arrValue=new Array();
    arrValue[0]=test_value;     // 입금 금액
    arrValue[1]=test_price;     // 출금 금액
    arrValue[2]=test_from;      // 주는 사람
    arrValue[3]=test_to;        // 받는 사람
    arrValue[4]=balance;        // 잔액, 이더값
    return arrValue;
}