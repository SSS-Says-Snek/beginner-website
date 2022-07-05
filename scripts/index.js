let num_clicks = 0;
let amogus_gallery_idx = 0;
let gallery_idxs = {};
let gallery_files = {};


const click_measurer = document.getElementById("click-measurer");
click_measurer.addEventListener('click', () => {
    num_clicks++;

    if (num_clicks === 1) {
        click_measurer.textContent = `You clicked me ${num_clicks} time!`;
    } else {
        click_measurer.textContent = `You clicked me ${num_clicks} times!`;
    }
});


const galleries = document.getElementsByClassName("gallery");
for (const gallery of galleries) {
    let file_info = gallery.id.split(",");

    gallery_idxs[gallery] = 0;
    gallery_files[gallery] = {"filename": file_info[0], "num_files": parseInt(file_info[1])};

    gallery.addEventListener('click', () => {
        gallery_idxs[gallery]++;
        gallery_idxs[gallery] %= gallery_files[gallery]["num_files"];

        let filename = gallery_files[gallery]["filename"];
        let gallery_idx = gallery_idxs[gallery];
        
        gallery.setAttribute("src", `imgs/${filename}_${gallery_idx + 1}.png`);
        gallery.setAttribute("width", gallery.getAttribute("width"));
    })
}