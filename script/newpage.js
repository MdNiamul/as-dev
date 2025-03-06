document.getElementById('newpage').addEventListener('click', 
    function(event){
        event.preventDefault();
        window.location.href = 'question.html';
    });

    document.getElementById('back').addEventListener('click', 
        function(event){
            event.preventDefault();
            window.location.href = 'index.html';
        });