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

musics = [
    {
        id: 1,
        image_description: "https://i.pinimg.com/originals/0a/fa/62/0afa628528a62ebc8b594ff0c40bda68.jpg",
        song_title: "Bad Liar",
        lyric: "So look me in the eyes \n Tell me what you see \n Perfect paradise \n Tearing at the seams \n I wish \n I could escape \n I  don't wanna fake it \n Wish I could erase it \n Make your heart believe \n But I'm a \n bad liar, bad liar \n Now you know \n Now you know \n I'm a bad liar, bad liar \n Now you know, you're \n to go (go)"
    },
    {
        id: 2,
        image_description: "https://i.pinimg.com/originals/0a/fa/62/0afa628528a62ebc8b594ff0c40bda68.jpg",
        song_title: "Next to me",
        lyric: "So look me in the eyes \n Tell me what you see \n Perfect paradise \n Tearing at the seams \n I wish \n I could escape\n I don't wanna fake it \n Wish I could erase it \n Make your heart believe \n But I'm a  \n bad liar, bad liar \n Now you know \n Now you know \n I'm a bad liar, bad liar \n Now you know, you're \n  to go (go)"
    },
    {
        id: 3,
        image_description: "https://i.pinimg.com/originals/0a/fa/62/0afa628528a62ebc8b594ff0c40bda68.jpg",
        song_title: "Demons",
        lyric: "So look me in the eyes \n Tell me what you see \n Perfect paradise \n Tearing at the seams \n I wish \n I could escape\n I don't wanna fake it \n Wish I could erase it \n Make your heart believe \n But I'm a  \n bad liar, bad liar \n Now you know \n Now you know \n I'm a bad liar, bad liar \n Now you know, you're \n  to go (go)"
    }
],

Music = {

},

DOM = {

    containerMusic: document.querySelector('#musics'),

    addMusic(music, index){
        const div = document.createElement('div')
        div.innerHTML = DOM.innerHTMLMusics(music, index)
        DOM.containerMusic.appendChild(div)
    },
    
    innerHTMLMusics(music, index){

        const html =
            `
                <img src="${music.image_description}" alt="Imagem Relacioada a Musica" class="image_description">
                <h3 class="song_title" alt="Titulo da musica"> ${music.song_title} </h3>
                <p class="lyrics" alt="Parte da letra da musica"> ${music.lyric} </p>
            `
        return html
    }

}