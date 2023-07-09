function fSubmit() {
    if (!confirm("Apakah Anda ingin melakukan submit?")) {
        return;
    }
    var phone = document.getElementById("phone").value;
    var nama = document.getElementById("nama").value;
    
    if (nama == "") {
        alert("Nama tidak boleh kosong!");
    } else {
        alert(`Form tersubmit oleh: ${nama}!`);
    }

    if (isNaN(phone)) {
        alert("Nomor HP harus diisikan dengan angka!");
    } else {
        alert(`Nomor HP Anda ${phone}`);
    }
}

function fTekan() {
    document.getElementById("judul").style.color = "blue";
}

function fMain() {
    alert("Hayo");
}

function fBerubah(jk) {
    alert(`Jenis kelamin Anda adalah ${jk}`);
}

function fReset() {
    document.getElementById("judul").style.color = "black";
    document.getElementById("formulir").style.color = "black";
}

function fWarna() {
    document.getElementById("formulir").style.color = "red";
    document.getElementById("judul").style.color = "red";
}

function fKetikHp() {
    var phone = document.getElementById("phone").value;
    if (phone.length < 8) {
        document.getElementById("noHp").style.visibility = "visible";
    } else {
        document.getElementById("noHp").style.visibility = "hidden";
    }
}