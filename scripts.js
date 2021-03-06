const Modal = {
    open(){
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close(){
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
},

/*musics = [
    /
        id: 1,
        image_description: "https://i.pinimg.com/originals/0a/fa/62/0afa628528a62ebc8b594ff0c40bda68.jpg",
        song_title: "Bad Liar",
        lyric: "So look me in the eyes \n Tell me what you see \n Perfect paradise \n Tearing at the seams \n I wish \n I could escape \n I  don't wanna fake it \n Wish I could erase it \n Make your heart believe \n But I'm a \n bad liar, bad liar \n Now you know \n Now you know \n I'm a bad liar, bad liar \n Now you know, you're \n to go (go)"
    },
    {
        id: 2,
        image_description: "https://i.pinimg.com/originals/0a/fa/62/0afa628528a62ebc8b594ff0c40bda68.jpg",
        song_title: "Bad Liar",
        lyric: "So look me in the eyes \n Tell me what you see \n Perfect paradise \n Tearing at the seams \n I wish \n I could escape \n I  don't wanna fake it \n Wish I could erase it \n Make your heart believe \n But I'm a \n bad liar, bad liar \n Now you know \n Now you know \n I'm a bad liar, bad liar \n Now you know, you're \n to go (go)"
    }
],*/

Storage = {
    get() {
        return JSON.parse(localStorage.getItem("imagineDragons:musics")) || []
    },

    set(musics) {
        localStorage.setItem("imagineDragons:musics",
            JSON.stringify(musics))
    }
}

Music = {
                
    allMusics: Storage.get(),

    add(music){
        Music.allMusics.push(music)
        App.reload()
    },

    remove(index){
        Music.allMusics.splice(index, 1)
        App.reload()
    }
},

DOM = {

    containerMusic: document.querySelector('#musics'),

    addMusic(music, index){
        const div = document.createElement('div')
        div.innerHTML = DOM.innerHTMLMusics(music, index)
        DOM.containerMusic.appendChild(div)
    },
    
    innerHTMLMusics(music, index){

        lyric = Utils.formatTxt(music.lyric)

        const html =
            `
            <img onclick="Music.remove(${index})" src="assets/excluir.png" alt="Excluir Musica" id="image_excluir">
            <img src="${music.image_description}" alt="Imagem Relacioada a Musica" class="image_description">
            <h3 class="song_title" alt="Titulo da musica"> ${music.song_title} </h3>
            <p class="lyrics" alt="Parte da letra da musica"> ${lyric} </p>
            `
        return html
    },

    clearMusic(){
        DOM.containerMusic.innerHTML = ""
    }
},

Utils = {
    formatTxt(lyric){
        return lyric.replaceAll("/", "<br>")
    }
},

Form = {
    image_description: document.getElementById('image_description'),
    song_title: document.getElementById('song_title'),
    lyric: document.getElementById('lyrics'),

    getValues(){
        return{
            image_description: Form.image_description.value,
            song_title: Form.song_title.value,
            lyric: Form.lyric.value
        }
    },

    validateFields(){
        const {image_description, song_title, lyric} = this.getValues()

        if (image_description.trim() === "" ||
            song_title.trim() === "" ||
            lyric.trim() === "") {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    clearFields() {
        Form.image_description.value = ""
        Form.song_title.value = ""
        Form.lyric.value = ""
    },

    submit(event){
        event.preventDefault()
        try {
            Form.validateFields()
            const music = Form.getValues()
            Music.add(music)
            Form.clearFields()
            Modal.close()
        } catch (error) {
            alert(error.message)
        }
    }
},

App = {
    init(){
        Music.allMusics.forEach(DOM.addMusic)
        Storage.set(Music.allMusics)
    },
    reload(){
        DOM.clearMusic()
        App.init()
    }
}

App.init()