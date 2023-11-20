var listaFilmeFavorito = [];
var listaNomeFilmes = []
var listaTrailer = [];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    listaFilmeFavorito.push(filmeFavorito)
    recarregarFilmes();
    limparCampos();
}

function limparCampos() {
    document.getElementById("posterFilme").value = '';
    document.getElementById("nomeFilme").value = '';
    document.getElementById("linkFilme").value = '';
}

function recarregarFilmes() {

    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = '';

    for (let index = 0; index < listaFilmeFavorito.length; index++) {

        var containerFilme = document.createElement('div');
        containerFilme.classList.add('poster-filme')

        var paragrafoNomeFilme = document.createElement('p');
        paragrafoNomeFilme.textContent = listaNomeFilmes[index];
        containerFilme.appendChild(paragrafoNomeFilme);

        var linkFilmes = document.createElement('a');
        linkFilmes.href = listaTrailer[index];
        linkFilmes.target = '_blank';

        var imagemFilme = document.createElement('img');
        imagemFilme.src = listaFilmeFavorito[index];
        linkFilmes.appendChild(imagemFilme);
        containerFilme.appendChild(linkFilmes);

        var divExclusao = document.createElement('div');
        divExclusao.classList.add('div-exclusao')


        var iconeExclusao = document.createElement('img');
        iconeExclusao.classList.add('excluir-filme');
        iconeExclusao.src = 'img/lixeira.png';
        iconeExclusao.addEventListener('click', function () {
            removerFilme(index);
        });

        divExclusao.appendChild(iconeExclusao);
        containerFilme.appendChild(divExclusao);
        elementoListaFilmes.appendChild(containerFilme);
    }
}

function removerFilme(index) {
    listaFilmeFavorito.splice(index, 1);
    listaNomeFilmes.splice(index, 1);
    recarregarFilmes();
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function submitForm() {
    var posterFilme = document.getElementById("posterFilme").value;
    listaFilmeFavorito.push(posterFilme)
    var nomeFilme = document.getElementById("nomeFilme").value;
    listaNomeFilmes.push(nomeFilme)
    var linkFilme = document.getElementById("linkFilme").value;
    listaTrailer.push(linkFilme)

    recarregarFilmes();
    limparCampos();
    closeModal();
}