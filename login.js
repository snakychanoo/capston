

// function back(){
//     location.href='login.html';
//     console.log("학과 : "+major);
//     console.log("학번 : "+id);
//     console.log("이름 : "+name);
//     console.log("비밀번호 : "+pw);
// }

function create_id(){
    // id의 값을 각 변수에 저장
    var major = document.querySelector("#major").value;
    var id = document.querySelector("#join_studentNum").value; //id = join_studentNum
    var name = document.querySelector("#name").value;
    var pw = document.querySelector("#join_pw").value; 
    
    // 콘솔로 확인
    console.log("학과 : "+major);
    console.log("학번 : "+id);
    console.log("이름 : "+name);
    console.log("비밀번호 : "+pw);

    
    location.href='login.html'; // 회원가입 후 login화면으로 되돌아감
    
}

function login(){
    var id = document.querySelector("#studentNum").value;
    var pw = document.querySelector("#pw").value;

    if(id=="" || pw=="") {
        alert("로그인을 할 수 없습니다. 아이디 또는 비밀번호를 확인하세요.")
    }
    else{
        location.href='main_lg.html';
    }

}