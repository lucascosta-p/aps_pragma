function validateForm() {
    let valid = true;

    // Limpar mensagens de erro
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';
    document.getElementById('assuntoError').innerHTML = '';

    // Validar campo nome
    let name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerHTML = 'O campo nome é obrigatório.';
        valid = false;
    }

    // Validar campo e-mail
    let email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').innerHTML = 'O campo e-mail é obrigatório.';
        valid = false;
    }

    let assunto = document.getElementById('assunto').value;
    if (assunto.trim() === '') {
        document.getElementById('assuntoError').innerHTML = 'O campo assunto é obrigatório.';
        valid = false;
    }

    // Validar campo mensagem
    let message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').innerHTML = 'O campo mensagem é obrigatório.';
        valid = false;
    }

    if (valid) {
        alert('Sua mensagem foi enviada com sucesso!')
        window.location.href = 'index.html';
    }

    return valid;
}