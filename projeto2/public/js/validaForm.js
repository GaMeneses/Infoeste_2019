function validar(){
    let codigo = $('#codigo').val();
    let nome = $('#nome').val();
    let curso = $('#cursos').val();
    let mensagem = $('#mensagem').val();
    let email = $('#email').val();

    if (codigo == '' || codigo <= 0) {
        $('#codigo').addClass('erro');
        return;
    }
    else
    {
        $('#codigo').removeClass('erro');
    }

    if(nome.lenght > 10 || nome.trim() == '') {
        $('#nome').addClass('erro');
        return;
    }
    else
    {
        $('#nome').removeClass('erro');
    }

    if(curso.trim() == '') {
        $('#cursos').addClass('erro');
        return;
    }
    else
    {
        $('#cursos').removeClass('erro');
    }

    if(email.trim().length <= 0)
    {
        $('#email').addClass('erro');
        return;
    }else
    {
        let ema = email.split('@');
        console.log(ema);
        if(ema.length <=1 ){
            $('#email').addClass('erro');
            return;
        }else{
            if(ema[0].length <= 0 || ema[1].length <= 0) {
                $('#email').addClass('erro');
                return;
            }else 
            {
                if(ema[1].length <= 0)
                {
                    $('#email').addClass('erro');
                    return;
                }else
                {
                    let e = ema[1].split('.');
                    if(e.length <= 0 || e[1] != 'com')
                    {
                        console.log(e);
                        $('#email').addClass('erro');
                        return;
                    }else
                    $('#email').removeClass('erro');
                }
                
            }
        }

       
    }
  addtable(codigo,nome,curso);
  limparCampos();
}

function limparCampos()
{
    $('#codigo').val('');
    $('#nome').val('');
    $('#cursos').val('');
    $('#email').val('');
    $('#mensagem').val('');
}

function addtable(c, n, cu) {
    $('tbody').append(`
        <tr id='${c}#${n}#${cu}'>
            <td>${c}</td>
            <td>${n}</td>
            <td onclick="removeTabela(this)">X</td>
            <td onclick="alt(this)">A</td>
        </tr>
    `);
}

function removeTabela(td) {
    $(td.closest('tr')).remove();    
}

function alt(td) {
    let data = td.closest('tr').id.split('#');

    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);

}