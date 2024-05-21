document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('certName').innerText = name;
    
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('certificate').classList.remove('hidden');
});
