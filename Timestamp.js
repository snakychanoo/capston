
    window.addEventListener('load', function () {
        if (typeof web3 !== 'undefined') {
            console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
            window.web3 = new Web3(web3.currentProvider);
        } else {
            console.log('No Web3 Detected... using HTTP Provider')
            window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/2b297286909c4501841155275aef2769"));
        }
    })

    // async fuction getBalance() => 그냥 function getBalance() 가능?
    async function getBalance() { 
        var address, wei, balance, Thash, result
        Thash ='0x35b76e295784b0e8202ba6241e00b6b83e9d61c01e67e772c804356c2f36b2aa';
        //address = document.getElementById("address").value

        var receipt = await web3.eth.getTransaction(Thash);
        
        //timeStamp 구하는 곳
        var Bnumber = receipt.blockNumber; 
        var reb = await web3.eth.getBlock(Bnumber);
        //web3.eth.getBlock(Bnumber).then(console.log);

        var bbbb, timeS;
        bbbb = reb.timestamp;
        
        Unix_timesStamp(bbbb);

        //timeStamp 형식 : 유닉스
        //유닉스 형태를 일반적인 형태로 바꿔주는 곳
        function Unix_timesStamp(t){
            var date = new Date(t*1000);
            var year = date.getFullYear();
            var month = "0" + (date.getMonth() + 1);
            var day = "0" + date.getDate();
            var hour = "0" + date.getHours();
            var minute = "0" + date.getMinutes();
            var second = "0" + date.getSeconds();

            timeS = year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
            return timeS;
        }

        //출력            
        //document.getElementById("ouput_dateTime").innerHTML =  timeS;
        return timeS;
    }
