// Authentication JavaScript for Login and Register

// API Base URL - Update this to match your backend
const API_BASE_URL = 'http://localhost:3000/api';

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Show loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Logging in...';
        
        try {
            // In a real application, make API call to your backend
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                
                // Store token
                if (remember) {
                    localStorage.setItem('authToken', data.token);
                } else {
                    sessionStorage.setItem('authToken', data.token);
                }
                
                // Show success message
                showAlert('success', 'Login successful! Redirecting...');
                
                // Redirect to dashboard or home
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                const error = await response.json();
                showAlert('danger', error.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            showAlert('danger', 'An error occurred. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        // Validation
        if (password !== confirmPassword) {
            showAlert('danger', 'Passwords do not match!');
            return;
        }
        
        if (password.length < 8) {
            showAlert('danger', 'Password must be at least 8 characters long!');
            return;
        }
        
        if (!terms) {
            showAlert('danger', 'Please accept the Terms & Conditions!');
            return;
        }
        
        // Show loading state
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creating account...';
        
        try {
            // In a real application, make API call to your backend
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                
                // Show success message
                showAlert('success', 'Account created successfully! Redirecting to login...');
                
                // Redirect to login
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                const error = await response.json();
                showAlert('danger', error.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            showAlert('danger', 'An error occurred. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Show Alert Function
function showAlert(type, message) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert alert at the top of the form
    const form = document.querySelector('form');
    form.parentElement.insertBefore(alert, form);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Check if user is already logged in
function checkAuth() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    if (token && (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html'))) {
        // User is logged in, redirect to home
        window.location.href = 'index.html';
    }
}

// Run auth check on page load
checkAuth();

// Password strength indicator
const passwordInput = document.getElementById('password');
if (passwordInput && registerForm) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]+/)) strength++;
        if (password.match(/[A-Z]+/)) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[$@#&!]+/)) strength++;
        
        // You can add a visual indicator here
        console.log('Password strength:', strength);
    });
}
