const fs = require("fs");

async function apakahadacuk(file){
    if (fs.existsSync("/" + file)) {
       return true;
    }
    return false;
}

let huruf = ['A', 'B', 'C', 'D', 'E']

function readfile(){
    let data = JSON.parse(fs.readFileSync("./1.json"));
    
    for(let i = 0; i < data.soal.length; i++){

        //handling soal cerita bergambar

        console.log(`### ${i+1}.\n\n`)
        let pukimak = data.soal[i].soalCerita.imageUrls;
        if(data.soal[i].soalCerita.text.length != 0){
            console.log(`**Question:** ${data.soal[i].soalCerita.text}`)
        } 
        

        
        if (pukimak.length != 0){
            for(let j = 0; j < pukimak.length; j++){
                let data_soal = data.soal[i].soalCerita.imageUrls[j];
                if(apakahadacuk(data_soal.replace("{{root_media}}", ""))){
                    //console.log()
                    console.log(`![](images/${data_soal.replace("{{root_media}}", "")})\n\n`)
                } else {
                    console.log("File terhapus dari database")
                }
            }
        }
            
        
        if(data.soal[i].soal.text.length != 0){
            console.log(`**Soal:** ${data.soal[i].soal.text}\n`)  
        }
        

        // handling soal ber gambar
        
       let soal_gambar = data.soal[i].soal.imageUrls;
       for(let j = 0; j < soal_gambar.length; j++){
        if(apakahadacuk(soal_gambar[j].replace("{{root_media}}", ""))){
            console.log(`![](images/${soal_gambar[j].replace("{{root_media}}", "")})\n\n`)
        } else {
            console.log("File terhapus dari database")
        }
       }
        

       //handling opsi soal
       let opsi_soal = data.soal[i].opsiSoal;
       if(data.soal[i].opsiSoal == null){
        console.log(`### Soal Essay`)
       } else {
        console.log("**Opsi:**\n\n")
        for(let l = 0; l < 5; l++){
            if(opsi_soal[l] == null){
                break;
            }
            console.log(`- ${huruf[l]}. ${opsi_soal[l].text}`)
        }
		console.log(`\n`)
        for(let j = 0; j < 4; j++){
            if(opsi_soal[j] == null){
                break;
            }
           let opsi_soal_gambar = opsi_soal[j].imageUrls;
          
           
          for(let k = 0; k < opsi_soal_gambar.length; k++){
            if(apakahadacuk(opsi_soal_gambar[k].replace("{{root_media}}", ""))){

                console.log(`![](images/${opsi_soal_gambar[k].replace("{{root_media}}", "")})\n`)
            } else {
                console.log("jancuk g ada anjg")
            }
            
          }
        }
      
        
       }
       
      
       
    }

}

readfile()

