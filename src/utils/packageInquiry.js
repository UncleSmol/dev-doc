/**
 * Opens a dialog to customize and submit a package inquiry
 * 
 * @param {Object} packageData - The package information from pricingPackages
 * @param {Function} onClose - Optional callback for when dialog closes
 */
const handlePackageInquiry = (packageData, onClose) => {
  // Create root element for the dialog
  const dialogRoot = document.createElement('div');
  dialogRoot.id = 'inquiry-dialog-root';
  document.body.appendChild(dialogRoot);
  
  // Store the currently focused element to restore focus later
  const lastActiveElement = document.activeElement;
  
  // Prevent background scrolling
  document.body.style.overflow = 'hidden';
  
  // Create the dialog content
  const dialog = document.createElement('div');
  dialog.className = 'inquiry-dialog-overlay';
  dialog.innerHTML = createDialogHTML(packageData);
  dialogRoot.appendChild(dialog);
  
  // Close function
  const closeDialog = () => {
    document.body.removeChild(dialogRoot);
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
    if (onClose && typeof onClose === 'function') onClose();
  };
  
  // Set up event listeners
  setupEventListeners(dialog, packageData, closeDialog);
  
  // Focus on first focusable element
  setTimeout(() => {
    const closeBtn = dialog.querySelector('.close-inquiry');
    if (closeBtn) closeBtn.focus();
  }, 100);
  
  // Add styles to head if they don't exist yet
  if (!document.getElementById('inquiry-dialog-styles')) {
    addDialogStyles();
  }
};

/**
 * Creates the HTML structure for the inquiry dialog
 */
function createDialogHTML(packageData) {
  return `
    <div class="inquiry-dialog" role="dialog" aria-modal="true">
      <div class="inquiry-header">
        <h2>Request Information: ${packageData.title}</h2>
        <button class="close-inquiry" aria-label="Close dialog">×</button>
      </div>
      
      <div class="inquiry-body">
        <div class="package-summary">
          <h3>${packageData.title}</h3>
          <div class="package-price">
            ${packageData.price}
            ${packageData.monthlyPrice ? `<span class="monthly-price">${packageData.monthlyPrice}</span>` : ''}
          </div>
        </div>
        
        <form id="inquiry-form">
          <div class="form-section">
            <h3>Contact Information</h3>
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email address">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number (optional)</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
            </div>
          </div>
          
          <div class="form-section">
            <h3>Choose Features</h3>
            <div class="feature-list">
              ${packageData.features.map((feature, index) => `
                <div class="feature-item">
                  <label>
                    <input type="checkbox" name="features" value="${feature}" checked>
                    <span>${feature}</span>
                  </label>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="form-section">
            <h3>Additional Message</h3>
            <div class="form-group">
              <textarea id="message" name="message" rows="4" placeholder="Any specific requirements or questions?"></textarea>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="cancel-btn">Cancel</button>
            <button type="submit" class="submit-btn">Send Inquiry</button>
          </div>
        </form>
        
        <div class="sending-indicator" style="display: none;">
          <div class="spinner"></div>
          <p>Sending your inquiry...</p>
        </div>
        
        <div class="success-message" style="display: none;">
          <div class="success-icon">✓</div>
          <h3>Thank You!</h3>
          <p>Your inquiry has been sent. I'll get back to you soon.</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Sets up event listeners for the dialog
 */
function setupEventListeners(dialog, packageData, closeDialog) {
  // Close dialog when clicking the close button
  const closeBtn = dialog.querySelector('.close-inquiry');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDialog);
  }
  
  // Close dialog when clicking the cancel button
  const cancelBtn = dialog.querySelector('.cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeDialog);
  }
  
  // Close dialog when clicking outside
  dialog.addEventListener('click', (e) => {
    if (e.target.classList.contains('inquiry-dialog-overlay')) {
      closeDialog();
    }
  });
  
  // Close dialog when pressing Escape
  document.addEventListener('keydown', function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeDialog();
      document.removeEventListener('keydown', handleKeyDown);
    }
  });
  
  // Handle form submission
  const form = dialog.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit(dialog, packageData, form, closeDialog);
    });
  }
}

/**
 * Handles form submission
 */
