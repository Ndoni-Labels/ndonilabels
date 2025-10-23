// contact.js - Auto-fill quote form from product selection

document.addEventListener('DOMContentLoaded', function() {
  // Check if there's a product stored for quote
  const quoteProduct = sessionStorage.getItem('quoteProduct');
  
  if (quoteProduct) {
    const product = JSON.parse(quoteProduct);
    
    // Find the project type select dropdown
    const projectTypeSelect = document.querySelector('select[required]');
    
    // Find the message textarea
    const messageTextarea = document.querySelector('textarea[required]');
    
    if (projectTypeSelect && messageTextarea) {
      // Map product categories to form options
      const categoryMap = {
        'School & Education Solutions': 'school',
        'Business Solutions': 'business',
        'Stickers & Awards': 'custom',
        'Custom Products': 'custom'
      };
      
      // Set the project type based on category
      const projectType = categoryMap[product.category] || '';
      if (projectType) {
        projectTypeSelect.value = projectType;
      }
      
      // Pre-fill the message with product details
      const message = `I would like to request a quote for the following product:

Product: ${product.title}
Category: ${product.category}
Material: ${product.material.charAt(0).toUpperCase() + product.material.slice(1)}

Please provide pricing and availability information.`;
      
      messageTextarea.value = message;
      
      // Highlight the form to draw attention
      const contactForm = document.querySelector('.contact-form');
      if (contactForm) {
        contactForm.style.animation = 'highlightForm 1.5s ease-out';
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Show a brief notification
      showNotification('Form pre-filled with product details!');
    }
    
    // Clear the stored product after using it
    sessionStorage.removeItem('quoteProduct');
  }
});

// Helper function to show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 10000;
    font-weight: 600;
    animation: slideInRight 0.5s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.5s ease-out';
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes highlightForm {
    0% {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    }
    50% {
      box-shadow: 0 0 30px rgba(0, 255, 153, 0.6);
    }
    100% {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    }
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);