function Login(){ 
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value

    if (user=="zaldi zaldi","binscup","husain","muh cs" && pass=="123"){
        alert("Selamat anda berhasil login")
    }else if (user != "zaldi zaldi","binscup","husain" && pass == "123"){
        alert("Username tidak terdaftar!")
    }else if(user=="zaldi zaldi","binscup","husain","muh cs" && pass != "123"){
        alert("password salah!")
    }else if(user != "zaldi zaldi","binscup","husain"&& pass != "123"){
        alert("Anda adalah orang yang tidak dikenal. pergi dari situs ini!")
    }
}
