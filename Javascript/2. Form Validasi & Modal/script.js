function fReadMore() {
    document.getElementById("readMore").style.display = "none";
    document.getElementById("artikel").innerHTML += "akan dinanak<br>menjadi nasi menggunakan magic com atau disebut rice cooker.<br>Setelah dimasak, nasi akan disantap oleh Jejak Si Gundul wkwk.<br>"
}

function fRahasia() {
    document.getElementById("tombolRahasia").style.display = "none";
    document.getElementById("rahasia").innerHTML += "Sampah";
}

function fSubmit() {
    event.preventDefault();
    var huruf = /^[a-zA-Z]+$/;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputNama = document.forms["form_daftar"]["nama"].value;
    var inputEmail = document.forms["form_daftar"]["email"].value;
    var inputAlamat = document.forms["form_daftar"]["alamat"].value;
    var inputNomor = document.forms["form_daftar"]["noHp"].value;

    if (inputNama.match(huruf)) {
        var namaValid = inputNama;
    } else {
        alert("Input nama tidak sesuai!");
    }

    if (inputEmail.match(mailFormat)) {
        var emailValid = inputEmail;
    } else {
        alert("Input email tidak sesuai!");
    }

    if (inputAlamat != "") {
        var alamatValid = inputAlamat;
    } else {
        alert("Alamat tidak boleh kosong!");
    }

    if (!isNaN(inputNomor) || inputNomor.toString().length >= 10) {
        var nomorValid = inputNomor;
    } else {
        alert("Input nomor HP tidak sesuai!");
    }
    
    document.getElementById("hasil").innerHTML = namaValid + "<br>" + emailValid + "<br>" + alamatValid + "<br>" + nomorValid;
    document.getElementById("tombolKirim").textContent = "Terdaftar<br>";
}

var seling = 0;
function fInfo() {
    if (seling%2==0) {
        document.getElementById("info").style.display = "block";
        seling += 1;
    } else {
        document.getElementById("info").style.display = "none";
        seling = 0;
    }
    console.log(seling);
    
}