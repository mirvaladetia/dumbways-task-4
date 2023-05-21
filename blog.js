let dataBlog=[];
function addBlog(event) {
    event.preventDefault();
    let judul=document.getElementById("input-judul-cerita").value
    let region=document.getElementById("input-region").value
    let vision=document.getElementById("input-vision").value
    let konten=document.getElementById("input-konten").value
    let personality=document.getElementsByName("personality")
    var result = ""
    for (var i=0; i < personality.length; i++) {
        if (personality[i].checked) {
            result += personality[i].value+" "
        }
    }
    let foto=document.getElementById("unggah-foto-blog").files

    if (foto.length == 0) {
        return alert("Harap unggah foto terlebih dahulu")
    }
    foto = URL.createObjectURL(foto[0])
    
let blog = {
    judul, region, vision, konten, result, foto
}
dataBlog.push(blog)
renderBlog()
}
function renderBlog (){
    document.getElementById("contents").innerHTML =""
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += ` 
        <div class="blog-list-container">
        <div class="blog-list-image">
            <img src="${dataBlog[index].foto}" alt="blog-gambar"/>
        </div>
        <div class="blog-content">
            <div class="button-group">
                <button class="button-unggah">Unggah Post</button>
                <button class="button-hapus">Hapus Post</button>
            </div>
            <h1>
                <a href="blog_list.html" target="blank">
                ${dataBlog[index].judul}</a></h1>
            <div class="post-uploader">
            ${dataBlog[index].region} | ${dataBlog[index].vision} | ${dataBlog[index].result}
            </div>
            <p>
            ${dataBlog[index].konten}
            </p>
        </div>
    </div> 
        `
    }
}