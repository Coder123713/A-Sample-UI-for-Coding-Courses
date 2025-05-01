document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form');
    if (!form) return;
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Simulate processing...
      alert('🎉 Payment successful! Welcome to CodeBright.');
      window.location.href = 'index.html';
    });
  });
  