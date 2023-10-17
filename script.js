$(document).ready(function() {
    $('#send-button').click(function() {
        sendMessage();
    });

    $('#user-input').keypress(function(event) {
        if (event.which === 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        var userMessage = $('#user-input').val();
        if (userMessage.trim() === '') return;

        appendMessage('You', userMessage);

        $.ajax({
            type: 'POST',
            url: '/ask',
            data: { 'user_input': userMessage },
            success: function(response) {
                var botResponse = response.response;
                appendMessage('SmartBOT', botResponse);
            }
        });

        $('#user-input').val('');
    }

    function appendMessage(sender, message) {
        $('#chat-output').append('<div><strong>' + sender + ':</strong> ' + message + '</div>');
        $('#chat-output').animate({ scrollTop: $('#chat-output').prop('scrollHeight') }, 300);
    }
});