function handleFormSubmit(dialog, packageData, form, closeDialog) {
  const formData = new FormData(form);
  const formValues = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    features: formData.getAll('features'),
    message: formData.get('message')
  };
  
  // Hide form and show loading spinner
  form.style.display = 'none';
  const loadingIndicator = dialog.querySelector('.sending-indicator');
  if (loadingIndicator) loadingIndicator.style.display = 'flex';
  
  // Prepare email content
  const subject = `Package Inquiry: ${packageData.title}`;
  const emailBody = `
Name: ${formValues.name}
Email: ${formValues.email}
Phone: ${formValues.phone || 'Not provided'}
Package: ${packageData.title}
Price: ${packageData.price} ${packageData.monthlyPrice ? packageData.monthlyPrice : ''}

Selected Features:
${formValues.features.map(feature => `- ${feature}`).join('\n')}

Additional Message:
${formValues.message || 'No additional message provided.'}
  `;
  
  // Simulate sending (in production replace with actual API call)
  setTimeout(() => {
    // Hide loading indicator
    if (loadingIndicator) loadingIndicator.style.display = 'none';
    
    // Show success message
    const successMessage = dialog.querySelector('.success-message');
    if (successMessage) successMessage.style.display = 'flex';
    
    // Open mailto as fallback (would be replaced with actual email API in production)
    const mailtoLink = `mailto:dev.doc@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Close dialog after a delay
    setTimeout(closeDialog, 3000);
  }, 1500);
}

/**
 * Adds the required styles for the dialog
 */
function addDialogStyles() {
  const styleElement = document.createElement('style');
  styleElement.id = 'inquiry-dialog-styles';
  styleElement.textContent = `
    .inquiry-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1500;
      padding: 20px;
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
    }
    
    .inquiry-dialog {
      background-color: var(--color-background-primary, #1C1C1C);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width: 700px;
      max-height: 85vh;
      overflow-y: auto;
      color: var(--color-text-primary, #FFFFFF);
      border: 1px solid var(--color-border-primary, #2D2D2D);
    }
    
    .inquiry-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px;
      border-bottom: 1px solid var(--color-border-primary, #2D2D2D);
    }
    
    .inquiry-header h2 {
      margin: 0;
      font-size: 1.8rem;
      background: linear-gradient(90deg, var(--color-text-accent, #A97F0F), var(--color-text-highlight, #F32020));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .close-inquiry {
      background: none;
      border: none;
      color: var(--color-text-primary, #FFFFFF);
      font-size: 1.8rem;
      cursor: pointer;
      transition: color 0.3s;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .close-inquiry:hover {
      color: var(--color-text-accent, #A97F0F);
    }
    
    .inquiry-body {
      padding: 25px;
    }
    
    .package-summary {
      text-align: center;
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--color-border-primary, #2D2D2D);
    }
    
    .package-summary h3 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 1.5rem;
    }
    
    .package-price {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--color-text-accent, #A97F0F);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .monthly-price {
      font-size: 1rem;
      margin-top: 5px;
      color: var(--color-text-secondary, #E0E0E0);
    }
    
    .form-section {
      margin-bottom: 25px;
    }
    
    .form-section h3 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    .form-group input, .form-group textarea {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid var(--color-border-primary, #2D2D2D);
      border-radius: 8px;
      background-color: var(--color-background-secondary, #2D2D2D);
      color: var(--color-text-primary, #FFFFFF);
      font-size: 1rem;
    }
    
    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--color-border-accent, #A97F0F);
    }
    
    .feature-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
    }
    
    .feature-item {
      margin-bottom: 10px;
    }
    
    .feature-item label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    
    .feature-item input[type="checkbox"] {
      margin-right: 10px;
      width: auto;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      margin-top: 30px;
    }
    
    .cancel-btn {
      padding: 10px 20px;
      background: none;
      border: 1px solid var(--color-border-primary, #2D2D2D);
      border-radius: 5px;
      color: var(--color-text-primary, #FFFFFF);
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .cancel-btn:hover {
      background-color: var(--color-background-secondary, #2D2D2D);
    }
    
    .submit-btn {
      padding: 10px 25px;
      background: linear-gradient(90deg, var(--color-charcoal-yellow, #A97F0F), var(--color-charcoal-yellow-light, #C99D2B));
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.3s, transform 0.3s;
    }
    
    .submit-btn:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
    
    .sending-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
    }
    
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid rgba(169, 127, 15, 0.3);
      border-radius: 50%;
      border-top-color: var(--color-charcoal-yellow, #A97F0F);
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .success-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
    }
    
    .success-icon {
      width: 70px;
      height: 70px;
      background-color: var(--color-charcoal-yellow, #A97F0F);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      margin-bottom: 20px;
    }
    
    .success-message h3 {
      font-size: 1.8rem;
      margin: 0 0 10px 0;
    }
    
    @media (max-width: 768px) {
      .inquiry-dialog {
        max-height: 90vh;
      }
      
      .feature-list {
        grid-template-columns: 1fr;
      }
      
      .form-actions {
        flex-direction: column-reverse;
      }
      
      .inquiry-header h2 {
        font-size: 1.4rem;
      }
    }
  `;
  
  document.head.appendChild(styleElement);
}

export default handlePackageInquiry;