const fs = require("fs");

async function apakahadacuk(file) {
    if (fs.existsSync("/" + file)) {
        return true;
    }
    return false;
}

let nama_files = ["soal refrensi bing", "soal refrensi membaca dan menulis", "soal refrensi pk", "soal refrensi pm", "soal refrensi ppu"];

function readdirectory() {
    let wow = 0;
    for (let i = 0; i < nama_files.length; i++) {
        fs.readdir(`./${nama_files[i]}`, (err, files) => {
            if (err) throw err;
            let hariKe = files;
            for (let j = 0; j < hariKe.length; j++) {
                fs.readdir(`./${nama_files[i]}/${hariKe[j]}`, (err, files2) => {
                    if (err) throw err;
                    wow++;
                    let data = JSON.parse(fs.readFileSync(`./${nama_files[i]}/${hariKe[j]}/${hariKe[j]}.json`));
                    let save_file = `./${nama_files[i].replace("soal refrensi ", "")}_${hariKe[j]}_${hariKe[j]}.md`;
                  //  console.log(`Directory nya ./${nama_files[i]}/${hariKe[j]}`)
                    readfile(data, save_file, `./${nama_files[i]}/${hariKe[j]}`);
                });
            }
        });
    }
}

function readfile(data, save_file, directory_images) {
    let p = 0;
    for (let i = 0; i < data.solusi.length; i++) {
        p++
        console.log(data.solusi[i])
    }
    
    console.log(`soal nya ada ${p} wak`)
    /*
    fs.writeFile(`/saved/${save_file}`, save_as, (err) => {
        if (err) {
            console.log("Failed to save the file.");
        } else {
            console.log('MD telah di buat: ' + save_file);
        }
    });
    */
}

readdirectory();
