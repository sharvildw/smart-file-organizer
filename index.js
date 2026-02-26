const fs = require("fs");
const path = require("path");

const folderPath = __dirname; // current directory

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {

        // Skip folders and index.js itself
        if (file === "index.js") return;

        let ext = path.extname(file).slice(1); // jpg, pdf, zip

        if (ext === "") return;

        let dir = path.join(folderPath, ext);

        // Create folder if not exists
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        // Move file
        fs.rename(
            path.join(folderPath, file),
            path.join(dir, file),
            err => {
                if (err) console.log(err);
            }
        );
    });

    console.log("Files organized successfully ✅");
});
